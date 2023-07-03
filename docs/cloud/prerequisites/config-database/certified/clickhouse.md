# ClickHouse

ClickHouse® is a high-performance, column-oriented SQL database management system (DBMS) for online analytical processing (OLAP). 

Before you can create a ClickHouse connection, you need to complete the preliminary preparation following this article, and you can create a connection and use the data source in a data replication/development task.

## Supported Versions

ClickHouse v21.x

## Precautions

If binary-related fields are included, you need to remove them via field mapping for data synchronization/development.

## Preparations

1. Adjust the configuration file **user.xml**, enable access control and restart the service. For more information, see [Enable Access Control](https://clickhouse.com/docs/zh/operations/access-rights#enabling-access-control).

   :::tip

   You can also use this file to modify the [account configuration](https://clickhouse.com/docs/zh/operations/settings/settings-users/), this article demonstrates how to create and authorize an account after the permission control is turned on.

   :::

2. Log in to the ClickHouse database and execute the following commands to create an account for data synchronization/development tasks.

   ```sql
   CREATE USER username HOST 'host' IDENTIFIED WITH protection BY 'password';
   ```

   * **username**: Enter user name.
   * **host**: Which host can be accessed by the account, **any** means to allow all host.
   * **protection**: Password protection.
   * **password**: Enter password.

   Example: Create an account named **tapdata** , using the sha256_password protection mechanism, allowing it to log in from any host.

   ```sql
   CREATE USER tapdata HOST ANY IDENTIFIED WITH sha256_password BY 'Tap@123456';
   ```

3. To grant permissions to the account you have just created, it is advisable to implement more granular permission controls based on your business needs. For detailed instructions on authorization syntax and further information, see [authorization syntax](https://clickhouse.com/docs/en/sql-reference/statements/grant).

   ```sql
   GRANT SELECT, INSERT, CREATE TABLE, ALTER TABLE, ALTER UPDATE, DROP TABLE, TRUNCATE ON database_name.* TO username
   ```

   * **database_name**: Enter database name.
   * **username**: Enter user name.
   
   

## Next step

[Connect to ClickHouse](../../../user-guide/connect-database/certified/connect-clickhouse.md)

