/**
 * Wise Node - Version 1
 * Discriminator: resource=profile, operation=get
 */


interface Credentials {
  wiseApi: CredentialReference;
}

export type WiseV1ProfileGetParams = {
  resource: 'profile';
  operation: 'get';
/**
 * ID of the user profile to retrieve. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    profileId?: string | Expression<string>;
};

export type WiseV1ProfileGetNode = {
  type: 'n8n-nodes-base.wise';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WiseV1ProfileGetParams>;
};