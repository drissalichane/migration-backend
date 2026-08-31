/**
 * Airtop Node - Version 1.1
 * Discriminator: resource=session, operation=terminate
 */


interface Credentials {
  airtopApi: CredentialReference;
}

/** Terminate a session */
export type AirtopV11SessionTerminateParams = {
  resource: 'session';
  operation: 'terminate';
/**
 * The ID of the &lt;a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank"&gt;Session&lt;/a&gt; to use
 * @default ={{ $json["sessionId"] }}
 */
    sessionId?: string | Expression<string> | PlaceholderValue;
};

export type AirtopV11SessionTerminateOutput = {
  success?: boolean;
};

export type AirtopV11SessionTerminateNode = {
  type: 'n8n-nodes-base.airtop';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<AirtopV11SessionTerminateParams>;
  output?: Items<AirtopV11SessionTerminateOutput>;
};