// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools?api-version=2020-03-01.11.0', '*')
  .reply(403, "{\r\n  \"odata.metadata\":\"https://test4.japaneast.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"Forbidden\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"Access is Forbidden\\nRequestId:d81f7248-41ef-49bc-963e-b2d339eb96ee\\nTime:2020-03-21T02:05:16.3760939Z\"\r\n  },\"values\":[\r\n    {\r\n      \"key\":\"Reason\",\"value\":\"Property subnetId with value /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1 is not enabled for current account\"\r\n    }\r\n  ]\r\n}", { 'content-length': '575',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd81f7248-41ef-49bc-963e-b2d339eb96ee',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Sat, 21 Mar 2020 02:05:15 GMT',
  connection: 'close' });
 return result; }]];