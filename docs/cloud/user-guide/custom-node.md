# Custom Node (Beta)

By customizing the node function, you can organize the general JS script into reusable processing nodes, and after creation, you can reference the node directly in the data development task, without rewriting the script, which greatly reduces the development workload. In this article, we describe how to use custom nodes and provide use cases for your reference.



## Create Custom Node

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation bar, click **Custom Nodes**.

3. On the right side of the page, click **New**.

4. On the page that you are redirected to, follow the instructions below to complete the setup.

   1. Add form component to process node.

      ![](../images/add_form_component_en.png)

      * On the left is the component area, which can be dragged to the operation area and configured.
      * The middle is the operation area, and the position of each component can be adjusted or configured after selection.
      * On the right is the property settings area, you can set the configurations of the component (such as title, description, default value, etc.)

   2. Click the ![](../images/json_icon.png) icon at the top of the page to display the JSON model for the processing node form item, where you can edit the form information directly.

      ![](../images/json_schema_view_en.png)

   3. Click the ![](../images/code_icon.png) icon at the top of the page to edit the data processing logic of the processing node, and the field identification in the form can be referenced.

      ![](../images/code_view_en.png)

   4. Click the ![](../images/preview_icon.png) icon at the top of the page to preview the performance of the node.

5. Click **Save** in the top-right corner of the page.



## Use Custom Node

In the development task, you can use the custom processing node that has been created. You can use it by dragging the node into the DAG canvas.



## Example: Custom Decryption Rule

For information security, we want to desensitize some of the mobile phone numbers in the MySQL table, we can create a custom node, and then create a development task and apply the node.

**Procedure:**

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation bar, click **Custom Nodes**.

3. On the right side of the page, click **New**.

4. On the page that you are redirected to, follow the instructions below to complete the setup.

   * Node name: In the upper left corner of the page, fill in the node name, such as phone number desensitization.

   * Action: Drag and drop a Input form from the left component area to the middle action area.

   * Name: Fill in the field name, such as masking_field_name.

   * Title: Optional, such as phone number field name.

      Other is not required

5. Click the ![](../images/code_icon.png) icon at the top of the page to open the code editing interface.

   ```java
   // Code logic: Mask the "1234" in the phone number
   function process(record, form){
   var str="18912341234"
   var pat=/(\d{3})\d*(\d{4})/*
   *var b=str.replace(pat,'$1****$2');
   console.log(b)
    record[form.masking_field_name] = record[form.masking_field_name].replace("1234","****");
   ```

6. Click the **Save** in the top right corner.

7. [Create a data development task](data-development/create-task.md), between the source and the target node, add the phone number desensitization node we just created, and fill in the field corresponding to the mobile number, in this case, mobile.

   ![Phone number desensitization](../images/masking_mobile_en.png)

8. Start the task. The phone number will be masked on the target node, and the result is as follows:

   ![Desensitization result](../images/desensitization_result_en.png)

