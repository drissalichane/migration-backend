/**
 * Wekan Node - Version 1
 * Discriminator: resource=card, operation=getAll
 */


interface Credentials {
  wekanApi: CredentialReference;
}

/** Get many user boards */
export type WekanV1CardGetAllParams = {
  resource: 'card';
  operation: 'getAll';
/**
 * The ID of the board that list belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    boardId?: string | Expression<string>;
/**
 * From Object
 */
    fromObject?: 'list' | 'swimlane' | Expression<string>;
/**
 * The ID of the list that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { fromObject: ["list"] }
 */
    listId?: string | Expression<string>;
/**
 * The ID of the swimlane that card belongs to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { fromObject: ["swimlane"] }
 */
    swimlaneId?: string | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
};

export type WekanV1CardGetAllNode = {
  type: 'n8n-nodes-base.wekan';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<WekanV1CardGetAllParams>;
};