# Data Source/Target

### Which data sources does Tapdata Cloud support?

Tapdata Cloud supports rich databases, including common relational, non-relational, and queue-type data sources, as detailed in [Supported Data Sources](../introduction/supported-databases.md).

### What if the connection test fails?

Before conducting the connection test, it is essential to ensure that the agent is running. Please verify the status of the agent first.

When creating a data connection, you can refer to the connection configuration help to accurately set the relevant parameters.

### what does topic expression in kafka mean?

A topic expression is a user-defined regular expression that can be used to match the name of a message queue. This regular expression allows users to define a pattern that matches one or more message queues for message consumption.

### When testing the MySQL connection, prompt: "The server time zone value is unrecognized."

When this problem occurs, you can add parameters to the connection string of your MySQL connection: **serverTimezone=Asia/Shanghai**.

![](../images/modify_connection_setting_en.png)

### Is the Select permission sufficient for Oracle to synchronize with SQL Server?

Oracle needs some additional permissions to do CDC, the specific configuration and authorization, see [Oracle preparations](../prerequisites/certified/oracle.md).



### If the database has a whitelist, how to set up?

The machine on which the agent is deployed needs to be added to the whitelist.



### How do I fill out a Schema when connecting to Oracle?

When building the database, it is important to fill in the information according to the schema set, while also being mindful of case-sensitivity. In Oracle, a schema refers to a collection of logical structures or pattern objects of data. Each schema is owned by a specific database user and shares the same name as that user. For more information, see [Oracle's official documentation](https://docs.oracle.com/cd/B19306_01/server.102/b14220/schema.htm).

