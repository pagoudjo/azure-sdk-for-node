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
 * Represents the status of an operation that used the batch API.
 *
 */
class OperationBatchStatusResponseItem {
  /**
   * Create a OperationBatchStatusResponseItem.
   * @property {string} [operationUrl] status of the long running operation for
   * an environment
   * @property {string} [status] status of the long running operation for an
   * environment
   */
  constructor() {
  }

  /**
   * Defines the metadata of OperationBatchStatusResponseItem
   *
   * @returns {object} metadata of OperationBatchStatusResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OperationBatchStatusResponseItem',
      type: {
        name: 'Composite',
        className: 'OperationBatchStatusResponseItem',
        modelProperties: {
          operationUrl: {
            required: false,
            readOnly: true,
            serializedName: 'operationUrl',
            type: {
              name: 'String'
            }
          },
          status: {
            required: false,
            readOnly: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OperationBatchStatusResponseItem;