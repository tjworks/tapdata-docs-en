# Manage Data Dev Task

After the replication task is created, you can monitor and manage the task in the task list.

![](../../images/manage_copy_dev_task_en.png)

| Operation | Description |
| ----------------- | ------------------------------------------------------------ |
| **Set category** | Choose the target task and categorize it based on the business perspective.  |
| **Start**/**Stop** | After stopping the task, the next start will continue to replicate the data based on the last stop incremental point in time.  |
| **Edit** | Configure the task, such as node settings, synchronized tables, task start schedule and other information, and the task cannot be altered during execution.  |
| **Monitor** | View running progress, running logs, connections, history, synchronized content, and more. For more information, see [monitor data replication task](monitor-task.md).  |
| **Copy** | Clone a task with the exact same configuration, and complete the configuration based on the replicated task fine-tuning.  |
| **Reset** | Clear the data synchronization progress of the task, and the next start will restart the data synchronization task.  |
| **Delete** | Task will not recover after deletion, please be careful.  |
