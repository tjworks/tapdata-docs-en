# MySQL

After installing the Agent, the next step involves connecting it to the MySQL database via Tapdata Cloud. This connection enables you to utilize the data source for various data replication or development tasks. 

Prior to establishing the connection, it is important to complete the necessary preparations outlined in the provided article, which may include authorizing an account and performing other relevant steps. These preparations ensure a seamless and secure connection between the Agent and the MySQL database, enabling efficient data handling and processing.

## Supported Versions

MySQL 5.0, 5.1, 5.5, 5.6, 5.7, 8.x

## As a Source Database

To ensure the smooth execution of the task, you need to turn on Binlog for MySQL database (incremental data synchronization can be achieved), and then create a database account for data replication/development tasks.

1. Log in to the MySQL database and execute the following commands to create an account.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="mysql5" label="MySQL 5.x" default>
    <pre>CREATE USER 'username'@'host' IDENTIFIED BY 'password';</pre>
   </TabItem>
   <TabItem value="mysql8" label="MySQL 8.x">
    <pre>CREATE USER 'username'@'host' IDENTIFIED WITH mysql_native_password BY 'password';</pre>
   </TabItem>
  </Tabs>

* **username**: Enter user name.
* **password**: Enter password.
* **host**: Enter the host that can be accessed by the account, percent (%) means to allow all host.

Example: Create an account named tapdata.

```sql
CREATE USER 'tapdata'@'%' IDENTIFIED BY 'Tap@123456';
```



2. Grant permissions to the account that we just created, we recommend setting more granular permissions control based on business needs.

<Tabs className="unique-tabs">
    <TabItem value="onedatabase" label="Grant to Specified DB" default>
    <pre>GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'username' IDENTIFIED BY 'password';<br /> 
GRANT SELECT ON database_name.* TO 'username' IDENTIFIED BY 'password';</pre>
   </TabItem>
   <TabItem value="all" label="Grant to All DB">
    <pre>GRANT REPLICATION SLAVE, REPLICATION CLIENT ON *.* TO 'username' IDENTIFIED BY 'password';<br /> 
GRANT SELECT ON *.* TO 'username' IDENTIFIED BY 'password';</pre>
   </TabItem>
  </Tabs>

* **database_name**: Enter database name.
* **username**: Enter user name.
* **password**: Enter password.

3. To ensure that the incremental data of the MySQL database can be read, you need to follow the steps below to turn on Binlog.

   1. Use the `vim` command to modify the configuration in `$MYSQL_HOME/mysql.cnf`, for example:

      ```
      server_id         = 223344
      log_bin           = mysql-bin
      expire_logs_days  = 1
      binlog_format     = row
      binlog_row_image  = full
      ```

      - **server_id**: Set to an integer greater than 0, this value must be unique per server and replication client.
      - **log_bin**: The base name of the Binlog file.
      - **expire_logs_days**: The number of days to keep the binary log file, automatically deleted when it expires.
      - **binlog_format**: Set to row.
      - **binlog_row_image**: Set to full.

   2. After the modification is completed, execute the following command to restart the MySQL server.

      ```bash
      /etc/inint.d/mysqld restart
      ```

   3. (Optional) Log in to the MySQL database and execute the following command to confirm that the configuration has taken effect, that is, in the output result, the value of the **binlog_format** is **ROW**.

      ```sql
      SHOW VARIABLES LIKE 'binlog_format';
      ```

      The output is as follows:

      ```sql
      +---------------+-------+
      | Variable_name | Value |
      +---------------+-------+
      | binlog_format | ROW   |
      +---------------+-------+
      1 row in set (0.00 sec)
      ```



## As a Target Database

1. Log in to the MySQL database and execute the following commands to create an account.

<Tabs className="unique-tabs">
    <TabItem value="mysql5" label="MySQL 5.x" default>
    <pre>CREATE USER 'username'@'host' IDENTIFIED BY 'password';</pre>
   </TabItem>
   <TabItem value="mysql8" label="MySQL 8.x">
    <pre>CREATE USER 'username'@'host' IDENTIFIED WITH mysql_native_password BY 'password';</pre>
   </TabItem>
  </Tabs>

* **username**: Enter user name.
* **password**: Enter password.
* **host**: Enter the host that can be accessed by the account, percent (%) means to allow all host.

Example: Create an account named tapdata.

```sql
CREATE USER 'tapdata'@'%' IDENTIFIED BY 'Tap@123456';
```



2. Grant permissions to the account that we just created, we recommend setting more granular permissions control based on business needs.

<Tabs className="unique-tabs">
    <TabItem value="onedatabase" label="Grant to Specified DB" default>
    <pre>GRANT SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, DROP ON database_name.* TO 'username';</pre>
   </TabItem>
   <TabItem value="all" label="Grant to All DB">
    <pre>GRANT SELECT, INSERT, UPDATE, DELETE, ALTER, CREATE, CREATE ROUTINE, CREATE TEMPORARY TABLES, DROP ON *.* TO 'username';</pre>
   </TabItem>
  </Tabs>

* **database_name**: Enter database name.
* **username**: Enter user name.



## FAQ

* Q: Can I synchronze data from MySQL replicas?

   A: Yes, in addition to implementing the above settings for MySQL replicas, you also need to:

   1. Execute the following command to check the parameter configuration of the MySQL replicas and ensure that the value of **log_slave_updates** is 1.

      ```sql
      Select @@log_slave_updates
      ```

   2. Execute the command `SHOW SLAVE STATUS` or `SHOW REPLICA STATUS` to check the delay information of the replica.

      Perform data synchronization after repairing according to specific error reporting.

* Q: "Unknown error 1044" appears in the dialog after the connection test.

   A: If the correct permissions have been granted, can be checked and fixed by:

   ```sql
   SELECT host,user,Grant_priv,Super_priv FROM mysql.user where user='username';
   // Check if the value of Grant_priv field is Y, if not, execute the following command.
   UPDATE mysql.user SET Grant_priv='Y' WHERE user='username';
   FLUSH PRIVILEGES;
   ```



## Next step

[Connect to MySQL](../../../user-guide/connect-database/certified/connect-mysql.md)

