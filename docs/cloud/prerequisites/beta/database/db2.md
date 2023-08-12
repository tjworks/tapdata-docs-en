# Db2

This article describes how to connect to Db2 on Tapdata Cloud.

## Limits

- Mainly applicable to LUW version
- Data incremental reading is highly dependent on the raw log parsing module

## Field type support

Except for some special field types such as XML, they are well supported.

## Unique characteristics of database

- When DB2 is used as the source for incremental reading, the data table needs to execute:

```
ALTER TABLE <schema>.<table> DATA CAPTURE CHANGES
```

- The DB2 database needs to execute stored procedures after DDL events (especially deleting fields and modifying field properties):

```
CALL SYSPROC.ADMIN_CMD('REORG TABLE <schema>.<table>')
```