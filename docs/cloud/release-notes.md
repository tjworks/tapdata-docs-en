# Release Notes

To enhance the user experience, Tapdata Cloud continuously enriches and optimizes product features and rectifies known defects by releasing new versions. This article provides an update log for Tapdata Cloud, helping you grasp the new feature specifications more effectively.

## 2023-09-20

### New Features

- Added [Python processing node](user-guide/data-development/process-node#python), which supports customizing data processing logic through Python scripts. This offers improved performance compared to the JS processing node.
- Added a "**Contact Us**" entry point, making it easier for users to quickly reach out to technical support when faced with issues.

### Feature Improvements

- Enhanced [error codes for data sources](user-guide/error-code-solution.md), covering more scenarios and providing solutions.
- While setting up email alert notifications, added guidance for binding email addresses.
- Improved reminders and easy upgrade guide for when the task count reaches its limit.



---



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
