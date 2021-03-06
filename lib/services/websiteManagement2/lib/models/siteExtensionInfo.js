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
 * Site Extension Information.
 *
 * @extends models['ProxyOnlyResource']
 */
class SiteExtensionInfo extends models['ProxyOnlyResource'] {
  /**
   * Create a SiteExtensionInfo.
   * @member {string} [extensionId] Site extension ID.
   * @member {string} [title]
   * @member {string} [extensionType] Site extension type. Possible values
   * include: 'Gallery', 'WebRoot'
   * @member {string} [summary] Summary description.
   * @member {string} [description] Detailed description.
   * @member {string} [version] Version information.
   * @member {string} [extensionUrl] Extension URL.
   * @member {string} [projectUrl] Project URL.
   * @member {string} [iconUrl] Icon URL.
   * @member {string} [licenseUrl] License URL.
   * @member {string} [feedUrl] Feed URL.
   * @member {array} [authors] List of authors.
   * @member {string} [installerCommandLineParams] Installer command line
   * parameters.
   * @member {date} [publishedDateTime] Published timestamp.
   * @member {number} [downloadCount] Count of downloads.
   * @member {boolean} [localIsLatestVersion] <code>true</code> if the local
   * version is the latest version; <code>false</code> otherwise.
   * @member {string} [localPath] Local path.
   * @member {date} [installedDateTime] Installed timestamp.
   * @member {string} [provisioningState] Provisioning state.
   * @member {string} [comment] Site Extension comment.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SiteExtensionInfo
   *
   * @returns {object} metadata of SiteExtensionInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SiteExtensionInfo',
      type: {
        name: 'Composite',
        className: 'SiteExtensionInfo',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          extensionId: {
            required: false,
            serializedName: 'properties.extension_id',
            type: {
              name: 'String'
            }
          },
          title: {
            required: false,
            serializedName: 'properties.title',
            type: {
              name: 'String'
            }
          },
          extensionType: {
            required: false,
            serializedName: 'properties.extension_type',
            type: {
              name: 'Enum',
              allowedValues: [ 'Gallery', 'WebRoot' ]
            }
          },
          summary: {
            required: false,
            serializedName: 'properties.summary',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'properties.description',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'properties.version',
            type: {
              name: 'String'
            }
          },
          extensionUrl: {
            required: false,
            serializedName: 'properties.extension_url',
            type: {
              name: 'String'
            }
          },
          projectUrl: {
            required: false,
            serializedName: 'properties.project_url',
            type: {
              name: 'String'
            }
          },
          iconUrl: {
            required: false,
            serializedName: 'properties.icon_url',
            type: {
              name: 'String'
            }
          },
          licenseUrl: {
            required: false,
            serializedName: 'properties.license_url',
            type: {
              name: 'String'
            }
          },
          feedUrl: {
            required: false,
            serializedName: 'properties.feed_url',
            type: {
              name: 'String'
            }
          },
          authors: {
            required: false,
            serializedName: 'properties.authors',
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
          installerCommandLineParams: {
            required: false,
            serializedName: 'properties.installer_command_line_params',
            type: {
              name: 'String'
            }
          },
          publishedDateTime: {
            required: false,
            serializedName: 'properties.published_date_time',
            type: {
              name: 'DateTime'
            }
          },
          downloadCount: {
            required: false,
            serializedName: 'properties.download_count',
            type: {
              name: 'Number'
            }
          },
          localIsLatestVersion: {
            required: false,
            serializedName: 'properties.local_is_latest_version',
            type: {
              name: 'Boolean'
            }
          },
          localPath: {
            required: false,
            serializedName: 'properties.local_path',
            type: {
              name: 'String'
            }
          },
          installedDateTime: {
            required: false,
            serializedName: 'properties.installed_date_time',
            type: {
              name: 'DateTime'
            }
          },
          provisioningState: {
            required: false,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          },
          comment: {
            required: false,
            serializedName: 'properties.comment',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = SiteExtensionInfo;
