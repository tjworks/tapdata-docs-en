# Connect to MySQL

MySQL is the most widely used open source relational database, a relational data store used by many websites, applications, and commercial products. Tapdata Cloud supports building data pipelines with MySQL as the source and target database, and this article describes how to add MySQL database to Tapdata Cloud.

## Preparations

[Preparations for MySQL](../../../prerequisites/config-database/certified/mysql.md)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, click **GA data source**, and select **MySQL**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for MySQL.

   ![Connection configuration example](../../../images/mysql_connection_demo.png)

   * Connection Information Settings

      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: Supports MySQL as a source or target database.
      * **Host**: The database connection address.
      * **Port**: The service port of database.
      * **Database**: Database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
      * **username**: The database account.
      * **Password**: The database password.
      * **Connection parameter string**: additional connection parameters, default empty.
   * Advanced settings

      * **Timezone**: Defaults to the time zone used by the database, which you can also manually specify according to your business needs.If the source database is in the default database time zone (+8:00) and the target database is in the specified time zone +0:00, then the time of storage of the source database is assumed to be 2020-01-01 16:00:00, and the time of storage of the target database is 2020-01-01 08:00:00.
      * **Contain table**: Defaults to **all**, you can also choose to custom and fill in the included tables, separated by commas (,) between multiple tables.
      * **Exclude tables**: After turning on the switch, you can set the tables to be excluded, separated by commas (,) between multiple tables.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model loading frequency**: When the number of models in the data source is greater than 10,000, Tapdata Cloud will periodically refresh the model according to the set time.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::



## Related Topics

[MySQL to BigQuery Real-Time Sync](../../../best-practice/mysql-to-bigquery.md)