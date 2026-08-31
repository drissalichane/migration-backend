/**
 * Compression Node - Version 1
 * Compress and decompress files
 */


export interface CompressionV1Params {
  operation?: 'compress' | 'decompress';
/**
 * To process more than one file, use a comma-separated list of the binary fields names
 * @hint The name of the input binary field(s) containing the file(s) to be compressed
 * @displayOptions.show { operation: ["compress"] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Format of the output
 * @displayOptions.show { operation: ["compress"] }
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
 * Prefix to add to the gzip file
 * @displayOptions.show { operation: ["compress"], outputFormat: ["gzip"] }
 * @default data
 */
    outputPrefix?: string | Expression<string> | PlaceholderValue;
}

interface CompressionV1NodeBase {
  type: 'n8n-nodes-base.compression';
  version: 1;
}

export type CompressionV1ParamsNode = CompressionV1NodeBase & {
  config: NodeConfig<CompressionV1Params>;
};

export type CompressionV1Node = CompressionV1ParamsNode;