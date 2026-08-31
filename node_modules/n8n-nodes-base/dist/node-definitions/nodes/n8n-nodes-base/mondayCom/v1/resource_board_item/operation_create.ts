/**
 * Monday.com Node - Version 1
 * Discriminator: resource=boardItem, operation=create
 */


interface Credentials {
  mondayComApi: CredentialReference;
  mondayComOAuth2Api: CredentialReference;
}

/** Create a new board */
export type MondayComV1BoardItemCreateParams = {
  resource: 'boardItem';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    boardId?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    groupId?: string | Expression<string>;
/**
 * The new item's name
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** The column values of the new item
     */
    columnValues?: IDataObject | string | Expression<string>;
  };
};

export type MondayComV1BoardItemCreateOutput = {
  id?: string;
};

export type MondayComV1BoardItemCreateNode = {
  type: 'n8n-nodes-base.mondayCom';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MondayComV1BoardItemCreateParams>;
  output?: Items<MondayComV1BoardItemCreateOutput>;
};