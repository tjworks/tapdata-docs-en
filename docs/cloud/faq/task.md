# Data Replication/Development

This article lists common problems encountered while using data synchronization/development features.



### What is the difference between data replication and data development?

Data replication is mainly used for data synchronization of the whole database or multiple tables, which can meet the business needs of database migration to the cloud, database upgrade, database backup, etc.

A data development project usually aims at only a single table, whereas ETL, data cleaning, data consolidation (including merging multiple tables into a single table), wide table construction and other business scenarios require data development.



### Do I need to check data source before create a task?

It is recommended to estimate the scale of data replication:

- How many tables are in the source database?
- How many rows are in the largest table, how much space is occupied, and roughly how many kilobytes are in each record?
- What's the primary key or unique key of these tables?
- How many insertions and deletions per day have occurred in these tables?

### Would it be better to replicate all tables at once?

Not recommended. It is recommended to categorize the tables so that each type of table is handled separately, so that problems with one type of table will not disrupt the entire process.

### What are the classification principles of tables?

The recommended classification principles are as follows:

* Tables with only primary keys or only unique indexes: Tapdata Cloud has a relatively well-established ability to support such tables, and exceptions are usually rare.
* Tables with primary keys and unique indexes: In extreme cases, these tables may cause unique index violations in the target table.
* Tables without primary keys and unique indexes: The replication of such tables will be synchronized with full fields, and incremental synchronization will be slower for large concurrency scenarios.
* For tables with more than 10 million rows, it is recommended to use a single table to configure tasks to avoid affecting the synchronization performance of other tables.



### Task status has been "Starting", how to solve?

You can contact us for [technical support](support.md).



### Failed to reset task?

You need to check the health status of the Agent for the task in the Agent page of Tapdata Cloud.



### In addition to the task logs, what other logs can be checked for troubleshooting task display errors?

You can also view the log in the **logs/tapdata-agent.log** in the Agent installation directory.



### Does Tapdata Cloud support cross-regional, cross-network data synchronization?

Support. By connecting the source and target with the Agent, Tapdata Cloud realizes synchronization between the networks.

### Does the source and destination support data synchronization for the same object?

Support. Data permissions need to be granted to the synchronized objects.



### Does Tapdata Cloud support real-time synchronization of DDL operations?

Unsupported.



### Does Tapdata Cloud support data synchronization across time zones/character sets?

Support.



### Dose Tapdata Cloud support data synchronization for sharding tables?

Support. Tapdata Cloud can synchronize data from multiple sources to the same target table simultaneously.



### Does Tapdata Cloud support renaming data synchronization objects?

Support.



### Does Tapdata Cloud support filtering some fields or data?

Support.



### Does Tapdata Cloud support adding or removing synchronization objects?

Support.



### Is the CDC's resolution done on the agent side?

Yes.



### When creating the task, the list of tables is empty?

Loading Schema and creating connections is an asynchronous process, so there may be instances where loading is not timely or fails, which can be updated manually by clicking Load Schema in Connections page.



### If the full synchronization is performed again, will the previously synchronized data be cleared?

No.



### When the task is restarted, will the data be lost?

No, Tapdata Cloud guarantees data integrity through the checkpoint mechanism.



### The task connection test and error log contain garbled characters?

Usually, because the time zone setting is incorrect, you can change the time zone and try again.



### When adding DDL, how should I proceed?

1. In low business hours, stop service.
2. Verify that the source table and the target table data are completely consistent; then the CDC can be stopped, otherwise, the data will be lost;
3. Stop the CDC of source database.
4. Perform DDL operation in source table and restart the CDC.
5. Perform DDL operation in target table.
6. Load the schema in Tapdata Cloud's Connection page.
7. Restart data replication task.



### How do I fix garbled Chinese characters when Oracle synchronizes with MySQL?

You can converted characters via jdbc when creating a connection.

`?useUnicode=true&characterEncoding=utf8 `or `useUnicode=true&characterEncoding=gbk`



### An error occurs when PostgreSQL is used as the target: "ERROR : current transaction is aborted, commands ignored until end of transaction block"

When you configure a PostgreSQL connection, you need to add the following parameters to the connection string:

```
autosave=always&cleanupSavePoints=ture
```

![](../images/postgresql_autosave.png)

### Can I make changes in a task, such as adding synchronized tables?

You can re-edit the task, but if you add a table, it may affect the original synchronization task, and you need to reset the original task progress. If you want to add tables without affecting the original, it is recommended to create a new task.



### Master data is copied in real-time, and slave data is also increasing. Will there be conflicts?

If the target already contains data, Tapdata Cloud will recognize it and update it according to the source. If the slave table is brand new, no conflict will occur.



### Why does the option to enable incremental concurrency conflict with no primary key synchronization?

Incremental concurrency according to the primary key to group data processing, with no primary key, this group processing capacity will be invalid.



### In spite of successfully creating the target table, why does the task prompt that the target table doesn't exist?

For some type of database, if the target database is set to case-insensitive table names. When the source table is an uppercase table name, synchronization to the target database is forced to be converted to a lowercase table name. At this time, when the task matches the target table through the capitalized table name of the source database, the error occurred.

This error can be resolved by converting the table name to match the target table name during the task setup process, so it will synchronize correctly.

![](../images/table_name_setting.png)



### Task cannot be deleted

Tasks can only be deleted after the task is stopped, and tasks cannot be deleted when the task state is in the middle of scheduling, running, stopping, or forcibly stopping the intermediate state.



### Can't load tables when create a task?

The model of source need to be loaded.

Edit Task - > Select Node - > Reload Table.

![](../images/reload_table.png)



### What is the agent association logic for the task?

At present, load scheduling is based on the number of tasks, but tags will be supported in the future.



### When creating the task, the data of the source database was not loaded correctly?

You can check if the machine on which the instance is located has access to the database, and if it still cannot be loaded, you can contact online support to help resolve it.