/**
 * Airtop Node - Version 1.1
 * Discriminator: resource=session, operation=save
 */


interface Credentials {
  airtopApi: CredentialReference;
}

/** Save in a profile changes made in your browsing session such as cookies and local storage */
export type AirtopV11SessionSaveParams = {
  resource: 'session';
  operation: 'save';
/**
 * The ID of the &lt;a href="https://docs.airtop.ai/guides/how-to/creating-a-session" target="_blank"&gt;Session&lt;/a&gt; to use
 * @default ={{ $json["sessionId"] }}
 */
    sessionId?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the &lt;a href="https://docs.airtop.ai/guides/how-to/saving-a-profile" target="_blank"&gt;Profile&lt;/a&gt; to save
 * @hint Name of the profile you want to save. Must consist only of alphanumeric characters and hyphens "-"
 */
    profileName?: string | Expression<string> | PlaceholderValue;
};

export type AirtopV11SessionSaveNode = {
  type: 'n8n-nodes-base.airtop';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<AirtopV11SessionSaveParams>;
};