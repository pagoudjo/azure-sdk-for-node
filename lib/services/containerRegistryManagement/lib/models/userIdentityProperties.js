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

/**
 * Class representing a UserIdentityProperties.
 */
class UserIdentityProperties {
  /**
   * Create a UserIdentityProperties.
   * @property {string} [principalId] The principal id of user assigned
   * identity.
   * @property {string} [clientId] The client id of user assigned identity.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UserIdentityProperties
   *
   * @returns {object} metadata of UserIdentityProperties
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UserIdentityProperties',
      type: {
        name: 'Composite',
        className: 'UserIdentityProperties',
        modelProperties: {
          principalId: {
            required: false,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          clientId: {
            required: false,
            serializedName: 'clientId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UserIdentityProperties;