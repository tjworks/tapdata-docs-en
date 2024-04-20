# Notification Center

import Content from '../reuse-content/_enterprise-features.md';

<Content />


## System Notifications

:::tip

If you are using Tapdata Cloud, you can hover over the Notifications in the upper right corner to quickly receive recent system notifications and alert information (such as Agent status notifications). Additionally, you can click on Notification to enter the Notification Settings page to set the rules for Agent notification methods (such as email/SMS) and Default Alert Recipient (supports multiple emails).

:::

The system notification feature mainly involves automatically triggered notifications based on user-defined notification rules. It includes two types of notifications: Task Run Notifications and Agent Notifications. Specific notification items include:

- Task Deleted
- Task Stopped
- Task Status Error
- Task Encountered an Error
- CDC Lag Timeout
- Database DDL Change
- Server Disconnected
- Agent Service Started
- Agent Service Stopped
- Agent Created
- Agent Deleted

Users can see all notifications in the system notification list for which they have enabled system notifications in the notification settings.

![](../images/system_notification_1.png)

In the system notification list, users can view all system notifications. Message notifications are divided into different levels as defined by the system, including ERROR, WARN, and INFO.

The system notification list supports filtering by different message levels and message types.

## Notification Setting

Notification settings allow you to configure which types of system notifications to receive. To access notification settings, click on the settings icon in the upper right corner and select **Notification Settings**.

![](../images/system_notification_2.png)

