# MongoDB

Once you have installed the Agent, you need to connect the Agent to MongoDB through Tapdata Cloud, and you can use the data source in a data replication/development task once the connection has been established. 

This article describes the preparations before establishing a connection (such as authorizing an account, etc.).

## Supported Versions

MongoDB 3.2, 3.4, 3.6, 4.0, 4.2

:::tip

You should use 4.0 or higher versions of the source and target databases since the data reading mechanism relies on MongoDB's Change Stream.

:::

## As a Source Database

1. Make sure that the schema of the source database is a replica set or a sharding cluster. If it is standalone, you can configure it as a single-member replica set to open Oplog.
   For more information, see [Convert a Standalone to a Replica Set](https://docs.mongodb.com/manual/tutorial/convert-standalone-to-replica-set/).

2. Configure enough Oplog storage space to accommodate at least 24 hours of Oplog.
   For more information, see [Change the Size of the Oplog](https://docs.mongodb.com/manual/tutorial/change-oplog-size/).

3. Select the steps below to create an account and grant permissions according to permission management requirements.

   :::tip

   In shard cluster architectures, the shard server cannot obtain user permissions from the config database, so you need create corresponding users and grant permissions on the master nodes of each shard.

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

      Only when MongoDB is version 3.2, you need to grant read role to the local database.

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

4. When setting the MongoDB URI, it is recommended to set the write concern to the majority, that is, `w=majority`, otherwise, a primary node downtime may result in data loss.

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

Only when MongoDB is version 3.2, you need to grant read role to the local database.

:::



## Next step

[Connect to MongoDB](../../../user-guide/connect-database/certified/connect-mongodb.md)

