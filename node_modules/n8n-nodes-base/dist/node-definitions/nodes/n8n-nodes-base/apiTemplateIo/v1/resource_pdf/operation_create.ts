/**
 * APITemplate.io Node - Version 1
 * Discriminator: resource=pdf, operation=create
 */


interface Credentials {
  apiTemplateIoApi: CredentialReference;
}

export type ApiTemplateIoV1PdfCreateParams = {
  resource: 'pdf';
  operation: 'create';
/**
 * ID of the PDF template to use. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    pdfTemplateId?: string | Expression<string>;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Name of the binary property to which to write the data of the read file
 * @default false
 */
    download?: boolean | Expression<boolean>;
/**
 * Put Output File in Field
 * @hint The name of the output binary field to put the file in
 * @displayOptions.show { download: [true] }
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
/**
 * Properties (JSON)
 * @displayOptions.show { jsonParameters: [true] }
 */
    propertiesJson?: IDataObject | string | Expression<string>;
/**
 * Properties
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    propertiesUi?: {
        /** Property
     */
    propertyValues?: Array<{
      /** Name of the property
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value to the property
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Options
 * @displayOptions.show { download: [true] }
 * @default {}
 */
    options?: {
    /** The name of the downloaded image/pdf. It has to include the extension. For example: report.pdf
     */
    fileName?: string | Expression<string> | PlaceholderValue;
  };
};

export type ApiTemplateIoV1PdfCreateOutput = {
  download_url?: string;
  status?: string;
  template_id?: string;
  transaction_ref?: string;
};

export type ApiTemplateIoV1PdfCreateNode = {
  type: 'n8n-nodes-base.apiTemplateIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ApiTemplateIoV1PdfCreateParams>;
  output?: Items<ApiTemplateIoV1PdfCreateOutput>;
};