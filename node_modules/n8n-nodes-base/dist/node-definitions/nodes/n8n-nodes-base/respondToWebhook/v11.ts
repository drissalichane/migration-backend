/**
 * Respond to Webhook Node - Version 1.1
 * Returns data for Webhook
 */


export interface RespondToWebhookV11Params {
/**
 * The data that should be returned
 * @default firstIncomingItem
 */
    respondWith?: 'allIncomingItems' | 'binary' | 'firstIncomingItem' | 'json' | 'jwt' | 'noData' | 'redirect' | 'text' | Expression<string>;
/**
 * The URL to redirect to
 * @displayOptions.show { respondWith: ["redirect"] }
 */
    redirectURL?: string | Expression<string> | PlaceholderValue;
/**
 * The HTTP response JSON data
 * @displayOptions.show { respondWith: ["json", "text"] }
 */
    responseBody?: IDataObject | string | Expression<string>;
/**
 * The payload to include in the JWT token
 * @displayOptions.show { respondWith: ["jwt"] }
 */
    payload?: IDataObject | string | Expression<string>;
/**
 * Response Data Source
 * @displayOptions.show { respondWith: ["binary"] }
 * @default automatically
 */
    responseDataSource?: 'automatically' | 'set' | Expression<string>;
/**
 * The name of the node input field with the binary data
 * @displayOptions.show { respondWith: ["binary"], responseDataSource: ["set"] }
 * @default data
 */
    inputFieldName?: string | Expression<string> | PlaceholderValue;
  options?: {
    /** The HTTP response code to return. Defaults to 200.
     * @default 200
     */
    responseCode?: number | Expression<number>;
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
    /** The name of the response field to put all items in
     * @displayOptions.show { /respondWith: ["allIncomingItems", "firstIncomingItem"] }
     */
    responseKey?: string | Expression<string> | PlaceholderValue;
    /** Whether to enable streaming to the response
     * @displayOptions.show { /respondWith: ["allIncomingItems", "firstIncomingItem", "text", "json", "jwt"] }
     * @default true
     */
    enableStreaming?: boolean | Expression<boolean>;
  };
}

export interface RespondToWebhookV11Credentials {
  jwtAuth: CredentialReference;
}

interface RespondToWebhookV11NodeBase {
  type: 'n8n-nodes-base.respondToWebhook';
  version: 1.1;
  credentials?: RespondToWebhookV11Credentials;
}

export type RespondToWebhookV11ParamsNode = RespondToWebhookV11NodeBase & {
  config: NodeConfig<RespondToWebhookV11Params>;
};

export type RespondToWebhookV11Node = RespondToWebhookV11ParamsNode;