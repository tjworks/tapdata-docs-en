# Data Source/Target

### What data sources does Tapdata Cloud support?

Tapdata Cloud supports rich databases, including common relational, non-relational, and queue-type data sources, as detailed in [Supported Data Sources](../introduction/supported-databases.md).

### What if the connection test fails?

The premise of the connection test is to start the agent, please check the agent status first.

When creating a data connection, you can complete setting relevant parameters according to the connection configuration help.

### what does topic expression in kafka mean?

A topic expression is a regular expression that matches the name of the message queue, and users can define a regular expression to match one or more message queue consumption messages.

### When testing the MySQL connection, prompt: "The server time zone value is unrecognized."

When this problem occurs, you can add parameters to the connection string of your MySQL connection: **serverTimezone=Asia/Shanghai**.

![](../images/modify_connection_setting_en.png)

### Is the Select permission sufficient for Oracle to synchronize with SQL Server?

Oracle needs some additional permissions to do CDC, the specific configuration and authorization, see [Oracle preparations](../prerequisites/config-database/certified/oracle.md).



### If the database has a whitelist, how to set up?

The machine on which the agent is deployed needs to be added to the whitelist.



### How do I fill out a Schema when connecting to Oracle?

Fill in according to the schema set when building the database, and pay attention to case-sensitivity.

In Oracle, Schema is a collection of logical structures or pattern objects of data. The schema is owned by a database user and has the same name as that user. For more information, see [Oracle's official documentation](https://docs.oracle.com/cd/B19306_01/server.102/b14220/schema.htm).



