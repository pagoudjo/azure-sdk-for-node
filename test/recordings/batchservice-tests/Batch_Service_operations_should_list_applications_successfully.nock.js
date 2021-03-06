// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .get('/applications?api-version=2020-03-01.11.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#listapplicationsummariesresponses\",\"value\":[\r\n    {\r\n      \"id\":\"my_application_id\",\"versions\":[\r\n        \"1.0\"\r\n      ]\r\n    }\r\n  ]\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7c4aaf5c-a74f-48f4-921d-3b880ec44d5a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 02:16:05 GMT',
  connection: 'close' });
 return result; }]];