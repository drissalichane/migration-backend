/**
 * Webhook Node - Version 2.1
 * Starts the workflow when a webhook is called
 */


export interface WebhookV21Params {
/**
 * Whether to allow the webhook to listen for multiple HTTP methods
 * @default false
 */
    multipleMethods?: boolean | Expression<boolean>;
/**
 * The HTTP method to listen to
 * @displayOptions.show { multipleMethods: [false, true] }
 * @default GET
 */
    httpMethod?: 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | Expression<string>;
/**
 * The path to listen to, dynamic values could be specified by using ':', e.g. 'your-path/:dynamic-value'. If dynamic values are set 'webhookId' would be prepended to path.
 * @builderHint The webhook path that triggers this workflow
 */
    path?: string | Expression<string>;
/**
 * The way to authenticate
 * @default none
 */
    authentication?: 'basicAuth' | 'headerAuth' | 'jwtAuth' | 'none' | Expression<string>;
/**
 * When and how to respond to the webhook
 * @builderHint Use 'responseNode' to respond via a 'Respond to Webhook' node later in the workflow
 * @default onReceived
 */
    responseMode?: 'onReceived' | 'lastNode' | 'responseNode' | 'streaming' | Expression<string>;
/**
 * What data should be returned. If it should return all items as an array or only the first item as object.
 * @displayOptions.show { responseMode: ["lastNode"] }
 * @default firstEntryJson
 */
    responseData?: 'allEntries' | 'firstEntryJson' | 'firstEntryBinary' | 'noData' | Expression<string>;
/**
 * Name of the binary property to return
 * @displayOptions.show { responseData: ["firstEntryBinary"] }
 * @default data
 */
    responseBinaryPropertyName?: string | Expression<string> | PlaceholderValue;
  options?: {
    /** Comma-separated list of URLs allowed for cross-origin non-preflight requests. Use * (default) to allow all origins.
     * @default *
     */
    allowedOrigins?: string | Expression<string> | PlaceholderValue;
    /** Whether the webhook will receive binary data
     * @displayOptions.show { /httpMethod: ["PATCH", "PUT", "POST"] }
     * @default false
     */
    binaryData?: boolean | Expression<boolean>;
    /** The name of the output field to put any binary file data in. Only relevant if binary data is received.
     * @default data
     */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
    /** Whether to ignore requests from bots like link previewers and web crawlers
     * @default false
     */
    ignoreBots?: boolean | Expression<boolean>;
    /** Comma-separated list of allowed IP addresses or CIDR ranges. Leave empty to allow all IPs.
     */
    ipWhitelist?: string | Expression<string> | PlaceholderValue;
    /** Whether to send any body in the response
     * @displayOptions.show { /responseMode: ["onReceived"] }
     * @displayOptions.hide { rawBody: [true] }
     * @default false
     */
    noResponseBody?: boolean | Expression<boolean>;
    /** Name of the property to return the data of instead of the whole JSON
     * @displayOptions.show { /responseData: ["firstEntryJson"], /responseMode: ["lastNode"] }
     * @default data
     */
    responsePropertyName?: string | Expression<string> | PlaceholderValue;
    /** If the data gets received via "Form-Data Multipart" it will be the prefix and a number starting with 0 will be attached to it
     * @hint The name of the output binary field to put the file in
     * @displayOptions.show { binaryData: [true] }
     * @default data
     */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
    /** Raw body (binary)
     * @displayOptions.hide { binaryData: [true], noResponseBody: [true] }
     * @default false
     */
    rawBody?: boolean | Expression<boolean>;
    /** Whether to return the raw body
     * @displayOptions.hide { noResponseBody: [true] }
     * @default false
     */
    rawBody?: boolean | Expression<boolean>;
    /** Response Code
     * @displayOptions.hide { /responseMode: ["responseNode"] }
     * @default {"values":{"responseCode":200}}
     */
    responseCode?: {
        /** Values
     */
    values?: {
      /** The HTTP response code to return
       * @default 200
       */
      responseCode?: 200 | 201 | 204 | 301 | 302 | 304 | 400 | 401 | 403 | 404 | 'customCode' | Expression<number>;
      /** Code
       * @displayOptions.show { responseCode: ["customCode"] }
       * @default 200
       */
      customCode?: number | Expression<number>;
    };
  };
    /** Set a custom content-type to return if another one as the "application/json" should be returned
     * @displayOptions.show { /responseData: ["firstEntryJson"], /responseMode: ["lastNode"] }
     */
    responseContentType?: string | Expression<string> | PlaceholderValue;
    /** Custom response data to send
     * @displayOptions.show { /responseMode: ["onReceived"] }
     * @displayOptions.hide { noResponseBody: [true] }
     */
    responseData?: string | Expression<string> | PlaceholderValue;
    /** Add headers to the webhook response
     * @default {}
     */
    responseHeaders?: {
        /** Entries
     */
    entries?: Array<{
      /** Name of the header
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value of the header
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
}

export type WebhookV21Output = {
  headers?: Record<string, unknown>;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
  body?: Record<string, unknown>;
  webhookUrl?: string;
  executionMode?: string;
};

export interface WebhookV21Credentials {
  httpBasicAuth: CredentialReference;
  httpHeaderAuth: CredentialReference;
  jwtAuth: CredentialReference;
}

interface WebhookV21NodeBase {
  type: 'n8n-nodes-base.webhook';
  version: 2.1;
  credentials?: WebhookV21Credentials;
  isTrigger: true;
}

export type WebhookV21ParamsNode = WebhookV21NodeBase & {
  config: NodeConfig<WebhookV21Params>;
  output?: Items<WebhookV21Output>;
};

export type WebhookV21Node = WebhookV21ParamsNode;