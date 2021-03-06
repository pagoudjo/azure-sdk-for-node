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
 * PATCH Body schema for Update Kb which contains list of questions to be added
 * and deleted
 *
 */
class UpdateQuestionsDTO {
  /**
   * Create a UpdateQuestionsDTO.
   * @property {array} [add] List of questions to be added
   * @property {array} [deleteProperty] List of questions to be deleted.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateQuestionsDTO
   *
   * @returns {object} metadata of UpdateQuestionsDTO
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateQuestionsDTO',
      type: {
        name: 'Composite',
        className: 'UpdateQuestionsDTO',
        modelProperties: {
          add: {
            required: false,
            serializedName: 'add',
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
          deleteProperty: {
            required: false,
            serializedName: 'delete',
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
          }
        }
      }
    };
  }
}

module.exports = UpdateQuestionsDTO;
