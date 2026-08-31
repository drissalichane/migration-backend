/**
 * HTTP Request Node - Version 4.4
 * Makes an HTTP request and returns the response data
 */


export interface HttpRequestV44Params {
/**
 * The request method to use
 * @default GET
 */
    method?: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT' | Expression<string>;
/**
 * The URL to make the request to
 */
    url?: string | Expression<string> | PlaceholderValue;
  authentication?: 'none' | 'predefinedCredentialType' | 'genericCredentialType';
/**
 * Credential Type
 * @displayOptions.show { authentication: ["predefinedCredentialType"] }
 */
    nodeCredentialType?: string;
/**
 * Generic Auth Type
 * @displayOptions.show { authentication: ["genericCredentialType"] }
 */
    genericAuthType?: 'httpBasicAuth' | 'httpBearerAuth' | 'httpDigestAuth' | 'httpHeaderAuth' | 'httpQueryAuth' | 'httpCustomAuth' | 'oAuth1Api' | 'oAuth2Api' | Expression<string>;
  provideSslCertificates?: boolean | Expression<boolean>;
/**
 * Whether the request has query params or not
 * @default false
 */
    sendQuery?: boolean;
/**
 * Specify Query Parameters
 * @displayOptions.show { sendQuery: [true] }
 * @default keypair
 */
    specifyQuery?: 'keypair' | 'json' | Expression<string>;
/**
 * Query Parameters
 * @displayOptions.show { sendQuery: [true], specifyQuery: ["keypair"] }
 * @default {"parameters":[{"name":"","value":""}]}
 */
    queryParameters?: {
        /** Query Parameter
     * @builderHint NEVER put static authentication values (API keys, tokens, PATs) in queryParameters. It's insecure to store credentials directly in parameters. Instead set authentication to "genericCredentialType", genericAuthType to "httpQueryAuth", and add credentials: { httpQueryAuth:
 newCredential("Name") }. Only use queryParameters for non-auth values. Dynamic values from previous nodes via expr() are acceptable.
     */
    parameters?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * JSON
 * @displayOptions.show { sendQuery: [true], specifyQuery: ["json"] }
 */
    jsonQuery?: IDataObject | string | Expression<string>;
/**
 * Whether the request has headers or not
 * @default false
 */
    sendHeaders?: boolean;
/**
 * Specify Headers
 * @displayOptions.show { sendHeaders: [true] }
 * @default keypair
 */
    specifyHeaders?: 'keypair' | 'json' | Expression<string>;
/**
 * Headers
 * @displayOptions.show { sendHeaders: [true], specifyHeaders: ["keypair"] }
 * @default {"parameters":[{"name":"","value":""}]}
 */
    headerParameters?: {
        /** Header
     * @builderHint NEVER put static authentication values (API keys, tokens, PATs) in headerParameters. It's insecure to store credentials directly in parameters. Instead set authentication to "genericCredentialType", genericAuthType to "httpHeaderAuth", and add credentials: { httpHeaderAuth:
 newCredential("Name") }. Only use headerParameters for non-auth headers like Content-Type or Accept. Dynamic values from previous nodes via expr() are acceptable.
     */
    parameters?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * JSON
 * @displayOptions.show { sendHeaders: [true], specifyHeaders: ["json"] }
 */
    jsonHeaders?: IDataObject | string | Expression<string>;
/**
 * Whether the request has a body or not
 * @default false
 */
    sendBody?: boolean;
/**
 * Content-Type to use to send body parameters
 * @displayOptions.show { sendBody: [true] }
 * @default json
 */
    contentType?: 'form-urlencoded' | 'multipart-form-data' | 'json' | 'binaryData' | 'raw' | Expression<string>;
/**
 * The body can be specified using explicit fields (&lt;code&gt;keypair&lt;/code&gt;) or using a JavaScript object (&lt;code&gt;json&lt;/code&gt;)
 * @displayOptions.show { sendBody: [true], contentType: ["json", "form-urlencoded"] }
 * @default keypair
 */
    specifyBody?: 'keypair' | 'json' | Expression<string>;
/**
 * Body Parameters
 * @builderHint NEVER put static authentication values (API keys, tokens, PATs) in bodyParameters. It's insecure to store credentials directly in parameters. Instead set authentication to "genericCredentialType", genericAuthType to "customAuth", and add credentials: { customAuth:
 newCredential("Name") }. Only use bodyParameters for non-auth values. Dynamic values from previous nodes via expr() are acceptable.
 * @displayOptions.show { sendBody: [true], contentType: ["json", "multipart-form-data", "form-urlencoded"], specifyBody: ["keypair"] }
 * @default {"parameters":[{"name":"","value":""}]}
 */
    bodyParameters?: {
        /** Body Field
     */
    parameters?: Array<{
      /** ID of the field to set. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value of the field to set
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * JSON
 * @builderHint NEVER put static authentication values (API keys, tokens, PATs) in bodyParameters. It's insecure to store credentials directly in parameters. Instead set authentication to "genericCredentialType", genericAuthType to "customAuth", and add credentials: { customAuth:
 newCredential("Name") }. Only use bodyParameters for non-auth values. Dynamic values from previous nodes via expr() are acceptable.
 * @displayOptions.show { sendBody: [true], contentType: ["json"], specifyBody: ["json"] }
 */
    jsonBody?: IDataObject | string | Expression<string>;
/**
 * Body
 * @displayOptions.show { sendBody: [true], specifyBody: ["string"], contentType: ["raw"] }
 */
    body?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the incoming field containing the binary file data to be processed
 * @displayOptions.show { sendBody: [true], contentType: ["binaryData"] }
 */
    inputDataFieldName?: string | Expression<string> | PlaceholderValue;
/**
 * Content Type
 * @displayOptions.show { sendBody: [true], contentType: ["raw"] }
 */
    rawContentType?: string | Expression<string> | PlaceholderValue;
  options?: {
    /** Batching
     * @default {"batch":{}}
     */
    batching?: {
        /** Batching
     */
    batch?: {
      /** Input will be split in batches to throttle requests. -1 for disabled. 0 will be treated as 1.
       * @default 50
       */
      batchSize?: number | Expression<number>;
      /** Time (in milliseconds) between each batch of requests. 0 for disabled.
       * @default 1000
       */
      batchInterval?: number | Expression<number>;
    };
  };
    /** Whether to download the response even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean;
    /** Array Format in Query Parameters
     * @displayOptions.show { /sendQuery: [true] }
     * @default brackets
     */
    queryParameterArrays?: 'repeat' | 'brackets' | 'indices' | Expression<string>;
    /** Whether to lowercase header names
     * @default true
     */
    lowercaseHeaders?: boolean | Expression<boolean>;
    /** Redirects
     * @default {"redirect":{}}
     */
    redirect?: {
        /** Redirect
     */
    redirect?: {
      /** Whether to follow all redirects
       * @default false
       */
      followRedirects?: boolean;
      /** Max number of redirects to follow
       * @displayOptions.show { followRedirects: [true] }
       * @default 21
       */
      maxRedirects?: number | Expression<number>;
    };
  };
    /** Redirects
     * @default {"redirect":{}}
     */
    redirect?: {
        /** Redirect
     */
    redirect?: {
      /** Whether to follow all redirects
       * @default true
       */
      followRedirects?: boolean;
      /** Max number of redirects to follow
       * @displayOptions.show { followRedirects: [true] }
       * @default 21
       */
      maxRedirects?: number | Expression<number>;
    };
  };
    /** Response
     * @default {"response":{}}
     */
    response?: {
        /** Response
     */
    response?: {
      /** Whether to return the full response (headers and response status code) data instead of only the body
       * @default false
       */
      fullResponse?: boolean | Expression<boolean>;
      /** Whether to succeeds also when status code is not 2xx
       * @default false
       */
      neverError?: boolean | Expression<boolean>;
      /** The format in which the data gets returned from the URL
       * @default autodetect
       */
      responseFormat?: 'autodetect' | 'file' | 'json' | 'text';
      /** Name of the binary property to which to write the data of the read file
       * @displayOptions.show { responseFormat: ["file", "text"] }
       * @default data
       */
      outputPropertyName?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Pagination
     * @default {"pagination":{}}
     */
    pagination?: {
        /** Pagination
     */
    pagination?: {
      /** If pagination should be used
       * @default updateAParameterInEachRequest
       */
      paginationMode?: 'off' | 'updateAParameterInEachRequest' | 'responseContainsNextURL' | Expression<string>;
      /** Should evaluate to the URL of the next page. &lt;a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/#pagination" target="_blank"&gt;More info&lt;/a&gt;.
       * @displayOptions.show { paginationMode: ["responseContainsNextURL"] }
       */
      nextURL?: string | Expression<string> | PlaceholderValue;
      /** Parameters
       * @displayOptions.show { paginationMode: ["updateAParameterInEachRequest"] }
       * @default {"parameters":[{"type":"qs","name":"","value":""}]}
       */
      parameters?: {
        /** Parameter
     */
    parameters?: Array<{
      /** Where the parameter should be set
       * @default qs
       */
      type?: 'body' | 'headers' | 'qs' | Expression<string>;
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       * @hint Use expression mode and $response to access response data
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
      /** When should no further requests be made?
       * @displayOptions.hide { paginationMode: ["off"] }
       * @default responseIsEmpty
       */
      paginationCompleteWhen?: 'responseIsEmpty' | 'receiveSpecificStatusCodes' | 'other' | Expression<string>;
      /** Accepts comma-separated values
       * @displayOptions.show { paginationCompleteWhen: ["receiveSpecificStatusCodes"] }
       */
      statusCodesWhenComplete?: string | Expression<string> | PlaceholderValue;
      /** Should evaluate to true when pagination is complete. &lt;a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.httprequest/#pagination" target="_blank"&gt;More info&lt;/a&gt;.
       * @displayOptions.show { paginationCompleteWhen: ["other"] }
       */
      completeExpression?: string | Expression<string> | PlaceholderValue;
      /** Whether the number of requests should be limited
       * @displayOptions.hide { paginationMode: ["off"] }
       * @default false
       */
      limitPagesFetched?: boolean;
      /** Maximum amount of request to be make
       * @displayOptions.show { limitPagesFetched: [true] }
       * @default 100
       */
      maxRequests?: number | Expression<number>;
      /** Time in milliseconds to wait between requests
       * @hint At 0 no delay will be added
       * @displayOptions.hide { paginationMode: ["off"] }
       * @default 0
       */
      requestInterval?: number | Expression<number>;
    };
  };
    /** HTTP proxy to use
     */
    proxy?: string | Expression<string> | PlaceholderValue;
    /** Time in ms to wait for the server to send response headers (and start the response body) before aborting the request
     * @default 10000
     */
    timeout?: number | Expression<number>;
    /** Whether to send credentials, like the "Authorization" header, on redirects to a different origin
     * @default false
     */
    sendCredentialsOnCrossOriginRedirect?: boolean | Expression<boolean>;
  };
/**
 * Whether the optimize the tool response to reduce amount of data passed to the LLM that could lead to better result and reduce cost
 * @displayOptions.show { @tool: [true] }
 * @default false
 */
    optimizeResponse?: boolean;
/**
 * Expected Response Type
 * @displayOptions.show { optimizeResponse: [true], @tool: [true] }
 * @default json
 */
    responseType?: 'json' | 'html' | 'text' | Expression<string>;
/**
 * Specify the name of the field in the response containing the data
 * @hint leave blank to use whole response
 * @displayOptions.show { optimizeResponse: [true], responseType: ["json"], @tool: [true] }
 */
    dataField?: string | Expression<string> | PlaceholderValue;
/**
 * What fields response object should include
 * @displayOptions.show { optimizeResponse: [true], responseType: ["json"], @tool: [true] }
 * @default all
 */
    fieldsToInclude?: 'all' | 'selected' | 'except' | Expression<string>;
/**
 * Comma-separated list of the field names. Supports dot notation. You can drag the selected fields from the input panel.
 * @displayOptions.show { optimizeResponse: [true], responseType: ["json"], @tool: [true] }
 * @displayOptions.hide { fieldsToInclude: ["all"] }
 */
    fields?: string | Expression<string> | PlaceholderValue;
/**
 * Select specific element(e.g. body) or multiple elements(e.g. div) of chosen type in the response HTML.
 * @displayOptions.show { optimizeResponse: [true], responseType: ["html"], @tool: [true] }
 * @default body
 */
    cssSelector?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return only content of html elements, stripping html tags and attributes
 * @hint Uses less tokens and may be easier for model to understand
 * @displayOptions.show { optimizeResponse: [true], responseType: ["html"], @tool: [true] }
 * @default false
 */
    onlyContent?: boolean | Expression<boolean>;
/**
 * Comma-separated list of selectors that would be excluded when extracting content
 * @displayOptions.show { optimizeResponse: [true], responseType: ["html"], onlyContent: [true], @tool: [true] }
 */
    elementsToOmit?: string | Expression<string> | PlaceholderValue;
/**
 * Truncate Response
 * @hint Helps save tokens
 * @displayOptions.show { optimizeResponse: [true], responseType: ["text", "html"], @tool: [true] }
 * @default false
 */
    truncateResponse?: boolean | Expression<boolean>;
/**
 * Max Response Characters
 * @displayOptions.show { optimizeResponse: [true], responseType: ["text", "html"], truncateResponse: [true], @tool: [true] }
 * @default 1000
 */
    maxLength?: number | Expression<number>;
}

export interface HttpRequestV44Credentials {
  httpSslAuth: CredentialReference;
  /** Generic auth credentials - set the 'genericAuthType' config parameter to select which one to use */
  httpBasicAuth?: CredentialReference;
  httpBearerAuth?: CredentialReference;
  httpDigestAuth?: CredentialReference;
  httpHeaderAuth?: CredentialReference;
  httpQueryAuth?: CredentialReference;
  httpCustomAuth?: CredentialReference;
  oAuth1Api?: CredentialReference;
  oAuth2Api?: CredentialReference;
}

interface HttpRequestV44NodeBase {
  type: 'n8n-nodes-base.httpRequest';
  version: 4.4;
  credentials?: HttpRequestV44Credentials;
}

export type HttpRequestV44ParamsNode = HttpRequestV44NodeBase & {
  config: NodeConfig<HttpRequestV44Params>;
};

export type HttpRequestV44Node = HttpRequestV44ParamsNode;