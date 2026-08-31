/**
 * Airtop Node - Version 1.1
 * Discriminator: resource=window, operation=close
 */


interface Credentials {
  airtopApi: CredentialReference;
}

/** Close a window inside a session */
export type AirtopV11WindowCloseParams = {
  resource: 'window';
  operation: 'close';
/**
 * The ID of the &lt;a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank"&gt;Session&lt;/a&gt; to use
 * @default ={{ $json["sessionId"] }}
 */
    sessionId?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the &lt;a href="https://docs.airtop.ai/guides/how-to/creating-a-session#windows" target="_blank"&gt;Window&lt;/a&gt; to use
 * @default ={{ $json["windowId"] }}
 */
    windowId?: string | Expression<string> | PlaceholderValue;
};

export type AirtopV11WindowCloseNode = {
  type: 'n8n-nodes-base.airtop';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<AirtopV11WindowCloseParams>;
};