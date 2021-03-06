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
 * Represents a metric metadata value.
 *
 */
class MetadataValue {
  /**
   * Create a MetadataValue.
   * @property {object} [name] the name of the metadata.
   * @property {string} [name.value] the invariant value.
   * @property {string} [name.localizedValue] the locale specific value.
   * @property {string} [value] the value of the metadata.
   */
  constructor() {
  }

  /**
   * Defines the metadata of MetadataValue
   *
   * @returns {object} metadata of MetadataValue
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'MetadataValue',
      type: {
        name: 'Composite',
        className: 'MetadataValue',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'LocalizableString'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = MetadataValue;
