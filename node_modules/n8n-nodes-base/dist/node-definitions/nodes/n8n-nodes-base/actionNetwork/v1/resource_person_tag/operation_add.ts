/**
 * Action Network Node - Version 1
 * Discriminator: resource=personTag, operation=add
 */


interface Credentials {
  actionNetworkApi: CredentialReference;
}

export type ActionNetworkV1PersonTagAddParams = {
  resource: 'personTag';
  operation: 'add';
/**
 * ID of the tag to add. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    tagId?: string | Expression<string>;
/**
 * ID of the person to add the tag to
 */
    personId?: string | Expression<string> | PlaceholderValue;
};

export type ActionNetworkV1PersonTagAddNode = {
  type: 'n8n-nodes-base.actionNetwork';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActionNetworkV1PersonTagAddParams>;
};