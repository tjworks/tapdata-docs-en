# Release Notes

To enhance the user experience, Tapdata Cloud continuously enriches and optimizes product features and rectifies known defects by releasing new versions. This article provides an update log for Tapdata Cloud, helping you grasp the new feature specifications more effectively.



### 2023-10-20

### New Features

- Added support for [automatically creating sharded collections](user-guide/copy-data/create-task#advanced-settings) when MongoDB Cluster is set as the target.
- Add support for [Unwind Processing Node](user-guide/data-development/process-node#Unwind), which can help you efficiently "unwind" each element in an array, converting each element into independent data rows.
- Added support for disabling node capabilities when configuring tasks. You can access this feature by hovering over a node, which can help reduce the cost of data flow during processing.

### Feature Enhancements

- When [configuring data replication tasks](user-guide/copy-data/create-task.md), you can now quickly filter tables with or without primary keys through the "**Selectable table range**" dropdown. Tables with primary keys include those without primary keys but with unique indexes.
- Added a Demo data source to the onboarding guide flow for new users, helping you quickly complete the tutorial and set up your first data flow task.
- Optimized the front-end display effects of operation buttons on the engine interface.

### Bug Fixes

- Fixed an issue where an error occurred in MongoDB as a target during an INSERT operation when there was no shard key.
- Fixed an issue where MongoDB did not support REPLACE properly, and the fields deleted by REPLACE could not be properly removed.

## 2023-10-08

### New Features

- Introduced the [Create Materialized View](user-guide/data-development/create-materialized-view.md) feature for swift construction of real-time data models.
- Added capability to fetch read-only access information of [subscribed MongoDB Atlas](user-guide/real-time-data-hub/enable-real-time-data-hub#Procedure).
- Kafka data source now supports settings for replication factor and partition count.
- For synchronization between MongoDB instances, added support for `$unset` operations.

### Feature Enhancements

- During the task guidance process, when creating a connection for a fully managed Agent, instructions about the public IP address of the fully managed Agent have been added.
- Enabled rapid target node location through node search at the top of the data replication/data transformation configuration page.

### Bug Fixes

* Fixed an issue where the wrong category of operation logs was recorded when restarting the Agent via the webpage.

---

## 2023-09-20

### New Features

- Added [Python processing node](user-guide/data-development/process-node#python), which supports customizing data processing logic through Python scripts. This offers improved performance compared to the JS processing node.
- Added a "**Contact Us**" entry point, making it easier for users to quickly reach out to technical support when faced with issues.

### Feature Improvements

- Enhanced [error codes for data sources](user-guide/error-code-solution.md), covering more scenarios and providing solutions.
- While setting up email alert notifications, added guidance for binding email addresses.
- Improved reminders and easy upgrade guide for when the task count reaches its limit.





## 2023-08-28

### New Features

- Introduced the [Primary-Secondary Merge Node](user-guide/data-development/process-node#pri-sec-merged), enabling quick construction and real-time updates of wide tables, assisting you in achieving better data analysis.
- [Real-Time Data Hub](user-guide/real-time-data-hub/enable-real-time-data-hub.md) now offer a storage instances for free trial, with more new specifications available, including M10, M20, and M30.
- Added support for connecting [existing MongoDB Atlas instances](user-guide/real-time-data-hub/enable-real-time-data-hub#atlas) as data storage for the Real-Time Data Hub.

### Feature Improvements

- Changed the display of help documentation on the right side during data source connection to embedded online documentation, assisting users in accessing the most recent help information.
- For core data sources (such as Oracle, PostgreSQL, etc.), improved the page parameter descriptions and guidance when creating connections.

### Bug Fixes

- Fixed the issue where users couldn't view the monitoring page for previously run tasks.
