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
 * The alias type.
 *
 */
class AliasType {
  /**
   * Create a AliasType.
   * @property {string} [name] The alias name.
   * @property {array} [paths] The paths for an alias.
   */
  constructor() {
  }

  /**
   * Defines the metadata of AliasType
   *
   * @returns {object} metadata of AliasType
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AliasType',
      type: {
        name: 'Composite',
        className: 'AliasType',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          paths: {
            required: false,
            serializedName: 'paths',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AliasPathTypeElementType',
                  type: {
                    name: 'Composite',
                    className: 'AliasPathType'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AliasType;
