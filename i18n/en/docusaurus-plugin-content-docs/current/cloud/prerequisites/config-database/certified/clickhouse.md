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

   * **username**: The user name.
   * **host**: Which host can be accessed by the account, **any** means to allow all host.
   * **protection**: Password protection.
   * **password**: The password.

   Example: Create an account named **tapdata** , using the sha256_password protection mechanism, allowing it to log in from any host.

   ```sql
   CREATE USER tapdata HOST ANY IDENTIFIED WITH sha256_password BY 'Tap@123456';
   ```

3. Grant permissions to the account that we just created, we recommend setting more granular permissions control based on business needs. For more information, see [authorization syntax](https://clickhouse.com/docs/zh/sql-reference/statements/grant/).

   ```sql
   GRANT ALL ON database_name.table_name TO 'username' WITH GRANT OPTION;
   ```

   * **database_name.table_name**: The databases and tables to grant permissions, separate with periods (.) between names. Such as demodata.customer.
   * **usernmae**: The user name.

## Next step

[Connect to ClickHouse](../../../user-guide/connect-database/certified/connect-clickhouse.md)

