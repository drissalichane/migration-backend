/**
 * Monday.com Node - Version 1
 * Discriminator: resource=boardItem, operation=changeMultipleColumnValues
 */


interface Credentials {
  mondayComApi: CredentialReference;
  mondayComOAuth2Api: CredentialReference;
}

/** Change multiple column values for a board item */
export type MondayComV1BoardItemChangeMultipleColumnValuesParams = {
  resource: 'boardItem';
  operation: 'changeMultipleColumnValues';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * The unique identifier of the board. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * Item's ID
 */
    itemId?: string | Expression<string> | PlaceholderValue;
/**
 * The column fields and values in JSON format. Documentation can be found &lt;a href="https://monday.com/developers/v2#mutations-section-columns-change-multiple-column-values"&gt;here&lt;/a&gt;.
 */
    columnValues?: IDataObject | string | Expression<string>;
};

export type MondayComV1BoardItemChangeMultipleColumnValuesOutput = {
  id?: string;
};

export type MondayComV1BoardItemChangeMultipleColumnValuesNode = {
  type: 'n8n-nodes-base.mondayCom';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MondayComV1BoardItemChangeMultipleColumnValuesParams>;
  output?: Items<MondayComV1BoardItemChangeMultipleColumnValuesOutput>;
};