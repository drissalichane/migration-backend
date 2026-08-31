/**
 * ClickUp Node - Version 1
 * Discriminator: resource=list, operation=customFields
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Retrieve list's custom fields */
export type ClickUpV1ListCustomFieldsParams = {
  resource: 'list';
  operation: 'customFields';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    team?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    space?: string | Expression<string>;
/**
 * Folderless List
 * @default false
 */
    folderless?: boolean | Expression<boolean>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { folderless: [false] }
 */
    folder?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { folderless: [true] }
 */
    list?: string | Expression<string>;
};

export type ClickUpV1ListCustomFieldsOutput = {
  date_created?: string;
  hide_from_guests?: boolean;
  id?: string;
  name?: string;
  type?: string;
  type_config?: {
    options?: Array<{
      id?: string;
      name?: string;
      orderindex?: number;
    }>;
    sorting?: string;
  };
};

export type ClickUpV1ListCustomFieldsNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1ListCustomFieldsParams>;
  output?: Items<ClickUpV1ListCustomFieldsOutput>;
};