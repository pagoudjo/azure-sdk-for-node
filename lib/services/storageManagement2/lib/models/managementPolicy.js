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
 * The Get Storage Account ManagementPolicies operation response.
 *
 * @extends models['Resource']
 */
class ManagementPolicy extends models['Resource'] {
  /**
   * Create a ManagementPolicy.
   * @property {date} [lastModifiedTime] Returns the date and time the
   * ManagementPolicies was last modified.
   * @property {object} policy The Storage Account ManagementPolicy, in JSON
   * format. See more details in:
   * https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
   * @property {array} [policy.rules] The Storage Account ManagementPolicies
   * Rules. See more details in:
   * https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ManagementPolicy
   *
   * @returns {object} metadata of ManagementPolicy
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ManagementPolicy',
      type: {
        name: 'Composite',
        className: 'ManagementPolicy',
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
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          lastModifiedTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          policy: {
            required: true,
            serializedName: 'properties.policy',
            type: {
              name: 'Composite',
              className: 'ManagementPolicySchema'
            }
          }
        }
      }
    };
  }
}

module.exports = ManagementPolicy;