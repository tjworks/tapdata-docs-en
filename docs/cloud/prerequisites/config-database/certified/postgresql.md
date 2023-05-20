# PostgreSQL

After installing the Agent, the next step is to establish a connection between the Agent and PostgreSQL through Tapdata Cloud. This connection is crucial as it allows you to utilize the PostgreSQL data source for various data replication or development tasks.

Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.



## Supported Versions

PostgreSQL 9.4, 9.5, 9.6, 10.x, 11.x, 12



## Incremental Data Sync Principle

PostgreSQL's logical decoding function enables Tapdata Cloud to extract and process changes made to the transaction log, ensuring a user-friendly approach. The supported Change Data Capture (CDC) mechanisms include:

- **Logical Decoding**: Parses logical change events from Wal logs.
- **Replication Protocol**: Offers a real-time subscription mechanism for consumers to receive database changes.
- **Export snapshot**: Allows exporting consistent snapshots of the database using the pg_export_snapshot function.
- **Replication Slot**: Enables saving consumer offsets and tracking subscriber progress for efficient replication.



## As a Source Database

1. Log in to the PostgreSQL database as an administrator.

2. To ensure that the entire row is used as the identifier for logging during UPDATE/DELETE operations, modify the replication identity to **FULL**. This setting determines the field used for logging when changes occur.

   ```sql
   ALTER TABLE '[schema]'.'[table name]' REPLICA IDENTITY FULL;   
   ```

3. Install the decoder plugin. Choose according to your business needs and current version:

   - [Wal2json](https://github.com/eulerto/wal2json/blob/master/README.md)(PostgreSQL 9.4 and above)

      Deletion cannot be synchronized if the source table does not have a primary key.

   - [Decoderbufs](https://github.com/debezium/postgres-decoderbufs)(PostgreSQL 9.6 and above)

   - [Pgoutput](https://www.postgresql.org/docs/15/sql-createsubscription.html)(PostgreSQL 10.0 and above)

   To install **Wal2json**, follow the steps below:

   1. Make sure the environment variable path contains `/bin`.

      ```bash
      export PATH=$PATH:<PostgreSQL Installation Dir>/bin
      ```

   2. Execute the following command to complete the installation of the plugin.

      ```bash
      git clone https://github.com/eulerto/wal2json -b master --single-branch \
      && cd wal2json \
      && USE_PGXS=1 make \
      && USE_PGXS=1 make install \
      && cd .. \
      && rm -rf wal2json
      ```

      :::tip

      If you encounter an error while executing the make command, such as "fatal error: [xxx].h: No such file or directory," you can resolve it by installing the postgresql-server-dev package. For Debian-based systems, you can use the following command as a reference to install the required package: `apt-get install -y postgresql-server-dev-<version>`.

      :::

   3. Modify the configuration file **postgresql.conf** to load the plugin at startup.

      ```bash
      shared_preload_libraries = 'decoderbufs,wal2json'
      ```

   4. Modify the configuration file postgresql.conf to set the replication property.

      ```bash
      # REPLICATION
      wal_level = logical
      max_wal_senders = 1 # Greater than zero
      max_replication_slots = 1 # Greater than zero
      ```

4. Create an account for data synchronization/development tasks. For more information, See [CREATE USER](https://www.postgresql.org/docs/10/sql-createuser.html) and [GRANT](https://www.postgresql.org/docs/10/sql-grant.html).

5. Grant permissions to the database account that we just created, we recommend setting more granular permissions control based on business needs.

   ```sql
   -- Permissions for ful data sync
   GRANT SELECT ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
   -- Permissions for incremental data sync
   CREATE ROLE <rolename> REPLICATION LOGIN;
   CREATE USER <username> ROLE <rolename> PASSWORD '<password>';
   -- Or
   CREATE USER <username> WITH REPLICATION LOGIN PASSWORD '<password>';
   ```

6. Modify the configuration file pg_hba.conf to add the following content.

   ```bash
   local   replication     <youruser>                     trust
   host    replication     <youruser>  0.0.0.0/32         md5
   host    replication     <youruser>  ::1/128            trust
   ```

7. (Optional) Test log plugin.

   1. Connect to the postgres database, switch to the database that needs to be synchronized, and create a test table.

      ```sql
      -- Suppose the database to be synchronized is postgres, and the schema is public
      \c postgres

      create table public.test_decode
      (
        uid    integer not null
            constraint users_pk
                primary key,
        name   varchar(50),
        age    integer,
        score  decimal
      )
      ```

   2. Create a slot connection, using the wal2json plugin as an example.

      ```sql
      select * from pg_create_logical_replication_slot('slot_test', 'wal2json')
      ```

   3. Insert a record into the test table, then check logs and see the returned results, whether there is information about the operation just inserted.

      ```sql
      select * from pg_logical_slot_peek_changes('slot_test', null, null)
      ```

   4. Once the slot connection and test table have been confirmed to be working, you can delete them.

      ```sql
      select * from pg_drop_replication_slot('slot_test')
      drop table public.test_decode
      ```

8. (Optional) To perform incremental synchronization using the last updated timestamp, you need to perform the following steps.

   1. In the source database, execute the following command to create a public function, which needs to replace the schema name.

      ```sql
      CREATE OR REPLACE FUNCTION <schema>.update_lastmodified_column()
        RETURNS TRIGGER language plpgsql AS $$
        BEGIN
            NEW.last_update = now();
            RETURN NEW;
        END;
      $$;
      ```

   2. Create fields and triggers, each table needs to be executed once, such as the table name **mytable**.

      ```sql
      // Create last_update field
      alter table <schema>.mytable add column last_udpate timestamp default now();
      
      // Create trigger
      create trigger trg_uptime before update on <schema>.mytable for each row execute procedure
        update_lastmodified_column();
      ```



## As a Target Database

1. Log in to the PostgreSQL database as an administrator.

2. Create an account for data synchronization/development tasks. For more information, See [CREATE USER](https://www.postgresql.org/docs/10/sql-createuser.html) and [GRANT](https://www.postgresql.org/docs/10/sql-grant.html).

3. Execute the command in the following format to grant permissions to the database account, we recommend setting more granular permissions control based on business needs.

   ```sql
   GRANT INSERT,UPDATE,DELETE,TRUNCATE
   ON ALL TABLES IN SCHEMA <schemaname> TO <username>;
   ```



##  Exceptions Resolution

If the Change Data Capture (CDC) process is abruptly stopped, the connection to the PostgreSQL master node may not be terminated correctly, leading to the persistence of the Slot. To prevent the Slot from occupying system resources, it becomes necessary to manually log in to the master node and delete the Slot.

```sql
// Check if there is any information with slot_name=tapdata
TABLE pg_replication_slots;

// Delete Slot
select * from pg_drop_replication_slot('tapdata');
```





## Next step

[Connect to PostgreSQL](../../../user-guide/connect-database/certified/connect-postgresql.md)

