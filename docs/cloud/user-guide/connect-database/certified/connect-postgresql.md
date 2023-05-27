# Connect to PostgreSQL

Tapdata Cloud offers extensive support for building data pipelines using PostgreSQL as both the source and target database. PostgreSQL is a robust open-source object-relational database management system (ORDBMS) known for its powerful capabilities. 

This article provides detailed instructions on adding a PostgreSQL database to Tapdata Cloud, facilitating seamless integration and data flow in your pipelines.

## Preparations

[Preparations for PostgreSQL](../../../prerequisites/config-database/certified/postgresql.md)

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create connection**.

4. In the pop-up dialog, select **PostgreSQL**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for PostgreSQL.

   ![PostgreSQL Connection Example](../../../images/postgresql_connection.png)

   * Connection Information Settings

      * **Connection name**: Fill in a unique name that has business significance.
      * **Connection type**: Supports PostgreSQL as a source or target database.
      * **Host**: The database connection address.
      * **Port**: The service port of database.
      * **Database**: database name, a connection corresponding to a database, if there are multiple databases, you need to create multiple connections.
      * **Schema**: Schema name.
      * **extParams**: Additional connection parameters, default empty.
      * **User**: The database username.
      * **Password**: The database password.
      * **Log plugin name**: To read the data changes of PostgreSQL and achieve incremental data synchronization, you need to complete the installation of the plugin according to the guidance of the preparations.
   * Advanced settings

      * **Timezone**: Defaults to the time zone used by the database, which you can also manually specify according to your business needs.
      * **Contain table**: The default option is **All**, which includes all tables. Alternatively, you can select **Custom** and manually specify the desired tables by separating their names with commas (,).
      * **Exclude tables**: Once the switch is enabled, you have the option to specify tables to be excluded. You can do this by listing the table names separated by commas (,) in case there are multiple tables to be excluded.
      * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
      * **Model loading frequency**: When the number of models in the data source is greater than 10,000, Tapdata Cloud will periodically refresh the model according to the set time.

6. Click **Connection Test**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::
