/**
 * Notion Node - Version 2.1
 * Discriminator: resource=block, operation=getAll
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get many child blocks */
export type NotionV21BlockGetAllParams = {
  resource: 'block';
  operation: 'getAll';
/**
 * The Notion Block to get all children from
 * @default {"mode":"url","value":""}
 */
    blockId?: { __rl: true; mode: 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Also Fetch Nested Blocks
 * @default false
 */
    fetchNestedBlocks?: boolean | Expression<boolean>;
/**
 * Simplify Output
 * @default true
 */
    simplifyOutput?: boolean | Expression<boolean>;
};

export type NotionV21BlockGetAllOutput = {
  archived?: boolean;
  content?: string;
  has_children?: boolean;
  id?: string;
  in_trash?: boolean;
  last_edited_by?: {
    id?: string;
    object?: string;
  };
  object?: string;
  parent?: {
    page_id?: string;
    type?: string;
  };
  parent_id?: string;
  root_id?: string;
  type?: string;
};

export type NotionV21BlockGetAllNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.1;
  credentials?: Credentials;
  config: NodeConfig<NotionV21BlockGetAllParams>;
  output?: Items<NotionV21BlockGetAllOutput>;
};