/**
 * Read/Write Files from Disk Node - Version 1
 * Read or write files from the computer that runs n8n
 */


export interface ReadWriteFileV1Params {
  operation?: 'read' | 'write';
/**
 * Specify a file's path or path pattern to read multiple files. Always use forward-slashes for path separator even on Windows.
 * @hint Supports patterns, learn more &lt;a href="https://github.com/micromatch/picomatch#basic-globbing" target="_blank"&gt;here&lt;/a&gt;
 * @displayOptions.show { operation: ["read"] }
 */
    fileSelector?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @displayOptions.show { operation: ["read"] }
 * @default {}
 */
    options?: {
    /** Extension of the file in the output binary
     */
    fileExtension?: string | Expression<string> | PlaceholderValue;
    /** Name of the file in the output binary
     */
    fileName?: string | Expression<string> | PlaceholderValue;
    /** Mime type of the file in the output binary
     */
    mimeType?: string | Expression<string> | PlaceholderValue;
    /** By default 'data' is used
     * @hint The name of the output binary field to put the file in
     * @default data
     */
    dataPropertyName?: string | Expression<string> | PlaceholderValue;
    /** Whether to append to an existing file. While it's commonly used with text files, it's not limited to them, however, it wouldn't be applicable for file types that have a specific structure like most binary formats.
     * @default false
     */
    append?: boolean | Expression<boolean>;
  };
/**
 * Path and name of the file that should be written. Also include the file extension.
 * @displayOptions.show { operation: ["write"] }
 */
    fileName?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be written
 * @displayOptions.show { operation: ["write"] }
 * @default data
 */
    dataPropertyName?: string | Expression<string> | PlaceholderValue;
}

interface ReadWriteFileV1NodeBase {
  type: 'n8n-nodes-base.readWriteFile';
  version: 1;
}

export type ReadWriteFileV1ParamsNode = ReadWriteFileV1NodeBase & {
  config: NodeConfig<ReadWriteFileV1Params>;
};

export type ReadWriteFileV1Node = ReadWriteFileV1ParamsNode;