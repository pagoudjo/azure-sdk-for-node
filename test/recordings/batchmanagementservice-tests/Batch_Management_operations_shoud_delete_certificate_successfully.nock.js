// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'testaccountfornode';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificates/SHA1-cff2ab63c8c955aaf71989efa641b906558d9fb7?api-version=2020-05-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8D8084FDB1E84D9?api-version=2020-05-01',
  'retry-after': '15',
  'x-ms-request-id': '5c7977be-5656-433f-8c7b-165178d02a97',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-deletes': '14999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '118795ee-f451-4903-acf5-b45f6e39ab46',
  'x-ms-routing-request-id':
   'WESTUS:20200604T062354Z:118795ee-f451-4903-acf5-b45f6e39ab46',
  date: 'Thu, 04 Jun 2020 06:23:53 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8D8084FDB1E84D9?api-version=2020-05-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d8084fdb1e84d9?api-version=2020-05-01',
  'retry-after': '15',
  'x-ms-request-id': 'c37625fa-47fc-471a-a2a9-e4bf31d19f3b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': '85a59bcb-cf6f-406d-a2a0-2a79c73c0f48',
  'x-ms-routing-request-id':
   'WESTUS:20200604T062425Z:85a59bcb-cf6f-406d-a2a0-2a79c73c0f48',
  date: 'Thu, 04 Jun 2020 06:24:25 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d8084fdb1e84d9?api-version=2020-05-01')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  location:
   'https://management.azure.com/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d8084fdb1e84d9?api-version=2020-05-01',
  'retry-after': '15',
  'x-ms-request-id': '40faedff-cf06-4974-8e2c-65db0f766055',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'f590df6b-b47f-47df-83ce-73a0b868e0cd',
  'x-ms-routing-request-id':
   'WESTUS:20200604T062455Z:f590df6b-b47f-47df-83ce-73a0b868e0cd',
  date: 'Thu, 04 Jun 2020 06:24:55 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/certificateOperationResults/sha1-cff2ab63c8c955aaf71989efa641b906558d9fb7-8d8084fdb1e84d9?api-version=2020-05-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': '0d40d209-4947-4b91-b00b-3efa6b0c9576',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-reads': '11999',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-correlation-request-id': 'fdbf3f06-be8f-42d2-bc69-152c854ec300',
  'x-ms-routing-request-id':
   'WESTUS:20200604T062526Z:fdbf3f06-be8f-42d2-bc69-152c854ec300',
  date: 'Thu, 04 Jun 2020 06:25:25 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; }]];