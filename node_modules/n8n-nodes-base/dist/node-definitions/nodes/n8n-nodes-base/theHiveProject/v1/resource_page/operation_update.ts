/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=page, operation=update
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1PageUpdateParams = {
  resource: 'page';
  operation: 'update';
/**
 * Update in
 * @default case
 */
    location?: 'case' | 'knowledgeBase' | Expression<string>;
/**
 * Case
 * @displayOptions.show { location: ["case"] }
 * @default {"mode":"list","value":""}
 */
    caseId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Page
 * @default {"mode":"list","value":""}
 */
    pageId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Content
 */
    content?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Category
     */
    category?: string | Expression<string> | PlaceholderValue;
    /** Title
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Order
     * @default 0
     */
    order?: number | Expression<number>;
  };
};

export type TheHiveProjectV1PageUpdateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1PageUpdateParams>;
};