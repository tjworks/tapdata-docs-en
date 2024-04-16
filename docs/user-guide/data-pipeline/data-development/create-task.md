# Create a Data Transformation Task

In Tapdata Cloud, data transformation tasks provide the capability to incorporate processing nodes between source and target data nodes. These processing nodes serve as valuable tools for efficiently carrying out data processing tasks, such as merging multiple tables, splitting data, and adding or removing fields. 

The following article outlines the step-by-step process of creating data transformation tasks, enabling users to leverage the advanced data processing functionalities offered by Tapdata Cloud.

## Procedure

As an example, we will show how to change the **birthdate** field's data type from **STRING** to **DATE** in the table structure without modifying the source table (**customer** table) and simultaneously filter out users born after **1991-01-01**, a data transformation task is created. The resulting table, **customer_new**, will reflect the updated table structure and filtered data.

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation bar, click **Data Pipelines**.

3. Click **Create** on the right side of the page to go to the task configuration page.

4. In the **Connections** area on the left side of the page, drag and drop the source and target data into the right canvas located on the right side.

5. In the **Processing node** area on the left side of the page, drag and drop the **Type modification** node and the **Row Filter** node.

   :::tip

   For more information on processing nodes and application scenarios, see [processing nodes](process-node.md).

   :::

6. The above four nodes are connected in the order of data flow, as shown in the figure below.

   ![Connect node](../../../images/connect_data_dev_nodes.png)

7. To configure each node, follow the instructions below.

   1. On the canvas, click on the source node located on the left side, and proceed to configure the parameters on the right panel.

      ![Source node settings](../../../images/data_dev_source_node_setting.png)

      * **Node name**: Defaults to connection name, you can also set a name that has business significance.
      * **Table**: n Select the desired source table that you wish to work with.
      * **Sync DDL Events**: Once the switch is turned on, Tapdata Cloud will automatically collect the selected source DDL events, such as the addition of new fields. If the target database supports DDL writing, it enables DDL statement synchronization, ensuring that any changes in the source table's structure are reflected in the target database.
      * **Filter settings**: Default off, after turning on you need to specify data filtering conditions.

   2. Click **Type modification** node, and in the right panel, modify the **birthdate** field to the type **Date**.

      ![Modify Field Type](../../../images/data_dev_column_type_setting.png)

   3. Click on the **Row Filter** node to complete the parameter configuration on the right panel based on the following instructions.

      ![Row Filter node settings](../../../images/data_dev_row_filter_setting_en.png)

      * **Execute action**: Select **Keep matching data**.

      * **Conditional expression**: Fill in the data matching expression as `record.birthdate >= '1990-01-01'`. The supported symbols for comparison in the expression include:

         * **Comparison**: greater than (`>`), less than (`<`), greater than or equal to (`>=`), less than or equal to (`<=`), equal to (`==`)

         * **Logical Judgment**: with (`&&`), or (`||`), non- (`!`)

         * **Regular Expression**: e.g.`/^.*$/.test( )`

         * **Conditional Grouping**: To add multiple groups of conditions, enclose each group of conditions in parentheses and use logical operators between them. 

           For example, to filter out men over 50 years old or people under 30 years old with incomes of 10,000, the expression would be: `( record.gender == 0&& record.age > 50) || ( record.age >= 30&& record.salary <= 10000)`. This expression ensures that the conditions within each group are evaluated first and then combines them using logical operators such as `&&` (AND) and `||"`(OR).

   4. Click on the last target data node to complete the parameter configuration on the right panel based on the following instructions.

      ![Target data node settings](../../../images/data_dev_target_node_setting_en.png)

      - **Node name**: Defaults to connection name, you can also set a name that has business significance.

      - **Table**: Select the desired table where you want to write the processed data.

      - **Existing data processing**,**Data write mode**: Choose the appropriate data handling option based on your requirements.

        For example, if the target table does not have any existing data and the structure of the target table is inconsistent with the source table, you can select **Clear the original table structure and data on the target side**.This will ensure that the target table is cleared and its structure is updated to match the source table before writing the processed data.

      - **Full multi-threaded write**: The default number of concurrent threads for writing full data is **8**, but it can be adjusted based on the write performance of the target database.

      - **Incremental multi-threaded write**: The concurrent threads for writing incremental data are disabled by default, but you can adjust them based on the write performance of the target database.

8. (Optional) Click the ![setting](../../../images/setting.png) icon above to configure the task properties.

   * **Task name**: Fill in a name that has business significance.
   * **Sync type**: You have the option to select **full + incremental synchronization**, or you can choose to perform an **initial sync** and use Change Data Capture (**CDC**) separately. In real-time data synchronization scenarios, the combination of full and incremental data copying is often used to transfer existing data from the source database to the target database.
   * **Task description**: Provide the description information for the task based on your specific context and requirements.
   * **Advanced settings**: Set the start time of the task, select the incremental data processing mode, scheduled tasks, dynamic adjustment memory usage, specify the number of processor threads, and choose the appropriate agent.

9. Click **Save** or **Start**, the following figure shows that after the task starts successfully, you can view its QPS, delay, task event, and other information.

   ![Monitor Task Status](../../../images/data_dev_monitor_en.png)

   :::tip

   After clicking on the **Save** or **Start** button, Tapdata Cloud will perform a pre-check of the configuration for each node to ensure the smooth operation of the task. If any configuration does not pass the pre-check, please make the necessary adjustments based on the log prompts provided on the current page.

   :::



## Data Validation

Log in to the target database to check the structure of the **customer_new** table. Verify that the **birthdate** column has a data type of **DateTime**. Next, check the number of users with birth dates earlier than **1990-01-01**. If the number is zero and the total number of records in the table is **31,276**, it confirms that the data has been successfully filtered according to the specified condition.

```sql
mysql> DESC customer_new;
+---------------+--------------+------+-----+---------+-------+
| Field         | Type         | Null | Key | Default | Extra |
+---------------+--------------+------+-----+---------+-------+
| id            | varchar(200) | NO   | PRI | NULL    |       |
| name          | varchar(200) | NO   |     | NULL    |       |
| lastname      | varchar(200) | NO   |     | NULL    |       |
| address       | varchar(200) | NO   |     | NULL    |       |
| country       | varchar(200) | NO   |     | NULL    |       |
| city          | varchar(200) | NO   |     | NULL    |       |
| registry_date | varchar(200) | NO   |     | NULL    |       |
| birthdate     | datetime(3)  | NO   |     | NULL    |       |
| email         | varchar(200) | NO   |     | NULL    |       |
| phone_number  | varchar(200) | NO   |     | NULL    |       |
| locale        | varchar(200) | NO   |     | NULL    |       |
+---------------+--------------+------+-----+---------+-------+
11 rows in set (0.00 sec)

mysql> SELECT COUNT(*) FROM customer_new WHERE birthdate < 1990-01-01;
+----------+
| count(*) |
+----------+
|        0 |
+----------+
1 row in set, 1 warning (0.01 sec)

mysql> SELECT COUNT(*) FROM customer_new
+----------+
| count(*) |
+----------+
|    31276 |
+----------+
1 row in set, 1 warning (0.01 sec)
```



## See also

By combining multiple processing nodes and multiple data sources, you can achieve a more complex and personalized data flow. For more information, see [processing nodes](process-node.md).

