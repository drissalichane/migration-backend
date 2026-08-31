/**
 * LingvaNex Node - Version 1
 * Consume LingvaNex API
 */


export interface LingvaNexV1Params {
  operation?: 'translate';
/**
 * The input text to translate
 * @displayOptions.show { operation: ["translate"] }
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * The language to use for translation of the input text, set to one of the language codes listed in &lt;a href="https://cloud.google.com/translate/docs/languages"&gt;Language Support&lt;/a&gt;. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { operation: ["translate"] }
 */
    translateTo?: string | Expression<string>;
/**
 * Additional Options
 * @displayOptions.show { operation: ["translate"] }
 * @default {}
 */
    options?: {
    /** The language code in the format “language code_code of the country”. If this parameter is not present, the auto-detect language mode is enabled. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    from?: string | Expression<string>;
    /** Platform
     * @default api
     */
    platform?: string | Expression<string> | PlaceholderValue;
    /** Describe the input text format. Possible value is "html" for translating and preserving html structure. If value is not specified or is other than "html" than plain text is translating.
     */
    translateMode?: string | Expression<string> | PlaceholderValue;
  };
}

export interface LingvaNexV1Credentials {
  lingvaNexApi: CredentialReference;
}

interface LingvaNexV1NodeBase {
  type: 'n8n-nodes-base.lingvaNex';
  version: 1;
  credentials?: LingvaNexV1Credentials;
}

export type LingvaNexV1ParamsNode = LingvaNexV1NodeBase & {
  config: NodeConfig<LingvaNexV1Params>;
};

export type LingvaNexV1Node = LingvaNexV1ParamsNode;