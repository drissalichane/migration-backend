/**
 * MISP Node - Version 1
 * Discriminator: resource=attribute, operation=create
 */


interface Credentials {
  mispApi: CredentialReference;
}

export type MispV1AttributeCreateParams = {
  resource: 'attribute';
  operation: 'create';
/**
 * UUID of the event to attach the attribute to
 */
    eventId?: string | Expression<string> | PlaceholderValue;
/**
 * Type
 * @default text
 */
    type?: 'text' | 'url' | 'comment' | Expression<string>;
/**
 * Value
 */
    value?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Who will be able to see this event once published
     * @default 0
     */
    distribution?: 3 | 2 | 5 | 4 | 1 | 0 | Expression<number>;
    /** Use only for when &lt;code&gt;Sharing Group&lt;/code&gt; is selected in &lt;code&gt;Distribution&lt;/code&gt;. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    sharing_group_id?: string | Expression<string>;
  };
};

export type MispV1AttributeCreateNode = {
  type: 'n8n-nodes-base.misp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MispV1AttributeCreateParams>;
};