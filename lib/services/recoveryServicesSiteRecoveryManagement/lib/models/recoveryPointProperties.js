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
 * Recovery point properties.
 *
 */
class RecoveryPointProperties {
  /**
   * Create a RecoveryPointProperties.
   * @member {date} [recoveryPointTime] The recovery point time.
   * @member {string} [recoveryPointType] The recovery point type:
   * ApplicationConsistent, CrashConsistent.
   * @member {object} [providerSpecificDetails] The provider specific details
   * for the recovery point.
   * @member {string} [providerSpecificDetails.type] Gets the provider type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecoveryPointProperties
   *
   * @returns {object} metadata of RecoveryPointProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecoveryPointProperties',
      type: {
        name: 'Composite',
        className: 'RecoveryPointProperties',
        modelProperties: {
          recoveryPointTime: {
            required: false,
            serializedName: 'recoveryPointTime',
            type: {
              name: 'DateTime'
            }
          },
          recoveryPointType: {
            required: false,
            serializedName: 'recoveryPointType',
            type: {
              name: 'String'
            }
          },
          providerSpecificDetails: {
            required: false,
            serializedName: 'providerSpecificDetails',
            type: {
              name: 'Composite',
              className: 'ProviderSpecificRecoveryPointDetails'
            }
          }
        }
      }
    };
  }
}

module.exports = RecoveryPointProperties;