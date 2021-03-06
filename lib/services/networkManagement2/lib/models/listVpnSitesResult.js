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
 * Result of the request to list VpnSites. It contains a list of VpnSites and a
 * URL nextLink to get the next set of results.
 */
class ListVpnSitesResult extends Array {
  /**
   * Create a ListVpnSitesResult.
   * @property {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ListVpnSitesResult
   *
   * @returns {object} metadata of ListVpnSitesResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListVpnSitesResult',
      type: {
        name: 'Composite',
        className: 'ListVpnSitesResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'VpnSiteElementType',
                  type: {
                    name: 'Composite',
                    className: 'VpnSite'
                  }
              }
            }
          },
          nextLink: {
            required: false,
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

module.exports = ListVpnSitesResult;
