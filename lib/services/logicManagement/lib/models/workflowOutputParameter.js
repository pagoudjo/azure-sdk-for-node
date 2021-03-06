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
 * The workflow output parameter.
 *
 * @extends models['WorkflowParameter']
 */
class WorkflowOutputParameter extends models['WorkflowParameter'] {
  /**
   * Create a WorkflowOutputParameter.
   * @property {object} [error] Gets the error.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of WorkflowOutputParameter
   *
   * @returns {object} metadata of WorkflowOutputParameter
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'WorkflowOutputParameter',
      type: {
        name: 'Composite',
        className: 'WorkflowOutputParameter',
        modelProperties: {
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Object'
            }
          },
          metadata: {
            required: false,
            serializedName: 'metadata',
            type: {
              name: 'Object'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          error: {
            required: false,
            readOnly: true,
            serializedName: 'error',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = WorkflowOutputParameter;
