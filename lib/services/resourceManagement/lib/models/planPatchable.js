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
 * Plan for the appliance.
 *
 */
class PlanPatchable {
  /**
   * Create a PlanPatchable.
   * @member {string} [name] The plan name.
   * @member {string} [publisher] The publisher ID.
   * @member {string} [product] The product code.
   * @member {string} [promotionCode] The promotion code.
   * @member {string} [version] The plan's version.
   */
  constructor() {
  }

  /**
   * Defines the metadata of PlanPatchable
   *
   * @returns {object} metadata of PlanPatchable
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PlanPatchable',
      type: {
        name: 'Composite',
        className: 'PlanPatchable',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          publisher: {
            required: false,
            serializedName: 'publisher',
            type: {
              name: 'String'
            }
          },
          product: {
            required: false,
            serializedName: 'product',
            type: {
              name: 'String'
            }
          },
          promotionCode: {
            required: false,
            serializedName: 'promotionCode',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PlanPatchable;