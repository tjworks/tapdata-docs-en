# Dameng

Please follow the instructions below to successfully add and use the DM database in Tapdata Cloud.



> DM real-time synchronization is based on DM Redo Log, so certain configurations need to be performed in advance.

## Prerequisites (as a source)

- Log in to the database with a user account that has DBA privileges.

- Check if the database has archiving enabled and the status of archive logs: `select para_name, para_value from v$dm_ini where para_name in ('ARCH_INI','RLOG_APPEND_LOGIC');` ARCH_INI indicates archive logs, with 0 representing disabled and 1 representing enabled.

- Perform the following steps to enable archiving:

  ```sql
  ALTER DATABASE MOUNT;
  ALTER DATABASE ADD ARCHIVELOG 'TYPE=LOCAL,DEST=/bak/archlog,FILE_SIZE=64,SPACE_LIMIT=1024';
  ALTER DATABASE ARCHIVELOG;
  ALTER DATABASE OPEN;
  ```

  Set the log address parameters:

    - DEST: Directory for storing archive files (local/remote). If the specified local directory does not exist, it will be created automatically.
    - TYPE: Archive type, including real-time remote archive (REALTIME), asynchronous remote archive (ASYNC), synchronous remote archive (SYNC), local archive (LOCAL), MPP remote archive (MARCH). FILE_SIZE: Archive file size. space_limit: Space size limit.

RLOG_APPEND_LOGIC, additional log:

- 0: Disabled

- 1: Records only the primary key column information during update and delete operations if a primary key column exists. If there is no primary key column, it includes information about all columns.

- 2: Records information about all columns during update and delete operations, regardless of the presence of a primary key column.

- 3: Records information about updated columns and rowid during update operations, and only rowid during delete operations.

It is recommended to set RLOG_APPEND_LOGIC to 1: `alter system set 'RLOG_APPEND_LOGIC'=1 MEMORY;`.
