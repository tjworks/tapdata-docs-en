# JSON/XML

Tapdata Cloud supports reading [CSV, Excel](../beta/csv-and-excel.md), JSON, and XML files that stored on local, ftp, SFTP, SMB, S3FS, or OSS.
Before establishing the connection, it is essential to follow the necessary preparations outlined in the article. These preparations may include authorizing an account and performing other relevant steps to ensure a smooth and secure connection.

This article describes the steps to prepare for creating a JSON or XML data source connection. Select the option to read based on the location of the CSV/Excel file.

## Store on Local/FTP/SFTP/SMB

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs className="unique-tabs">
   <TabItem value="local" label="Local">

<p>When you store JSON and XML files on Tapdata Agent's device, it can be used as a data source, and the preparations are as follows: </p>
  <ol>
   <li>Log in to Tapdata Agent's device. </li>
   <li>Create a folder first (e.g., <code>/root/files</code>) for easier file management. </li>
   <li>Save the JSON or XML files to the folder that you created. </li>
  </ol>
  <p>When configuring the data source later, all you need to do is specify the <strong>file path</strong>. </p>

</TabItem>
   <TabItem value="ftp" label="FTP">
    <p>File Transfer Protocol (FTP) is a set of standard protocols for file transfer over a network. To use the files in the FTP service as a data source, the preparations are as follows: </p>
  <ol>
   <li>Install the FTP server (such as <a href="https://security.appspot.com/vsftpd.html">vsftpd</a>) and ensure network communication capability. </li>
   <li>If authentication is enabled, you need to create an FTP account and ensure it has permission to read files. </li>
   <li>Save the path of the JSON/XML file and use it when configuring the data source later. </li>
  </ol>

</TabItem>
   <TabItem value="sftp" label="SFTP">
   <p>Secure File Transfer Protocol (SFTP) provides a secure and encrypted network transfer method for files. To use the files in the SFTP service as a data source, the preparations are as follows: </p>
  <ol>
   <li>Install the SFTP server (openssh-client and openssh-server) and ensure network communication capability. </li>
   <li>Create an SFTP service account and ensure it has permission to read files. </li>
   <li>Save the path of the JSON/XML file and use it when configuring the data source later. </li>
  </ol>

</TabItem>
   <TabItem value="smb" label="SMB">
   <p>The Server Message Block protocol (SMB protocol) is a client-server communication protocol used for sharing access to files, printers, serial ports and other resources on a network. To use the files in the SMB service as a data source, the preparations are as follows: </p>
  <ol>
   <li>Install SMB (support 1.0/2.0/3.0) protocol software, such as Samba, to ensure network communication. </li>
   <li>Create a Samba service account and ensure it has permission to read files. </li>
   <li>Save the path of the JSON/XML file and use it when configuring the data source later. </li>
  </ol>

</TabItem>
  </Tabs>




## Stored on Amazon S3

Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. With Amazon S3, you can store and retrieve any size of data from anywhere on the web at any time. When your files are stored on Amazon S3, you need to obtain the user's access key, S3 bucket name, file path, and other necessary information.

1. Log in to [Amazon IAM Console](https://console.aws.amazon.com/iamv2/home?#/home).

2. Create a user and grant them access.

   1. In the left navigation bar, select **Access management** > **Users**.

   2. On the right side of the page, click **Add users**.

   3. Fill in the username and click **Next**.

      The user name can have up to 64 characters. Valid characters: A-Z, a-z, 0-9, and `+ = , . @ _ - @_-`

   4. In the **Permissions options** area, select **Attach policies directly**, then search for and select the **AmazonS3ReadOnlyAccess** policy.

      ![Grant AmazonS3ReadOnlyAccess](../../../images/grant_s3_read.png)

   5. Click **Next**, and then click **Create user**.

3. Create an access key for the user.

   1. On the user list page, find and click the user you just created.

   2. Click the **Security credentials** tab, and then click **Create access key** in the **Access keys** area.

      ![Create Access Key](../../../images/create_s3_ak.png)

   3. Select **Third-party services**and click **Next**.

   4. Fill in the description tab and click **Create access key**.

   5. **Access key** and **secret key** can be viewed or downloaded on the page.

      ![Obtain Access Key](../../../images/obtain_s3_ak.png)

      :::tip

      To ensure the security of your account, please keep your access key secure. This is the only time that the secret access key can be viewed or downloaded. You cannot recover it later. However, you can create a new access key any time.

      :::

4. Retrieve the bucket's region code.

   1. Log in to [Amazon S3 Console](https://console.aws.amazon.com/s3/buckets).

   2. On the bucket list page, find the target bucket and view its region code.

      ![Get Region Code](../../../images/obtain_s3_region.png)



## Stored on OSS

Object Storage Service (OSS) is a secure, cost-effective, and high-durability cloud storage service provided by Alibaba Cloud. When your files are stored on Alibaba Cloud OSS, you need to obtain the user's access key, bucket name, file path, and other necessary information.

1. Log in to [Alibaba Cloud RAM Console](https://ram.console.aliyun.com/overview).

2. Create a user and obtain an AccessKey.

   1. In the left navigation bar, select **Identities** > **Users**.

   2. Click **Create User**.

   3. On the redirected page, fill in the logon name, display name, select the OpenAPI Access, and click **OK**.

      ![Create User](../../../images/create_aliyun_user.png)

   4. After the user creation is complete, click Download CSV file that contains the AccessKey information.

      :::tip

      To ensure the security of your account, please keep your access key secure.

      :::

3. Grant permission to the user.

   1. On the user list page, find and click the user you just created.

   2. Click the Permissions tab, and then click **Grant Permission**.

   3. In the panel on the right, select the authorization scope, then search for and select the **AliyunOSSReadOnlyAccess** policy.

      ![Grant OSS Read Permission](../../../images/grant_oss_read.png)

   4. Click **OK**, and then click **Complete**.

4. Obtains the OSS access domain name (Endpoint).

   1. Log in to [Alibaba Cloud OSS Console](https://oss.console.aliyun.com/bucket/).

   2. Locate and click on the target bucket.

   3. Click on the Overview tab on the left, then scroll down to the Port area and find the Endpoint for Access Over Internet.

      ![Get Endpoint](../../../images/obtain_oss_endpoint.png)



## Next step

* [Connect to JSON](../../../user-guide/connect-database/alpha/connect-json.md)
* [Connect to XML](../../../user-guide/connect-database/alpha/connect-xml.md)



