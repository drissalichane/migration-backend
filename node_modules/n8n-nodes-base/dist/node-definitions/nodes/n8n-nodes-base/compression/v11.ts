/**
 * Compression Node - Version 1.1
 * Compress and decompress files
 */


export interface CompressionV11Params {
  operation?: 'compress' | 'decompress';
/**
 * To process more than one file, use a comma-separated list of the binary fields names
 * @hint The name of the input binary field(s) containing the file(s) to be compressed
 * @displayOptions.show { operation: ["compress", "decompress"] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Format of the output
 * @displayOptions.show { operation: ["compress"] }
 * @default zip
 */
    outputFormat?: 'gzip' | 'zip' | Expression<string>;
/**
 * Name of the output file
 * @displayOptions.show { operation: ["compress"], outputFormat: ["zip"] }
 */
    fileName?: string | Expression<string> | PlaceholderValue;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @displayOptions.show { outputFormat: ["zip"], operation: ["compress"] }
 * @default data
 */
    binaryPropertyOutput?: string | Expression<string> | PlaceholderValue;
/**
 * Prefix to add to the decompressed files
 * @displayOptions.show { operation: ["decompress"] }
 * @default file_
 */
    outputPrefix?: string | Expression<string> | PlaceholderValue;
}

interface CompressionV11NodeBase {
  type: 'n8n-nodes-base.compression';
  version: 1.1;
}

export type CompressionV11ParamsNode = CompressionV11NodeBase & {
  config: NodeConfig<CompressionV11Params>;
};

export type CompressionV11Node = CompressionV11ParamsNode;