# Connect to XML

Extensible Markup Language (XML) lets you define and store data in a shareable manner. XML supports information exchange between computer systems such as websites, databases, and third-party applications. Tapdata Cloud supports reading XML files stored on local, FTP, SFTP, SMB, or S3FS to meet a variety of data flow needs.  

This article describes how to connect to XML data sources on Tapdata Cloud.

## Precautions

- A connection only refers to a model (table). If there are multiple models, you need to create connections for each one separately.
- XML data sources are only available for data development tasks.
- By default, Tapdata Cloud checks for changes (such as adding or modifying) to the XML file every minute. Tapdata Cloud synchronizes all files to accurately update the condition field when changes are detected. However, synchronous deletion of files or data is not supported.
- Data types that can be used in XML files include ARRAY, BOOLEAN, DATETIME, INTEGER, NUMBER, OBJECT, STRING, and TEXT.


## Procedure

1. Log in to [Tapdata Cloud](https://cloud.tapdata.io/).

2. In the left navigation panel, click **Connections**.

3. On the right side of the page, click **Create**.

4. In the pop-up dialog, select **XML**.

5. On the page that you are redirected to, follow the instructions below to fill in the connection information for XML.

   ![Connect to XML](../../../images/connect_xml.png)

   :::tip
   For more about how to obtain the information needed for each protocol, see [Preparations for JSON/XML](../../../prerequisites/config-database/alpha/json-and-xml.md).
   :::

   * **Connection name**: Fill in a unique name that has business significance.
   * **Connection type**: Currently only supported as a **Source**.
   * **File Protocol**: Select the following protocol based on the location of the XML file. This article uses **S3FS** (Amazon S3 bucket) as an illustration of the operation process.
      * **Local**: The file is stored on the device that deployed the Tapdata Agent. After selecting this item, you also need to fill in the file path.
      * **FTP** (File Transfer Protocol): The file is stored on the FTP server. After selecting this item, you also need to fill in the address, port, username, password, file path, and other information of the FTP server.
      * **SFTP** (Secure File Transfer Protocol): The file is stored on the SFTP server. After selecting this item, you also need to fill in the address, port, user name, password, file path, and other information of the SFTP server.
      * **SMB** (Server Message Block Protocol): The file is stored on the SMB server and is compatible with 1.x, 2.x, 3.x. After selecting this item, you also need to fill in the address, username, password, file path, and other information of the SMB server.
      * **S3FS** (File System According to S3 Protocol): The file is stored on the Amazon S3 bucket. After selecting this item, you need to fill in the information such as Accesskey, Secretkey, Endpoint (fixed at **s3.amazonaws.com**), Bucket, and file path.
      * **OSS** (Object Storage Service): The file is stored on the Alibaba Cloud Object Storage. After selecting this item, you need to fill in the Accesskey, Secretkey, Endpoint, Bucket, and file path.
   * **Agent settings**: Defaults to **Platform automatic allocation**, you can also manually specify an agent.
   * **Model load time**: When the number of models in the data source is less than 10,000, the model information is refreshed every hour; if the model data exceeds 10,000, the model information is refreshed every day at the time you specify.

6. Click **Test Connection**, and when passed, click **Save**.

   :::tip

   If the connection test fails, follow the prompts on the page to fix it.

   :::

