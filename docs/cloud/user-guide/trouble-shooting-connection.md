# Troubleshooting Connections

In order to ensure the connection effectiveness of the data source, when you have completed the [data connection configuration](connect-database/README.md), you can click **Connection test** to verify the data source configuration meets the requirements, whether the network connectivity is normal, and so on. This article introduces common inspection items in Tapdata Cloud and troubleshooting methods in case of failure.

- **Check if connections are available**

   Tapdata Cloud tries to connect to the data source, if the network is unreachable, the test fails, then check the network connectivity, such as: local iptables configuration, ACL limit in the network, etc.

- **Check if the username, password, and database are correct**

   Tapdata Cloud tries to connect to the data source using your configured user name and password, if the user name, password or database name is wrong, the test fails, then check the correctness of the authentication information.

- **Check if data source version is supported**

   Tapdata Cloud detects the version of the data source, and if the version is not supported, the test fails.

- **Load model**

   Tapdata Cloud tries to load the table meta information in the data source, if it fails to load, the test fails, then check whether the database user has been granted the corresponding permission.

- **Check if binlog is enabled and set to ROW format** (for MySQL)

   Tapdata Cloud checks if the database's binlog is enabled and set to ROW format. If the requirements are not met, the test fails. For more information about the binlog settings, see [MySQL preparations](../prerequisites/config-database/certified/mysql.md). At this time, check the database binlog configuration.

- **Check if permissions required for CDC are authorized**

   Tapdata Cloud checks whether the database account has the necessary permissions to perform CDC (Change Data Capture), if the permission is not met, the test fails, then check whether the database user has been granted the corresponding permission.

- **Check if archive logging is enabled** (for Oracle)

   Tapdata Cloud checks if the archive log is enabled. If it is not enabled, the test fails. For more information about how to enable it, see [Oracle preparation](../prerequisites/config-database/certified/oracle.md).

- **Check if supplemental log mode is correct** (for Oracle)

   Tapdata Cloud checks if the supplemental log mode is correct. If it is incorrect, the test fails. For more information about how to set it up, see [Oracle preparation](../prerequisites/config-database/certified/oracle.md).

- **Check if permissions required for DDL are authorized** (for Oracle)

   Tapdata Cloud checks if the database account has DDL execution permissions. If the permission is not met, the test fails. For an example of authorization, see [Oracle preparation](../prerequisites/config-database/certified/oracle.md).



## See also

[Preparations Before Connection](../prerequisites/config-database/README.md)