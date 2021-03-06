/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * App Service Environment ARM resource.
 *
 * @extends models['Resource']
 */
class AppServiceEnvironmentResource extends models['Resource'] {
  /**
   * Create a AppServiceEnvironmentResource.
   * @member {string} appServiceEnvironmentResourceName Name of the App Service
   * Environment.
   * @member {string} appServiceEnvironmentResourceLocation Location of the App
   * Service Environment, e.g. "West US".
   * @member {string} [provisioningState] Provisioning state of the App Service
   * Environment. Possible values include: 'Succeeded', 'Failed', 'Canceled',
   * 'InProgress', 'Deleting'
   * @member {string} [status] Current status of the App Service Environment.
   * Possible values include: 'Preparing', 'Ready', 'Scaling', 'Deleting'
   * @member {string} [vnetName] Name of the Virtual Network for the App
   * Service Environment.
   * @member {string} [vnetResourceGroupName] Resource group of the Virtual
   * Network.
   * @member {string} [vnetSubnetName] Subnet of the Virtual Network.
   * @member {object} virtualNetwork Description of the Virtual Network.
   * @member {string} [virtualNetwork.id] Resource id of the Virtual Network.
   * @member {string} [virtualNetwork.name] Name of the Virtual Network
   * (read-only).
   * @member {string} [virtualNetwork.type] Resource type of the Virtual
   * Network (read-only).
   * @member {string} [virtualNetwork.subnet] Subnet within the Virtual
   * Network.
   * @member {string} [internalLoadBalancingMode] Specifies which endpoints to
   * serve internally in the Virtual Network for the App Service Environment.
   * Possible values include: 'None', 'Web', 'Publishing'
   * @member {string} [multiSize] Front-end VM size, e.g. "Medium", "Large".
   * @member {number} [multiRoleCount] Number of front-end instances.
   * @member {array} workerPools Description of worker pools with worker size
   * IDs, VM sizes, and number of workers in each pool.
   * @member {number} [ipsslAddressCount] Number of IP SSL addresses reserved
   * for the App Service Environment.
   * @member {string} [databaseEdition] Edition of the metadata database for
   * the App Service Environment, e.g. "Standard".
   * @member {string} [databaseServiceObjective] Service objective of the
   * metadata database for the App Service Environment, e.g. "S0".
   * @member {number} [upgradeDomains] Number of upgrade domains of the App
   * Service Environment.
   * @member {string} [subscriptionId] Subscription of the App Service
   * Environment.
   * @member {string} [dnsSuffix] DNS suffix of the App Service Environment.
   * @member {string} [lastAction] Last deployment action on the App Service
   * Environment.
   * @member {string} [lastActionResult] Result of the last deployment action
   * on the App Service Environment.
   * @member {string} [allowedMultiSizes] List of comma separated strings
   * describing which VM sizes are allowed for front-ends.
   * @member {string} [allowedWorkerSizes] List of comma separated strings
   * describing which VM sizes are allowed for workers.
   * @member {number} [maximumNumberOfMachines] Maximum number of VMs in the
   * App Service Environment.
   * @member {array} [vipMappings] Description of IP SSL mapping for the App
   * Service Environment.
   * @member {array} [environmentCapacities] Current total, used, and available
   * worker capacities.
   * @member {array} [networkAccessControlList] Access control list for
   * controlling traffic to the App Service Environment.
   * @member {boolean} [environmentIsHealthy] True/false indicating whether the
   * App Service Environment is healthy.
   * @member {string} [environmentStatus] Detailed message about with results
   * of the last check of the App Service Environment.
   * @member {string} [resourceGroup] Resource group of the App Service
   * Environment.
   * @member {number} [frontEndScaleFactor] Scale factor for front-ends.
   * @member {number} [defaultFrontEndScaleFactor] Default Scale Factor for
   * FrontEnds.
   * @member {string} [apiManagementAccountId] API Management Account
   * associated with the App Service Environment.
   * @member {boolean} [suspended] <code>true</code> if the App Service
   * Environment is suspended; otherwise, <code>false</code>. The environment
   * can be suspended, e.g. when the management endpoint is no longer available
   * (most likely because NSG blocked the incoming traffic).
   * @member {boolean} [dynamicCacheEnabled] True/false indicating whether the
   * App Service Environment is suspended. The environment can be suspended
   * e.g. when the management endpoint is no longer available
   * (most likely because NSG blocked the incoming traffic).
   * @member {array} [clusterSettings] Custom settings for changing the
   * behavior of the App Service Environment.
   * @member {array} [userWhitelistedIpRanges] User added ip ranges to
   * whitelist on ASE db
   * @member {boolean} [hasLinuxWorkers] Flag that displays whether an ASE has
   * linux workers or not
   * @member {string} [sslCertKeyVaultId] Key Vault ID for ILB App Service
   * Environment default SSL certificate
   * @member {string} [sslCertKeyVaultSecretName] Key Vault Secret Name for ILB
   * App Service Environment default SSL certificate
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AppServiceEnvironmentResource
   *
   * @returns {object} metadata of AppServiceEnvironmentResource
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppServiceEnvironmentResource',
      type: {
        name: 'Composite',
        className: 'AppServiceEnvironmentResource',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          appServiceEnvironmentResourceName: {
            required: true,
            serializedName: 'properties.name',
            type: {
              name: 'String'
            }
          },
          appServiceEnvironmentResourceLocation: {
            required: true,
            serializedName: 'properties.location',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'Enum',
              allowedValues: [ 'Succeeded', 'Failed', 'Canceled', 'InProgress', 'Deleting' ]
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'properties.status',
            type: {
              name: 'Enum',
              allowedValues: [ 'Preparing', 'Ready', 'Scaling', 'Deleting' ]
            }
          },
          vnetName: {
            required: false,
            serializedName: 'properties.vnetName',
            type: {
              name: 'String'
            }
          },
          vnetResourceGroupName: {
            required: false,
            serializedName: 'properties.vnetResourceGroupName',
            type: {
              name: 'String'
            }
          },
          vnetSubnetName: {
            required: false,
            serializedName: 'properties.vnetSubnetName',
            type: {
              name: 'String'
            }
          },
          virtualNetwork: {
            required: true,
            serializedName: 'properties.virtualNetwork',
            type: {
              name: 'Composite',
              className: 'VirtualNetworkProfile'
            }
          },
          internalLoadBalancingMode: {
            required: false,
            serializedName: 'properties.internalLoadBalancingMode',
            type: {
              name: 'Enum',
              allowedValues: [ 'None', 'Web', 'Publishing' ]
            }
          },
          multiSize: {
            required: false,
            serializedName: 'properties.multiSize',
            type: {
              name: 'String'
            }
          },
          multiRoleCount: {
            required: false,
            serializedName: 'properties.multiRoleCount',
            type: {
              name: 'Number'
            }
          },
          workerPools: {
            required: true,
            serializedName: 'properties.workerPools',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'WorkerPoolElementType',
                  type: {
                    name: 'Composite',
                    className: 'WorkerPool'
                  }
              }
            }
          },
          ipsslAddressCount: {
            required: false,
            serializedName: 'properties.ipsslAddressCount',
            type: {
              name: 'Number'
            }
          },
          databaseEdition: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseEdition',
            type: {
              name: 'String'
            }
          },
          databaseServiceObjective: {
            required: false,
            readOnly: true,
            serializedName: 'properties.databaseServiceObjective',
            type: {
              name: 'String'
            }
          },
          upgradeDomains: {
            required: false,
            readOnly: true,
            serializedName: 'properties.upgradeDomains',
            type: {
              name: 'Number'
            }
          },
          subscriptionId: {
            required: false,
            readOnly: true,
            serializedName: 'properties.subscriptionId',
            type: {
              name: 'String'
            }
          },
          dnsSuffix: {
            required: false,
            serializedName: 'properties.dnsSuffix',
            type: {
              name: 'String'
            }
          },
          lastAction: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastAction',
            type: {
              name: 'String'
            }
          },
          lastActionResult: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastActionResult',
            type: {
              name: 'String'
            }
          },
          allowedMultiSizes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.allowedMultiSizes',
            type: {
              name: 'String'
            }
          },
          allowedWorkerSizes: {
            required: false,
            readOnly: true,
            serializedName: 'properties.allowedWorkerSizes',
            type: {
              name: 'String'
            }
          },
          maximumNumberOfMachines: {
            required: false,
            readOnly: true,
            serializedName: 'properties.maximumNumberOfMachines',
            type: {
              name: 'Number'
            }
          },
          vipMappings: {
            required: false,
            readOnly: true,
            serializedName: 'properties.vipMappings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VirtualIPMappingElementType',
                  type: {
                    name: 'Composite',
                    className: 'VirtualIPMapping'
                  }
              }
            }
          },
          environmentCapacities: {
            required: false,
            readOnly: true,
            serializedName: 'properties.environmentCapacities',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StampCapacityElementType',
                  type: {
                    name: 'Composite',
                    className: 'StampCapacity'
                  }
              }
            }
          },
          networkAccessControlList: {
            required: false,
            serializedName: 'properties.networkAccessControlList',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NetworkAccessControlEntryElementType',
                  type: {
                    name: 'Composite',
                    className: 'NetworkAccessControlEntry'
                  }
              }
            }
          },
          environmentIsHealthy: {
            required: false,
            readOnly: true,
            serializedName: 'properties.environmentIsHealthy',
            type: {
              name: 'Boolean'
            }
          },
          environmentStatus: {
            required: false,
            readOnly: true,
            serializedName: 'properties.environmentStatus',
            type: {
              name: 'String'
            }
          },
          resourceGroup: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceGroup',
            type: {
              name: 'String'
            }
          },
          frontEndScaleFactor: {
            required: false,
            serializedName: 'properties.frontEndScaleFactor',
            type: {
              name: 'Number'
            }
          },
          defaultFrontEndScaleFactor: {
            required: false,
            readOnly: true,
            serializedName: 'properties.defaultFrontEndScaleFactor',
            type: {
              name: 'Number'
            }
          },
          apiManagementAccountId: {
            required: false,
            serializedName: 'properties.apiManagementAccountId',
            type: {
              name: 'String'
            }
          },
          suspended: {
            required: false,
            serializedName: 'properties.suspended',
            type: {
              name: 'Boolean'
            }
          },
          dynamicCacheEnabled: {
            required: false,
            serializedName: 'properties.dynamicCacheEnabled',
            type: {
              name: 'Boolean'
            }
          },
          clusterSettings: {
            required: false,
            serializedName: 'properties.clusterSettings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'NameValuePairElementType',
                  type: {
                    name: 'Composite',
                    className: 'NameValuePair'
                  }
              }
            }
          },
          userWhitelistedIpRanges: {
            required: false,
            serializedName: 'properties.userWhitelistedIpRanges',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          hasLinuxWorkers: {
            required: false,
            serializedName: 'properties.hasLinuxWorkers',
            type: {
              name: 'Boolean'
            }
          },
          sslCertKeyVaultId: {
            required: false,
            serializedName: 'properties.sslCertKeyVaultId',
            type: {
              name: 'String'
            }
          },
          sslCertKeyVaultSecretName: {
            required: false,
            serializedName: 'properties.sslCertKeyVaultSecretName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppServiceEnvironmentResource;
