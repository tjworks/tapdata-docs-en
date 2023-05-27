# Add Processing Node

Tapdata Cloud supports the addition of processing nodes to data replication or pipeline tasks, providing the flexibility to incorporate data filtering, field adjustments, and other processing operations as needed. This allows users to customize and enhance their data replication workflows based on specific requirements.

## Row Filter

The main usage of processing nodes in Tapdata Cloud is to filter table data, where users can set filtering conditions and execution actions.

* **Execute action**: Users have the option to either retain or discard the matching data when using processing nodes in Tapdata Cloud.

* **Conditional expression**: An expressionthat sets a filter condition
* **Example expression**: Filter out individuals who are either men over 50 years old or people under 30 years old with incomes of 10,000 or less. The filtering condition can be expressed as `( record.gender == 0&& record.age > 50) || ( record.age >= 30&& record.salary <= 10000)`.

![](../../images/data_dev_row_filter_setting_en.png)



## Add and Delete Fields

The **Add and Delete Fields** node can be added to the canvas and its parameters can be configured after connecting it to the data node. It allows for adding new fields or deleting existing fields, and if a field is deleted, it will not be passed to the next node.

![](../../images/add_and_delete_fields.png)



## Field Rename

To rename or convert the case of a field, add the **Field Rename** node to the canvas, connect it to the data node in the desired processing order, and configure the node parameters accordingly.

![](../../images/rename_fields.png)



## Field Calculation

To assign a value to a field by performing calculations between fields, add the **Field Calculation** node to the canvas. Connect the node to the data node in the desired processing order and configure the calculation rules for the target field using  JavaScript (JS) expressions.

![](../../images/field_calculation_en.png)



## Type modification

The Type modification node can be used to adjust the data type of the field.

![](../../images/data_dev_column_type_setting.png)





## <span id="union-node">Union</span>

The **Union** node in Tapdata Cloud merges multiple tables with the same or similar structure into a single table, combining the data based on matching field names. The detail rules are as follows:

- When the type length and precision of the deduction are different, you need to select the maximum length precision.
- If the column type of the deduction is different, it can be converted to a generic type.
- In scenarios where the primary key fields of all source tables are consistent, the primary key will be retained in the target table. However, if the primary key fields differ among the source tables, the primary key will be removed in the target table.
- Similarly, if the same fields of all source tables have non-empty restrictions, these non-empty restrictions will be retained in the target table. Conversely, if the non-empty restrictions differ among the source tables, the non-empty restrictions will be removed in the target table.
- The unique index of the source table will not be replicated or synchronized to the target table.



**Example Scenario:**

Assume that we want to merge(Union) **student1** and **student2** tables with the same table structure into one table, and then store the result in the **student_merge** table. The tables structure and data are as follows:

![Append merge data sample](../../images/table_union_demo.png)



**Operation**:

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation bar, click **Data Pipelines**.

3. On the right side of the page, click **Create** to configure the task.

4. Drag the desired data source from the left side of the page and place it onto the right canvas. Then, locate the **Union** node at the bottom left corner of the page and drag it onto the canvas. Finally, connect the data source node to the Union node to perform the append merge operation.

   ![Add Union Node](../../images/add_union_node_en.png)

5. Click on the desired data source that you want to perform the append merge with. In the panel on the right side of the page, select the table that you wish to merge, either **student1** or **student2**.

6. Click on the **Union** node and navigate to the **Model** tab to view the table structure information after the append merge.

7. From the left side of the page, drag a data source to store the merged table, and then connect the **Union** node to the data source.

8. Click the data source where the appended merged table is stored, and in the panel on the right side of the page, select the target table (**student_merge**) and advanced settings.

   :::tip

   If you want Tapdata Cloud to automatically create a table structure, you can create an empty table named **student_merge** in the target database in advance (the table structure is unlimited). Then, in the **advanced settings**, select **Existing data processing** as **Clear the original table structure and data on the target side**.

   :::

   ![Union example](../../images/union_table_demo_en.png)

9. After confirming that the configuration is correct, simply click on the **Start** to initiate the task. 

   After the operation is completed, you can observe the performance of the task on the current page. This includes metrics such as QPS (Queries Per Second), delay, task time statistics, and more.

   ![union_table_result](../../images/union_table_result_en.png)



**Result verification**

Query the **student_merge** table, and the result is as follows:

```sql
mysql> select * from student_merge;
+---------+------+--------+------+-------+--------+
| stu_id  | name | gender | age  | class | scores |
+---------+------+--------+------+-------+--------+
| 2201101 | Lily | F      |   18 |  NULL |   NULL |
| 2201102 | Lucy | F      |   18 |  NULL |   NULL |
| 2201103 | Tom  | M      |   18 |  NULL |   NULL |
| 2202101 | Lily | F      |   18 |     2 |    632 |
| 2202102 | Lucy | F      |   18 |     2 |    636 |
| 2202103 | Tom  | M      |   18 |     2 |    532 |
+---------+------+--------+------+-------+--------+
6 rows in set (0.00 sec)
```

## <span id="js-process">JS Processing</span>

Support is provided for data processing through JavaScript or Java code. When writing the code, it is important to ensure  source node and the target node is connected. This ensures seamless data processing between the two nodes.

![](../../images/js_nodes_en.png)

### Model Declarations

For JS nodes, Tapdata Cloud deduces the model information of the node by sampling data trial run. If the deduced model is found to be inaccurate or the number of fields changes, the field information in the model can be defined explicitly by the model declaration.

![](../../images/model_declarations_en.png)

In the development task, the method that the model declares support is as follows:

```javascript
// Add a field when the field does not exists
TapModelDeclare.addField(tapTable, 'fieldName', 'TapString')
// Remove an existing field
TapModelDeclare.removeField(tapTable, 'fieldName')
// Update an existing field
TapModelDeclare.updateField(tapTable, 'fieldName', 'TapString')
// Update a field, and add it if it doesn't exist
TapModelDeclare.upsertField(tapTable, 'fieldName', 'TapString')
// Setting a field as primary key
TapModelDeclare.setPk(tapTable, 'fieldName')
// Undo setting primary key
TapModelDeclare.unsetPk(tapTable, 'fieldName')
// Add an index
TapModelDeclare.addIndex(tapTable, 'indexName', [{'filedName':'fieldName1', 'order': 'asc'}])
// Remove an index
TapModelDeclare.removeIndex(tapTable, 'indexName')
```

Parameter Description

- `tapTable`: Fixed parameter, return value of JS node
- `fieldName`: The name of the field to be added or manipulated
- `indexName`: The name of the index to be added or manipulated
- `TapType`: The type of field to be added or the type of the existing field to be modified to the target type. Currently only supports the built-in `TapType`, support:
   - `TapBoolean`: Boolean type, use boolean to store boolean values
   - `TapDate`: Date type, use custom DateTime to store date values
   - `TapArray`: Array type, use Array to store Array values
   - `TapNumber`: Numeric type, use Java's Double to store numeric values
   - `TapBinary`: Binary type, use byte to[] store byte arrays
   - `TapTime`: Time type, use DateTime to store time values
   - `TapMap`: Map type, use Map to store Map values
   - `TapString`: String type, use Java's String to store strings
   - `TapDateTime`: Datetime type, use custom DateTime to store date and time values
   - `TapYear`: Year, use DateTime to store time values


### Use cases

1. Processing data records in a JS node
2. Calling a custom function in a JS node to process data
3. Caching calls in a JS node
4. Other scenarios that require custom processing logic using JS nodes

### JS Built-in Function Description

* [Standard JS](../../appendix/standard-js.md): Tapdata Cloud supports processing and operating on data records, providing various functions and operations to manipulate and transform data. For example, you can use JavaScript or Java code to convert date strings to Date types. This allows you to perform date-related operations, comparisons, and formatting on the data records as needed. With this capability, you have flexibility in manipulating and transforming your data to meet your specific requirements.
* [Enhanced JS (Beta)](../../appendix/enhanced-js.md): Tapdata Cloud supports making external calls in JavaScript code using standard built-in functions. This allows you to perform network requests, interact with databases, and perform other operations by utilizing the capabilities of JavaScript and its built-in functions.

