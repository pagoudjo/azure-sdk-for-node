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
 * The deleted storage account list result
 */
class DeletedStorageListResult extends Array {
  /**
   * Create a DeletedStorageListResult.
   * @member {string} [nextLink] The URL to get the next set of deleted storage
   * accounts.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DeletedStorageListResult
   *
   * @returns {object} metadata of DeletedStorageListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeletedStorageListResult',
      type: {
        name: 'Composite',
        className: 'DeletedStorageListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeletedStorageAccountItemElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeletedStorageAccountItem'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeletedStorageListResult;
