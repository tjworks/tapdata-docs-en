# MongoDB

After installing the Agent, the next step is to establish a connection between the Agent and MongoDB through Tapdata Cloud. This connection is crucial as it allows you to utilize the MongoDB data source for various data replication or development tasks.

Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.

## Supported Versions

MongoDB 3.2, 3.4, 3.6, 4.0, 4.2

:::tip

You should use 4.0 or higher versions of the source and target databases since the data reading mechanism relies on MongoDB's Change Stream.

:::

## As a Source Database

1. Make sure that the schema of the source database is a replica set or a sharding cluster. If it is standalone, you can configure it as a single-member replica set to open Oplog.
   For more information, see [Convert a Standalone to a Replica Set](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/).

2. To ensure sufficient storage space for the Oplog, it is important to configure it to accommodate at least 24 hours' worth of data. For detailed instructions, see [Change the Size of the Oplog](https://docs.mongodb.com/manual/tutorial/change-oplog-size/).

3. To create an account and grant permissions according to permission management requirements, follow the necessary steps.

   :::tip

   In shard cluster architectures, the shard server is unable to retrieve user permissions from the config database. Therefore, it is necessary to create corresponding users and grant permissions on the master nodes of each shard.

   :::

   * Grant read role to specified database (e.g. demodata)

      ```bash
      use admin
      db.createUser({
          "user" : "tapdata",
          "pwd"  : "my_password",
          "roles" : [
              {
                  "role" : "clusterMonitor",
                  "db" : "admin"
              },
              {
                  "role" : "read",
                  "db" : "demodata"
              }，
              {
                  "role" : "read",
                  "db" : "local"
              },
              {
                  "role" : "read",
                  "db" : "config"
              }
          ]
      }
      ```

      :::tip

      Only when using MongoDB version 3.2, it is necessary to grant the **read** role to the local database.

      :::

   * Grant read role to all databases.

      ```bash
      use admin
       db.createUser({
          "user" : "tapdata",
          "pwd"  : "my_password",
          "roles" : [
              {
                  "role" : "clusterMonitor",
                  "db" : "admin"
              },
              {
                  "role" : "readAnyDatabase",
                  "db" : "admin"
              }
          ]
      }
      ```

4. When configuring the MongoDB URI, it is advisable to set the write concern to **majority** (`w=majority`) to mitigate the risk of data loss in the event of a primary node downtime.

5. When the source database is a cluster, in order to improve data synchronization performance, Tapdata Cloud will create a thread for each shard and read the data. Before configuring data synchronization/development tasks, you also need to perform the following operations.

   * Turn off the Balancer to avoid the impact of chunk migration on data consistency. For more information, see [Stop the Balancer](https://docs.mongodb.com/manual/reference/method/sh.stopBalancer/).
   * Clears the orphaned documents due to failed chunk migration to avoid _id conflicts. For more information, see [Clean Up Orphaned Documents](https://docs.mongodb.com/manual/reference/command/cleanupOrphaned/).



### As a Target Database

Grant write role to specified database (e.g. demodata) and **clusterMonitor** role for data validation, e.g.:

```bash
use admin
db.createUser({
  "user" : "tapdata",
  "pwd"  : "my_password",
  "roles" : [
      {
          "role" : "clusterMonitor",
          "db" : "admin"
      },
      {
          "role" : "readWrite",
          "db" : "demodata"
      },
      {
          "role" : "read",
          "db" : "local"
      }
  ]
}
```

:::tip

Only when using MongoDB version 3.2, it is necessary to grant the read role to the local database.

:::



## Next step

[Connect to MongoDB](../../../user-guide/connect-database/certified/connect-mongodb.md)

