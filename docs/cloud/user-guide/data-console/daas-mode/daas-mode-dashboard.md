# Data Service Platform Dashboard

Once the data service platform mode is activated, the page will be organized according to the previously mentioned [hierarchy](enable-daas-mode.md). You can effortlessly drag the table to the next level, which will automatically create data replication tasks and streamline the data flow.

This article provides a comprehensive guide on utilizing the Data Service Platform Mode interface, enabling you to swiftly grasp the functionality of the various modules.

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Data Console**.

3. On this page, you can conveniently view the information you have entered for your data source. In the following sections, we will explain the functions of each button available.

   ![Data Integration Mode Interface](../../../images/daas_dashboard.png)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="5" label="① Switch View Model" default>

   <p>Clicking the <img src='/img/switch_icon.png'></img> icon allows you to view the data source information in the form of a directory structure. You can navigate through the directory structure to select a specific table. By selecting a table, you can access the tasks associated with that table and view basic information such as table size, number of rows, column details, sample data, and schema information (such as primary key and foreign key constraints). This view provides a comprehensive overview of the selected table's properties and associated tasks. To switch back to the Console view, simply click the icon again. </p>
   <img src='/img/data_category_view_en.png'></img>
   <p></p>
   </TabItem>
   <TabItem value="1" label="② Add Data Sources">
    <p>Clicking the <img src='/img/add_icon.png'></img> icon, in the pop-up dialog, we can add a data source, select a data source will jump to the connection configuration page. For more information, see <a href="../../../prerequisites">Connect Data Sources</a>. </p>
   </TabItem>
   <TabItem value="2" label="③ Search Tables">

   <p>Clicking the <img src='/img/search_icon.png'></img> iconallows you to enter a keyword for the table name, enabling you to quickly navigate to the specific table. This feature is also supported in other Layers. </p>
   <img src='/img/daas_search_table_en.png'></img>
   </TabItem>
   <TabItem value="3" label="④ Data Source Detail">

   <p>On the right side of the data connection, clicking the <img src='/img/detail_icon.png'></img> icon,will display the connection information and associated tasks of the data source on the right side of the page. </p>
   <img src='/img/data_source_detail_en.png'></img>
   </TabItem>
   <TabItem value="4" label="⑤ Table Detail">

   <p>On the right side of the table name, click the <img src='/img/detail_icon.png'></img> icon. On the right side of the page, the basic information of the tasks and tables associated with the table will be displayed, including table size, number of rows, column information, sample data, Scheme (such as primary key/foreign key), etc. This operation can also be used in modules of other layers. </p>
   <img src='/img/cache_table_detail_en.png'></img>
   </TabItem>
   <TabItem value="6" label="⑥ Switch Model">

   <p>Click on the <img src='/img/setting_icon.png'></img> icon, to open a pop-up dialog where you can opt to switch back to <a href="../etl-mode/">Data Integration Mode</a>. </p>
</TabItem>
</Tabs>