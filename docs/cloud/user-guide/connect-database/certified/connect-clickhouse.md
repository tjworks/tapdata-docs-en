# Connect to ClickHouse

ClickHouse® is a high-performance, column-oriented SQL database management system (DBMS) for online analytical processing (OLAP).

Tapdata Cloud supports the creation of data pipelines with ClickHouse as the target database. The following article provides a comprehensive guide on how to add ClickHouse to Tapdata Cloud.

## Preparations

[Preparations for ClickHouse](../../../prerequisites/config-database/certified/clickhouse.md)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **ClickHouse**.

5. Complete the data source configuration according to the following instructions.

   ![clickhouse_connection](../../../images/clickhouse_connection.png)

   * Connection Information Settings
      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: ClickHouse databases can only be targets.
      * **Host**: The database connection address.
      * **Port**: The HTTP API service port of the database, the default is **8123**. If SSL encryption is enabled, the default port is **8443**. For more information, see [network ports](https://clickhouse.com/docs/en/guides/sre/network-ports/).
      * **Database**: Database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
      * **user**, **password**: The database username and password.
      * **Connection parameter string**: additional connection parameters, default empty.
   * Advanced settings
      * **Timezone**: Defaults to the time zone used by the database, which you can also manually specify according to your business needs.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model load time**: If there are less than 10,000 models in the data source, their information will be updated every hour. But if the number of models exceeds 10,000, the refresh will take place daily at the time you have specified.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::