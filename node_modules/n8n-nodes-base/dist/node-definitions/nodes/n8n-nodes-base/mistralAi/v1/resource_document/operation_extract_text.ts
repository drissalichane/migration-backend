/**
 * Mistral AI Node - Version 1
 * Discriminator: resource=document, operation=extractText
 */


interface Credentials {
  mistralCloudApi: CredentialReference;
}

/** Extract text from document using OCR */
export type MistralAiV1DocumentExtractTextParams = {
  resource: 'document';
  operation: 'extractText';
/**
 * The OCR model to use
 * @default mistral-ocr-latest
 */
    model?: 'mistral-ocr-latest' | Expression<string>;
/**
 * The type of document to process
 * @default document_url
 */
    documentType?: 'document_url' | 'image_url' | Expression<string>;
/**
 * How the document will be provided
 * @default binary
 */
    inputType?: 'binary' | 'url' | Expression<string>;
/**
 * Name of the input binary field that contains the file to process
 * @hint Uploaded document files must not exceed 50 MB in size and should be no longer than 1,000 pages.
 * @displayOptions.show { inputType: ["binary"] }
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
/**
 * URL of the document or image to process
 * @displayOptions.show { inputType: ["url"] }
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to process multiple documents in a single API call (more cost-efficient)
     * @default false
     */
    batch?: boolean | Expression<boolean>;
    /** Maximum number of documents to process in a single batch
     * @displayOptions.show { batch: [true] }
     * @default 50
     */
    batchSize?: number | Expression<number>;
    /** Whether to delete the files on Mistral Cloud after processing
     * @displayOptions.show { batch: [true] }
     * @default true
     */
    deleteFiles?: boolean | Expression<boolean>;
  };
};

export type MistralAiV1DocumentExtractTextNode = {
  type: 'n8n-nodes-base.mistralAi';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MistralAiV1DocumentExtractTextParams>;
};