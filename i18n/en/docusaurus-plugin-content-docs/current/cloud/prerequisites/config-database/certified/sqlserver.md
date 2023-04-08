# SQL Server

Once you have installed the Agent, you need to connect the Agent to the SQL Server database through Tapdata Cloud, and you can use the data source in a data replication/development task once the connection has been established. This article describes the preparations before establishing a connection (such as authorizing an account, etc.).

## Supported Versions

SQL Server 2005, 2008, 2008 R2, 2012, 2014, 2016, 2017



## As a Source Database

:::tip

Since CDC support starts with SQL Server 2008, for earlier versions you need to use the Custom SQL feature to simulate changing data capture, and there are a few things to consider when synchronizing data from older versions:

- The source table must have a change tracking column, such as **LAST_UPDATED_TIME**, which is updated each time a record is inserted or updated.
- When create a data replication task, select **full data synchronization**, set **repeated run custom SQL** to **true**, and provide custom SQL for mapping design.

:::

1. Log in to SQL Server Management Studio or SQL CMD as sysadmin.

2. Find the mssql-conf tool and turn on the proxy service.

   ```bash
   mssql-conf set sqlagent.enabled true
   ```

3. Execute the following command to enable incremental replication of databases and data tables.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="dbcdc" label="Enable Incremental Replication for DBs" default>
    <pre>--Enable incremental replication<br />
   use [DB-Name]<br />
   go<br />
   EXEC sys.sp_cdc_enable_db<br />
   go
   <br />
   <br />
   --Check if incremental replication is enabled<br />
   SELECT [name], database_id, is_cdc_enabled<br />
   FROM sys.databases<br />
   WHERE [name] = N'[DB-Name]'<br />
   go</pre>
   </TabItem>
   <TabItem value="tablecdc" label="Enable Incremental Replication for Tables">
    <pre>--Enable incremental replication<br />
    use [DB-Name]<br />
go
EXEC sys.sp_cdc_enable_table<br />
@source_schema = N'[Schema]',<br />
@source_name = N'[Table]',<br />
@role_name = N'[Role]'<br />
go<br />
<br />
--Check if incremental replication is enabled<br />
use [DB-Name]<br />
go<br />
SELECT [name],is_tracked_by_cdc<br />
FROM sys.tables<br />
WHERE [name] = N'[table]'<br />
go</pre>
<ul>
<li>Schema：Schema name，such as dbo.</li>
<li>Table：Table name.</li>
<li>Role：You can grant access to roles that change data. If you don't want to use a set role, you can set it to NULL.</li>
</ul>
<p>If a role is specified when enabling incremental replication, ensure that the database user has the appropriate role so that Tapdata Cloud can access the incremental replication tables.</p>
   </TabItem>
  </Tabs>

4. If you perform a DDL operation (such as adding fields) on the fields of the incremental synchronization table, you need to perform the following operation to restart the CDC, otherwise, the data cannot be synchronized or an error is reported.

   ```sql
   --Disable the CDC for table
   go
   EXEC sys.sp_cdc_disable_table
   @source_schema = N'[Schema]',
   @source_name = N'[Table]',
   @capture_instance = N'[Schema_Table]'
   go
   // The capture_instance is usually concatenated in the format of schema_table.
   // You can use the following command to query the actual value.
   exec sys.sp_cdc_help_change_data_capture
   @source_schema = N'[Schema]',
   @source_name = N'[Table]';

   --Enable the CDC for table
   use [DB-Name]
   go
   EXEC sys.sp_cdc_enable_table
   @source_schema = N'[Schema]',
   @source_name = N'[Table]',
   @role_name = N'[Role]'
   go
   ```


5. (Optional) To read incremental data from the secondary database for data synchronization, you need to follow the above steps.

6. Create an account for data synchronization/development tasks and grant sysadmin permission. See [CREATE USER](https://docs.microsoft.com/zh-cn/sql/t-sql/statements/create-user-transact-sql?view=sql-server-2017).



## Next step

[Connect SQL Server Database](../../../user-guide/connect-database/certified/connect-sqlserver.md)





## See also

* For issues not covered in this article, please refer to the [Microsoft documentation](https://docs.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/change-data-capture-stored-procedures-transact-sql?view=sql-server-ver15).

* Clean CDC Log

   SQL Server does not automatically clean up incremental data logs and requires the following settings to open the cleanup task.

   ```sql
   --The unit of retention is in minutes, and the cleanup cycle is set to 2 days here.
   USE AdventureWorks2012;  
   GO  
   EXECUTE sys.sp_cdc_change_job   
       @job_type = N'cleanup',  
       @retention = 2880;  
   GO
   ```

* Turn on Global CDC

   ```sql
   -- Replace TAPDATA with your database name
   -- Replace INSURANCE with your schema name
   USE TAPDATA
   GO
   EXEC sys.sp_cdc_enable_db
   GO

   declare @table_name varchar(100)
   declare @database_name varchar(100)
   declare @schema_name varchar(100)

   set @database_name = 'TAPDATA'
   set @schema_name = 'INSURANCE'

   declare my_cursor cursor for SELECT TABLE_NAME
                                FROM TAPDATA.INFORMATION_SCHEMA.TABLES
                                where TABLE_CATALOG = @database_name
                                  and TABLE_SCHEMA = @schema_name;
   open my_cursor
   fetch next from my_cursor into @table_name
   while @@FETCH_STATUS = 0
       begin
           begin try
               exec sys.sp_cdc_enable_table
                    @source_schema = @schema_name,
                    @source_name = @table_name,
                    @role_name = NULL
           end try
           begin catch
               print('[ERROR] ' + @table_name)
           end catch

           fetch next from my_cursor into @table_name
       end
   close my_cursor
   deallocate my_cursor
   ```

* Turn off Global CDC

   ```sql
   -- Replace TAPDATA with your database name
   -- Replace INSURANCE with your schema name
   USE TAPDATA
   GO

   declare @table_name varchar(100)
   declare @database_name varchar(100)
   declare @schema_name varchar(100)

   set @database_name = 'TAPDATA'
   set @schema_name = 'INSURANCE'

   declare my_cursor cursor for SELECT TABLE_NAME
                                FROM TAPDATA.INFORMATION_SCHEMA.TABLES
                                where TABLE_CATALOG = @database_name
                                  and TABLE_SCHEMA = @schema_name;
   open my_cursor
   fetch next from my_cursor into @table_name
   while @@FETCH_STATUS = 0
       begin
           begin try
               EXEC sys.sp_cdc_disable_table
                    @source_schema = @schema_name,
                    @source_name = @table_name,
                    @capture_instance = 'all';
           end try
           begin catch
               print ('[ERROR] ' + @table_name)
           end catch

           fetch next from my_cursor into @table_name
       end
   close my_cursor
   deallocate my_cursor

   EXEC sys.sp_cdc_disable_db
   GO
   ```


