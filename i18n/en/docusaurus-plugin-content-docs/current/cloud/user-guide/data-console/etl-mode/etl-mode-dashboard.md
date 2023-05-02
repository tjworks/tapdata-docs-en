# Data Integration Dashboard

The data console function is by default a Data Integration Mode, which is suitable for data replication/synchronization, migrate data to cloud or building ETL pipelines. You can simply drag the source table to the target to automatically complete the creation of data replication tasks. This article explains how to use the Data Integration Mode interface to help you quickly understand the various functional modules.

:::tip

With the increase in the tasks carried by the source databases, in order to minimize the impact of data extraction on the source database and conform to the concept of data hierarchical governance in your organization, you can switch to the [Data Service Platform Model](../daas-mode/enable-daas-mode.md) and synchronize the data in real-time to the Data Cache Layer.

:::

## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.net/console/v3/).

2. In the left navigation panel, click **Data Console**.

3. You can easily view your entered data source information on this page, and we'll cover the specific roles of each module next.

   ![Data Integration Mode Interface](../../../images/etl_dashboard.png)



import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
    <TabItem value="5" label="① Switch View Model" default>

   <p>Click the <img src='/img/switch_icon.png'></img> icon to display the data source information in the form of a directory structure (click again to switch back to the Console view). Select the specific table, or view the tasks associated with the table and the basic information of the table, including table size, number of rows, column information, sample data, Scheme (such as primary key/foreign key), etc. </p>
   <img src='/img/data_category_view_en.png'></img>
   <p></p>
   </TabItem>
   <TabItem value="1" label="② Add data sources">
    <p>Click the <img src='/img/add_icon.png'></img> icon, in the pop-up dialog, we can add a data source, select a data source will jump to the connection configuration page. For more information, see <a href="../../connect-database">Connect Data Sources</a>. </p>
   </TabItem>
   <TabItem value="2" label="③ Search Tables">

   <p>Click the <img src='/img/search_icon.png'></img> icon to enter a keyword for the table name to help you quickly navigate to the specific table, which is also supported at other Layers. </p>

   <img src='/img/search_table_en.png'></img>
   </TabItem>
   <TabItem value="3" label="④ Data Source Details">

   <p>On the right side of the data connection, click the <img src='/img/detail_icon.png'></img> icon, and the right side of the page will display the connection information and associated tasks of the data source. </p>
   <img src='/img/data_source_detail_en.png'></img>
   </TabItem>
   <TabItem value="4" label="⑤ Table Details">

   <p>On the right side of the table name, click the <img src='/img/detail_icon.png'></img> icon. On the right side of the page, the basic information of the tasks and tables associated with the table will be displayed, including table size, number of rows, column information, sample data, Scheme (such as primary key/foreign key), etc. </p>

   <img src='/img/table_detail_en.png'></img>
   </TabItem>
   <TabItem value="6" label="⑥ Switch Model">

   <p>Click the <img src='/img/setting_icon.png'></img>icon, in the pop-up dialog, you can turn on the <a href="../daas-mode/enable-daas-mode">Data Service Platform Model</a> to synchronize data in real-time to the Data Cache Layer. </p>

</TabItem>
</Tabs>