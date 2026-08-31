/**
 * ClickUp Node - Version 1
 * Discriminator: resource=spaceTag, operation=update
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Update a checklist */
export type ClickUpV1SpaceTagUpdateParams = {
  resource: 'spaceTag';
  operation: 'update';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Space ID
 */
    space?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    name?: string | Expression<string>;
/**
 * New name to set for the tag
 */
    newName?: string | Expression<string> | PlaceholderValue;
/**
 * Foreground Color
 * @default #000000
 */
    foregroundColor?: string | Expression<string>;
/**
 * Background Color
 * @default #000000
 */
    backgroundColor?: string | Expression<string>;
};

export type ClickUpV1SpaceTagUpdateNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1SpaceTagUpdateParams>;
};