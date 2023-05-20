# Oracle

After installing the Agent, the next step is to establish a connection between the Agent and Oracle through Tapdata Cloud. This connection is crucial as it allows you to utilize the Oracle data source for various data replication or development tasks.

Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.

## Supported Versions

Oracle 9i, 10g, 11g, 12c, 19c

## Precautions
* To check the setting of the connect_time parameter, which automatically disconnects timeout sessions and may lead to real-time synchronization exceptions, you can use the following command.

   ```sql
   select resource_name, limit from dba_profiles where profile=( select profile from dba_users where username = '<username>');
   ```

* To ensure smooth database operation, it is important to allocate sufficient storage space for archive logs and prevent overcrowding.
## As a Source Database

1. Log in to the Oracle database as a user with DBA privileges.

2. Turn on database archive mode (ARCHIVELOG).

   :::tip

   You can verify if the feature is enabled by executing the `SELECT log_mode FROM v$database` command. If the result returned is `ARCHIVELOG`, it indicates that the feature is turned on, and you can skip this step.

   :::

   1. Execute the following command to close the database.It is advisable to perform this operation during off-peak times to minimize any impact on data reading and writing.

      ```sql
      shutdown immediate;
      ```

   2. Execute the following command to start and mount the database.

      ```sql
      startup mount;
      ```

   3. Execute the following command to open archive and database.

      ```sql
      alter database archivelog;
      alter database open;


3. Turn on Supplemental Logging.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="9i" label="Oracle 9i" default>
    <pre>ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;</pre>
   </TabItem>
   <TabItem value="10g11g" label="Oracle 10g、11g">
    <pre>ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;<br />
ALTER system switch logfile;<br />
ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;</pre>
   </TabItem>
   <TabItem value="12c" label="Oracle 12c">
    <pre>/* Execute the following command to confirm whether supplemental logging is enabled */<br />
    SELECT supplemental_log_data_min, supplemental_log_data_pk, supplemental_log_data_all FROM v$database;
</pre>
<p>If the first two columns returned are Yes or Implicit, only identification key logging is enabled, and full supplemental logging is required. </p>
   </TabItem>
  </Tabs>

4. Turn on the identification key log.

   :::tip

   When using the 12c PDB, it is recommended to open the log for the container's table, and you can execute the command `ALTER SESSION SET CONTAINER=;<pdb>;` to apply the changes to the container.

   :::

   * **Turn on for single table**

      ```sql
      ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
      ALTER TABLE <schema name>.<table name> ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;
      ```

   * **Turn on for all tables**

      ```sql
      ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (PRIMARY KEY) COLUMNS;
      ```

5. Turn on full supplemental logging.

   * **Turn on for single table**

      ```sql
      ALTER DATABASE ADD SUPPLEMENTAL LOG DATA;
      ALTER TABLE <schema name>.<table name> ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
      ```

   * **Turn on for all tables**

      ```sql
      ALTER DATABASE ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
      ```

6. Submit changes.

   ```sql
   ALTER SYSTEM SWITCH LOGFILE;
   ```

7. Create an account for data synchronization/development tasks.

<Tabs className="unique-tabs">
    <TabItem value="account10g11g" label="Oracle 10g&#12289;11g" default>
    <pre>CREATE USER username IDENTIFIED BY password;<br />
GRANT create session, alter session, execute_catalog_role, select any dictionary, select any transaction, select any table, create any table, create any index, unlimited tablespace to user name;</pre>
   </TabItem>
   <TabItem value="account12c-m" label="Oracle 12c（Multi-tenant Mode）">
    <pre>/* Create user in Oracle 12c multi-tenant environment, must be created in cdb, and the naming convention is c##name */<br />
    ALTER SESSION SET CONTAINER=cdb$root;<br />
CREATE USER username IDENTIFIED BY password CONTAINER=all;<br />
GRANT create session, alter session, set container, select any dictionary, select any transaction, logmining, execute_catalog_role, create any table, create any index, unlimited tablespace TO username CONTAINER=all;<br />
ALTER SESSION SET CONTAINER=pdb;</pre>
    <p>Repeat the last command to grant the SELECT permission, depending on your permission needs for the table. When you are configuring a source database connection, use this user to authenticate with JDBC. Note that the entire username (including c ##) must be used as the username for the JDBC connection. </p>
   </TabItem>
   <TabItem value="account12c-s" label="Oracle 12c（Standard Mode）">
    <pre>/* Execute the following command to confirm whether supplemental logging is enabled */
<br />
    CREATE USER username IDENTIFIED BY password;<br />
GRANT create session, alter session, select any dictionary, select any transaction, logmining, execute_catalog_role, create any table, create any index, unlimited tablespace TO username;
</pre>

<p>Repeat the last command to grant the SELECT permission, depending on your permission needs for the table. </p>
   </TabItem>
  </Tabs>



## As a Target Database
1. Log in to the Oracle database as a user with DBA privileges.

2. To facilitate data  synchronization and development tasks, create an account with schema owner privileges.

   For more information, see [CREATE USER](https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_8003.htm) and [GRANT](https://docs.oracle.com/cd/B19306_01/server.102/b14200/statements_9013.htm).



## Next step

[Connect to Oracle](../../../user-guide/connect-database/certified/connect-oracle)



