# SelectDB

After installing the Agent, the next step is to establish a connection between the Agent and SelectDB through Tapdata Cloud. This connection is crucial as it allows you to utilize the SelectDB for various data replication or development tasks.

Before establishing the connection, it is essential to complete the necessary preparations outlined in the provided article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.

## Supported Versions

SelectDB Cloud 2.0.13 and above

## Grant Privileges

Log in to [SelectDB platform](https://en.selectdb.cloud/) and grant privileges to the database username.

Grant all privileges to Specified DB:

```sql
GRANT ALL PRIVILEGES ON <DATABASE_NAME>.<TABLE_NAME> TO 'tapdata' IDENTIFIED BY 'password';
```

Grant global privileges:

```sql
GRANT PROCESS ON *.* TO 'tapdata' IDENTIFIED BY 'password';
```
