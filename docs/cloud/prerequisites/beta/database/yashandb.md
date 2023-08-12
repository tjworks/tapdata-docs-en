# YashanDB

Please follow the instructions below to ensure successful addition and usage of the YashanDB in Tapdata Cloud.

## Prerequisites (As a Target)

Log in to the database with a user account that has permissions for insertion, deletion, updating, and querying. Then, create a user:

```sql
CREATE USER username IDENTIFIED BY password;
```

Grant the user permissions for inserting, deleting, updating, and querying database tables:

```sql
GRANT SELECT ANY TABLE, INSERT ANY TABLE, UPDATE ANY TABLE, DELETE ANY TABLE TO username;
```


Please note that the above information is a translation of the provided Chinese text. If you have any further questions or need assistance, feel free to ask!

