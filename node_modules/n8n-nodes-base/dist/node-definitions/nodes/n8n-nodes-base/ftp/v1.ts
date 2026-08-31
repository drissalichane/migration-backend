/**
 * FTP Node - Version 1
 * Transfer files via FTP or SFTP
 */


export interface FtpV1Params {
/**
 * File transfer protocol
 * @default ftp
 */
    protocol?: 'ftp' | 'sftp' | Expression<string>;
  operation?: 'delete' | 'download' | 'list' | 'rename' | 'upload';
/**
 * The file path of the file to delete. Has to contain the full path.
 * @displayOptions.show { operation: ["delete"] }
 */
    path?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @displayOptions.show { operation: ["delete"] }
 * @default {}
 */
    options?: {
    /** Whether folders can be deleted
     * @default false
     */
    folder?: boolean | Expression<boolean>;
    /** Whether to remove all files and directories in target directory
     * @displayOptions.show { folder: [true] }
     * @default false
     */
    recursive?: boolean | Expression<boolean>;
    /** Connection timeout in milliseconds
     * @default 10000
     */
    timeout?: number | Expression<number>;
    /** Whether to enable concurrent reads for downloading files
     * @default false
     */
    enableConcurrentReads?: boolean | Expression<boolean>;
    /** Max Concurrent Reads
     * @displayOptions.show { enableConcurrentReads: [true] }
     * @default 5
     */
    maxConcurrentReads?: number | Expression<number>;
    /** Size of each chunk in KB to download, Not all servers support this
     * @displayOptions.show { enableConcurrentReads: [true] }
     * @default 64
     */
    chunkSize?: number | Expression<number>;
    /** Whether to recursively create destination directory when renaming an existing file or folder
     * @default false
     */
    createDirectories?: boolean | Expression<boolean>;
  };
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @displayOptions.show { operation: ["download"] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Old Path
 * @displayOptions.show { operation: ["rename"] }
 */
    oldPath?: string | Expression<string> | PlaceholderValue;
/**
 * New Path
 * @displayOptions.show { operation: ["rename"] }
 */
    newPath?: string | Expression<string> | PlaceholderValue;
/**
 * The text content of the file to upload
 * @displayOptions.show { operation: ["upload"] }
 * @default true
 */
    binaryData?: boolean | Expression<boolean>;
/**
 * The text content of the file to upload
 * @displayOptions.show { operation: ["upload"], binaryData: [false] }
 */
    fileContent?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return object representing all directories / objects recursively found within SFTP server
 * @displayOptions.show { operation: ["list"] }
 * @default false
 */
    recursive?: boolean | Expression<boolean>;
}

export interface FtpV1Credentials {
  ftp: CredentialReference;
  sftp: CredentialReference;
}

interface FtpV1NodeBase {
  type: 'n8n-nodes-base.ftp';
  version: 1;
  credentials?: FtpV1Credentials;
}

export type FtpV1ParamsNode = FtpV1NodeBase & {
  config: NodeConfig<FtpV1Params>;
};

export type FtpV1Node = FtpV1ParamsNode;