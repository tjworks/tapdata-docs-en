# Data Replication/Development

This article lists common problems encountered while using data synchronization/development features.



### What is the difference between data replication and data development?

Data replication is primarily employed for achieving data synchronization across the entire database or multiple tables. This functionality caters to various business requirements such as database migration to the cloud, database upgrades, and database backups.

On the other hand, a data development project typically focuses on a single table. However, scenarios like ETL (Extract, Transform, Load), data cleaning, data consolidation (including merging multiple tables into a single table), and wide table construction often demand data development processes.



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

Please check the health status of the Agent for the task on the **Agent** page in Tapdata Cloud.



### Apart from the task logs, which other logs can be examined to troubleshoot display errors related to tasks?

You can also view the log in the **logs/tapdata-agent.log** in the Agent installation directory.



### Does Tapdata Cloud support cross-regional, cross-network data synchronization?

Yes, Tapdata Cloud supports cross-regional and cross-network data synchronization. It achieves this by connecting the source and target systems using the Tapdata Agent, enabling synchronization between different networks and regions.

### Does the source and destination support data synchronization for the same object?

Yes, Tapdata Cloud supports data synchronization between the same objects in the source and destination systems. However, it is important to ensure that the necessary data permissions are granted for the synchronized objects to ensure a successful synchronization process.



### Does Tapdata Cloud support real-time synchronization of DDL operations?

No.



### Does Tapdata Cloud support data synchronization across time zones/character sets?

Yes.



### Dose Tapdata Cloud support data synchronization for sharding tables?

Yes, Tapdata Cloud supports data synchronization for sharding tables. It has the capability to synchronize data from multiple sources to the same target table concurrently.



### Does Tapdata Cloud support renaming data synchronization objects?

Yes.



### Does Tapdata Cloud support filtering some fields or data?

Yes.



### Does Tapdata Cloud support adding or removing synchronization objects?

Yes.



### Is the CDC's resolution done on the agent side?

Yes.



### When creating the task, the list of tables is empty?

If the list of tables is empty when creating a task, it may be due to the asynchronous nature of loading the schema and creating connections. Sometimes, the loading process may not be immediate or may encounter failures. In such cases, you can manually update the schema information by clicking on the **Load Schema** button on the Connections page. This will help ensure that the tables are loaded correctly and available for selection when creating the task.



### If a full synchronization is performed again, will the previously synchronized data be cleared?

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



### Does the real-time copying of master data and the simultaneous increase in slave data create potential conflicts in the system?

If the target database already has existing data, Tapdata Cloud will intelligently recognize and synchronize it with the source data. This ensures that updates are applied accurately. On the other hand, when dealing with a newly created slave table, since it does not yet have any pre-existing data, the process proceeds without encountering conflicts.



### Why does enabling the option of incremental concurrency conflict with the lack of a primary key?

Enabling incremental concurrency relies on grouping data based on the primary key. In the absence of a primary key, the ability to group and process data in this way is compromised, leading to a conflict.



### I have successfully created the table, so why am I still getting an error during task execution stating that the target table does not exist?

In some databases, when the target database is configured to be case-insensitive for table names, if the source table has uppercase table names, they will be forcibly converted to lowercase table names when synchronized to the target database. This can lead to an error when the task tries to match the source table's uppercase name with the target table.

To resolve this issue, you can use the **field mapping** settings in the task configuration process to force the table names to match the case sensitivity of the target database. By doing so, the synchronization process should work correctly.

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