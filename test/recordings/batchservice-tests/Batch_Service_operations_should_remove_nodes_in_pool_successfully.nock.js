// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'lchency4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://lchency4.westcentralus.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '3ee7eaf5-6a2f-49fd-953f-d760b5ac2e05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/removenodes?api-version=2018-03-01.6.1', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 09 Mar 2018 23:05:15 GMT',
  etag: '0x8D586123806C3EF',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bd75d5de-be80-4376-8a1b-220531bf2a4f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/removenodes',
  date: 'Fri, 09 Mar 2018 23:05:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/nodesdktestpool1/removenodes?api-version=2018-03-01.6.1', '*')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 09 Mar 2018 23:05:15 GMT',
  etag: '0x8D586123806C3EF',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bd75d5de-be80-4376-8a1b-220531bf2a4f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/pools/nodesdktestpool1/removenodes',
  date: 'Fri, 09 Mar 2018 23:05:14 GMT',
  connection: 'close' });
 return result; }]];