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
.post('/jobs?api-version=2018-03-01.6.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 09 Mar 2018 22:59:23 GMT',
  etag: '0x8D586116668209F',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bfb70815-3c68-4131-8e13-48ec4cdf8bfb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  date: 'Fri, 09 Mar 2018 22:59:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://lchency4.westcentralus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/jobs?api-version=2018-03-01.6.1', '*')
  .reply(201, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 09 Mar 2018 22:59:23 GMT',
  etag: '0x8D586116668209F',
  location: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'bfb70815-3c68-4131-8e13-48ec4cdf8bfb',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://lchency4.westcentralus.batch.azure.com/jobs/job-1',
  date: 'Fri, 09 Mar 2018 22:59:23 GMT',
  connection: 'close' });
 return result; }]];