/**
 * Zammad Node - Version 1
 * Discriminator: resource=group, operation=update
 */


interface Credentials {
  zammadBasicAuthApi: CredentialReference;
  zammadTokenAuthApi: CredentialReference;
}

/** Update a group */
export type ZammadV1GroupUpdateParams = {
  resource: 'group';
  operation: 'update';
  authentication?: 'basicAuth' | 'tokenAuth' | Expression<string>;
/**
 * Group to update. Specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Active
     * @default true
     */
    active?: boolean | Expression<boolean>;
    /** Custom Fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldPairs?: Array<{
      /** Name of the custom field to set. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      name?: string | Expression<string>;
      /** Value to set on the custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Group Name
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Notes
     */
    note?: string | Expression<string> | PlaceholderValue;
  };
};

export type ZammadV1GroupUpdateNode = {
  type: 'n8n-nodes-base.zammad';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZammadV1GroupUpdateParams>;
};