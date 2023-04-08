# Enhanced JS Built-in Function(Beta)

Enhanced JS nodes (Beta) can use all built-in functions to implement external calls (such as network, database, etc.). If you only need to process and operate on data records, please use [standard JS nodes](standard-js.md).

For information on how to use and scenarios, see [JS processing node](../user-guide/data-development/process-node#js-process).

:::tip

This feature is only supported for use in data development tasks.

:::

## DateUtil

### parse

Description: Converts date strings in various formats to Date.

Example:

* General Usage

   ```javascript
   var dte = DateUtil.parse('2010-01-01 00:00:00');
   ```

* Advanced usage: `parse(dateString, timeoffset)`, that is, specify the time zone offset while converting.

   ```javascript
   // UTC+08:00
   var dte = DateUtil.parse('2010-01-01 00:00:00', 8);
   
   // UTC+0
   var dte = DateUtil.parse('2010-01-01 00:00:00', 0);
   ```


### determineDateFormat

Description: Get the date format.

Example:

```javascript
var format = DateUtil.determineDateFormat('2010-01-01 00:00:00');
```

### timeStamp2Date

Description: Converts the timestamp to a date string in the specified format.

Example:

```javascript
var dteStr = DateUtil.timeStamp2Date(1592233019140, 'yyyy-MM-dd HH:mm:ss');
```

### addYears/addMonths/addDays/addHours/addMinutes/addSeconds

Description: Adds or subtracts the year/month/day/hour/minute/second of the date.

Example:

```javascript
var dte = DateUtil.addYears(new Date(), 1);
dte = DateUtil.addYears(dte, -1);
```

### sameYear/sameMonth/sameDay/sameHour/sameMinute/sameSecond

Description: Compares the year/month/day/hour/minute/second of the date.

Example:

```javascript
if ( DataUtil.sameYear(new Date(), new Date()) ) {
    ...
}
```

## idGen/UUIDGenerator

### uuid

Description: Generate uuid, if you use `var str = uuid();`, you can get a random string.

Example:

```javascript
// Both methods below are available
var uuid = idGen.uuid();
var uuid = UUIDGenerator.uuid();
```

### objectId

Description: Generate MongoDB ObjectId.

Example:

```javascript
// Both methods below are available
var oid = idGen.objectId();
var oid = UUIDGenerator.objectId();
```

### objectIdStr

Description: Generate MongoDB ObjectId String section.

Example:

```javascript
// Both methods below are available
var oidStr = idGen.objectIdStr();
var oidStr = UUIDGenerator.objectIdStr();
```

## networkUtil

### GetAddress

Description: Network tool to get the IP address or MAC address.

Example:

```javascript
// Get the MAC address of the first network interface
var mac = networkUtil.GetAddress("mac");

// Get IP address
var ip = networkUtil.GetAddress("ip");
```

## HashMap

### put/remove

Description: Hash dictionary.

Example:

```javascript
var map = new HashMap();
map.put(“name”, “test”);
map.remove(“name”);
```

## ArrayList

### add/remove

Note: Array type.

Example:

```javascript
var list = new ArrayList();
list.add(“test1”);
list.remove(0);
```

## Date

### add/remove

Description: Date type.

Example:

```javascript
var dte = new Date();
var year = dte.getYear()+1900;
```

## ScriptExecutorsManager

### getScriptExecutor

Description: Get the data source executor.

Example:

```javascript
var source = ScriptExecutorsManager.getScriptExecutor('mysql-connection-name');
```

## ScriptExecutor

### execute

Description: Performing operations in databases, and the return value is a boolean type, **true** means that the operation is successful, and **false** means that the operation fails.

:::tip

before `execute`, it is a `source` to perform operations on the source database, and a `target` to perform operations on the target database.

:::

Example:

```javascript
var result = target.execute({
    database: “test”,
    collection: “user”,
    op: “update”,
    filter: {id: 1},
    opObject: {name: “user001”, age: 20},
    upsert: true
});
```

Parameter Description

* For structured databases (such as MySQL), you can refer to the method: `var result = source.execute({sql: “update test.user set name='user001' where id = 1”});`

* For MongoDB, the available parameters are as follows:

   - **database**: The database name of the operation.

   - **collection**: The collection name of the operation.

   - **op**: The action to be performed (INSERT/UPDATE/DELETE).

   - **filter**: The condition of UPDATE or DELETE.

   - **opObject**: Specific data added, updated, or deleted.

   - **upsert**: Whether to use MongoDB's UPSERT mode, that is, there is no new addition, or update if it exists, the default is **false**.

   - **multi**: Whether to update multiple records, the default is **false**.

### executeQuery

Description: Database query operation, and the return value is an array type, indicating the result set of the query.

:::tip

`before` executeQuery, it is a `source` to perform operations on the source database, and a `target` to perform operations on the target database.

:::

Example:

```javascript
var users = target.executeQuery({
    database: “test”,
    collection: “user”,
    filter: {age: {$gt: 10}}，
    sort: {age: -1},
    limit: 10
});
```

Parameter Description

* For structured databases (such as MySQL), you can refer to the method: `var users = source.executeQuery({sql: “select * from test.user where age>10”});`
* For MongoDB, the available parameters are as follows:
   * **database**: The database name of the operation.
   * **collection**: The collection name of the operation.
   * **filter**: The condition of UPDATE or DELETE.
   * **sort**: Sort criteria (optional).
   * **limit**: Limit the number of result (optional).

### call

Description: Execute stored procedures and custom functions, supported only by structured databases. The return value is a key-value pair type, and the result is returned according to the procedure definition.

Example:

```javascript
var result = source.call('demo' [{'param1':'aa'}])
```

Parameter Description

* **funcName**: Procedure/Function name.
* **params**: incoming parameters, support the following parameters.
   * **mode**: Input parameter type, take value: **in** (default, incoming), **out** (outgoing), **in/out** (incoming and outgoing).
   * **name**: Parameter name.
   * **value**: The value of the parameter.
   * **type**: Parameter class type.

## JSONUtil

### json2List/obj2Json/obj2JsonPretty/json2Map

Description: JSON format conversion.

Example:

```javascript
var d = new Date();
var json = JSONUtil.obj2Json(d)
```

## HanLPUtil

### hanLPParticiple

Description: Chinese word segmentation tool, two parameters need to be set in parentheses, the format is `(String inputString, String language)`.

Example:

```javascript
var d = HanLPUtil.hanLPParticiple('你好', 'HK_T')
```

Parameter Description

- **inputString**: A string that requires word segmentation.

- **language**: the type of the language with the word segmentation, support:
   - CH_S: Simplified Chinese.

   - CH_T: Traditional Chinese.

   - HK_T: Traditional Chinese (Hong Kong).

   - TW_T: Traditional Chinese (Taiwan).

Returns: Array type, that is, the result set after word segmentation.

## split_chinese

Description: Chinese word segmentation tool, two parameters need to be set in parentheses, the format is `(String inputString, String language)`.

Example:

```javascript
var strs = split_chinese("这是一个中文句子", "CH_S");
```

Parameter Description

- **inputString**: A string that requires word segmentation.

- **language**: the type of the language with the word segmentation, support:
   - CH_S: Simplified Chinese.

   - CH_T: Traditional Chinese.

   - HK_T: Traditional Chinese (Hong Kong).

   - TW_T: Traditional Chinese (Taiwan).

Returns: Array type, that is, the result set after word segmentation.

## util

### strToBase64/base64ToStr/unwind

Description: String format conversion.

Example:

```javascript
// Convert the string to Base64 format
var b = util.strToBase64('aa');
// Split JSON arrays into hierarchy levels
var list = util.unwind(map, 'a.b.c');
```

## MD5Util/MD5

Description: MD5 encryption tool.

Example:

```javascript
// Get the MD5 signature of a string, the second parameter indicates whether to convert it to uppercase
var b = MD5Util.crypt('aa', true);
// Or
var b = MD5('aa', true);
```

## Collections

### sort/get/emptySet/emptyList

Description: Collection tool classes, such as sorting, getting collections, etc.

Example:

```javascript
// Sort the List
Collections.sort(list);
// Get an empty collection
var set = Collections.emptySet();
```

## MapUtil

### getValueByKey/needSplit/removeValueByKey/containsKey/getValuePositionInMap/deepCloneMap/copyToNewMap/putValueInMap/recursiveFlatMap/obj2Map

Description: Dictionary tool class.

Example:

```javascript
// Get the value of a specified level from a given map
var a = MapUtil.getValueByKey(map, 'a.b.c');
```

## sleep

Description: The duration of the program hibernation is specified in milliseconds.

Example:

```javascript
// Sleep for 10 milliseconds in the program
sleep(10);
```

## rest

### get/post/patch/delete

Description: Call HTTP methods (such as Get), format reference:

```javascript
rest.get(url, header)
rest.get(url, header, returnType)
rest.get(url, header, connectTimeOut, readTimeOut)
rest.get(url, header, returnType, connectTimeOut, readTimeOut)
```

* **returnType**: The result type returned, the default is array.
* **connectTimeOut**: connection timeout, in milliseconds. The default is 10,000 milliseconds.
* **readTimeOut**: read timeout, in milliseconds. The default is 30,000 milliseconds.

Example:

* Get

   ```javascript
   var result = rest.get('http://127.0.0.1:1234/users?id=1', {}, '[array/object/string]', 30, 300);rest.post(url, parameters)
   rest.post(url, parameters, headers, returnType)
   rest.post(url, parameters, connectTimeOut, readTimeOut)
   rest.post(url, parameters, headers, returnType, connectTimeOut, readTimeOut)
   ```

* Post

   ```javascript
   var result = rest.post('http://127.0.0.1:1234/users/find', {}, {}, '[array/object/string]', 30, 300);rest.patch(url, parameters)
   rest.patch(url, parameters, headers)
   rest.patch(url, parameters, connectTimeOut, readTimeOut)
   rest.patch(url, parameters, headers, connectTimeOut, readTimeOut)
   ```

* Patch

   ```javascript
   var result = rest.patch('http://127.0.0.1:1234/users?where[user_id]=1', {status: 0}, {}, 30, 300);rest.delete(url)
   rest.delete(url, headers)
   rest.delete(url, connectTimeOut, readTimeOut)
   rest.delete(url, headers, connectTimeOut, readTimeOut)
   ```

* Delete

   ```javascript
   var result = rest.delete('http://127.0.0.1:1234/users?where[user_id]=1', {}, 30, 300);
   ```

## mongo

### getData/insert/update/delete

Description: Add, delete and check data in MongoDB, format reference:

```javascript
mongo.getData(uri, collection)
mongo.getData(uri, collection, filter)
mongo.getData(uri, collection, filter, limit, sort)
```

Example:

* Query Data

   ```javascript
   var result = mongo.getData('mongodb://127.0.0.1:27017/test', 'users', {id: 1}, 10, {add_time: -1});mongo.insert(url, collection, inserts)
   ```

* Insert data, supporting input of arrays or objects.

   ```javascript
   mongo.insert('mongodb://127.0.0.1:27017/test', 'users', [{id: 1, name: 'test1'}, {id: 2, name: 'test2'}]);mongo.update(url, collection, filter, update)
   ```

* Update data

   ```javascript
   var modifyCount = mongo.update('mongodb://127.0.0.1:27017/test', 'users', {id: 1}, {name: 'test3'});mongo.delete(url, collection, filter)
   ```

* Delete Data

   ```javascript
   var deleteCount = mongo.delete('mongodb://127.0.0.1:27017/test', 'users', {id: 1});
   ```

