# Oracle

After installing the Agent, the next step is to establish a connection between the Agent and Oracle through Tapdata Cloud. This connection is crucial as it allows you to utilize the Oracle data source for various data replication or development tasks. Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```


## Supported Versions

Oracle 9i, 10g, 11g, 12c, 19c

## Precautions
* To check the setting of the connect_time parameter, which automatically disconnects timeout sessions and may lead to real-time synchronization exceptions, you can use the following command.

   ```sql
   SELECT resource_name, limit FROM dba_profiles WHERE profile=( SELECT profile FROM dba_users WHERE username = 'username');
   ```

* To ensure smooth database operation, it is important to allocate sufficient storage space for archive logs and prevent overcrowding, you can use the `ALTER SYSTEM SET DB_RECOVERY_FILE_DEST_SIZE` to set the storage capacity.
## Limitations

* When Oracle as a source database:
   * If the incremental event exceeds a rate of 10,000 queries per second, it could lead to a delay in data processing due to the current log parsing speed.
   * At this time, the raw log function cannot be used on RAC-ASM deployment architectures. Additionally, it is not possible to retrieve raw logs from non-master nodes of the DG architecture.
* When Oracle as a target database:
   * If you assign a non-empty value of Db2 as "", it may fail to write when transferred to Oracle , as Oracle considers it to be null.


## As a Source Database

1. Log in to the Oracle database using the DBA role.

2. Execute the following command to create a user for data synchronization/development tasks.

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Oracle Standard Mode">
```
```sql
CREATE USER username IDENTIFIED BY password;
```
</TabItem>

<TabItem value="Oracle Multi-tenant Mode">

```sql
-- Switch to the root container
ALTER SESSION SET CONTAINER=cdb$root;

-- Create a user
CREATE USER username IDENTIFIED BY password CONTAINER=all;
```
</TabItem>
</Tabs>

- **username**: Enter user name. If you're using Oracle in multi-tenant mode, you need to add the prefix `C##` to the username.
- **password**: Enter user's password.


3. Grant permissions to the account we just created, or you can customize permissions control based on business needs.

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Read Full Data Only">
```
```sql
-- Replace the username with the actual username
GRANT CREATE SESSION, SELECT ANY TABLE TO username;
```
</TabItem>

<TabItem value="Read Full Data and Incremental Data">

```sql
-- Replace the username with the actual username
GRANT CREATE SESSION,
      ALTER SESSION,
      EXECUTE_CATALOG_ROLE,
      SELECT ANY DICTIONARY,
      SELECT ANY TRANSACTION,
      SELECT ANY TABLE
TO username;
```
:::tip
When the Oracle version is 12c or above, you also need to execute the `GRANT LOGMINING TO username;` command.
:::
</TabItem>
</Tabs>


4. If you need to obtain the data changes from the database for incremental synchronization, you also need to follow the steps below.

   1. Turn on database archive mode (ARCHIVELOG).

      :::tip

      You can verify if the feature is enabled by executing the `SELECT log_mode FROM v$database` command. If the result returned is **ARCHIVELOG**, it indicates that the feature is turned on, and you can skip this step.

      :::

      1. Execute the following command to close the database.It is advisable to perform this operation during off-peak times to minimize any impact on data reading and writing.

         ```sql
         SHUTDOWN IMMEDIATE;
         ```

      2. Execute the following command to start and mount the database.

         ```sql
         STARTUP MOUNT;
         ```

      3. Execute the following command to open archive and database.

         ```sql
         ALTER DATABASE archivelog;
         ALTER DATABASE OPEN;
         ```

   2. Turn on Supplemental Logging.
      ```sql
      ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
      ```

   3. Select the following command to turn on the identification key log for a single table or all tables.

      ```sql
      -- Turn on for single table, you need to replace the Schem_Name and Table_Name with yours
      ALTER TABLE Schema_Name.Table_Name ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;

      -- Turn on for all tables
      ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;
      ```

      :::tip

      When using Oracle in multi-tenant mode, it's recommended to first open the designated container by running the `ALTER SESSION SET CONTAINER=PDB Name;` command before executing any other commands in order to properly apply changes to the container.

      :::

   4. Select the following command to turn on full supplemental logging for a single table or all tables.

      ```sql
      -- Turn on for single table, you need to replace the Schem_Name and Table_Name with yours
      ALTER TABLE Schema_Name.Table_Name ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;

      -- Turn on for all tables
      ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
      ```

   5. Submit changes

      ```sql
      ALTER SYSTEM SWITCH LOGFILE;
      ```

   6. When using Oracle in multi-tenant mode, you also need to execute the following command to open the pluggable database.

      ```sql
      ALTER PLUGGABLE DATABASE ALL OPEN;
      ```



## As a Target Database

1. Log in to the Oracle database using the DBA role.

2. Execute the following command to create a user for data synchronization/development tasks.

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Oracle Standard Mode">
```
```sql
CREATE USER username IDENTIFIED BY password;
```
</TabItem>

<TabItem value="Oracle Multi-tenant Mode">

```sql
-- Switch to root container
ALTER SESSION SET CONTAINER=cdb$root;

-- Create a user
CREATE USER username IDENTIFIED BY password CONTAINER=all;
```
</TabItem>
</Tabs>

- **username**: Enter user name. If you're using Oracle in multi-tenant mode, you need to add the prefix `C##` to the username.
- **password**: Enter user's password.


3. Grant permissions to the account we just created, or you can customize permissions control based on business needs.

```mdx-code-block
<Tabs className="unique-tabs">
<TabItem value="Oracle Standard Mode">
```
```sql
-- Replace the username with the actual username
GRANT CREATE SESSION,
      CREATE ANY TABLE,
      DELETE ANY TABLE,
      DROP ANY TABLE,
      INSERT ANY TABLE,
      SELECT ANY TABLE,
      UPDATE ANY TABLE,
      ALTER ANY INDEX,
      CREATE ANY INDEX,
      DROP ANY INDEX,
      UNLIMITED TABLESPACE
TO  username;
```
</TabItem>

<TabItem value="Oracle Multi-tenant Mode">

```sql
-- Replace the username with the actual username
GRANT CREATE SESSION,
      CREATE ANY TABLE,
      DELETE ANY TABLE,
      DROP ANY TABLE,
      INSERT ANY TABLE,
      SELECT ANY TABLE,
      UPDATE ANY TABLE,
      ALTER ANY INDEX,
      CREATE ANY INDEX,
      DROP ANY INDEX,
      UNLIMITED TABLESPACE
TO  username CONTAINER=all;
```
</TabItem>
</Tabs>




## Next step

[Connect to an Oracle Database](../../../user-guide/connect-database/certified/connect-oracle)



