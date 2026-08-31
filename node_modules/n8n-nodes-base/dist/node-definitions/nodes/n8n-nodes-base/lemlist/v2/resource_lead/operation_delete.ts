/**
 * Lemlist Node - Version 2
 * Discriminator: resource=lead, operation=delete
 */


interface Credentials {
  lemlistApi: CredentialReference;
}

export type LemlistV2LeadDeleteParams = {
  resource: 'lead';
  operation: 'delete';
/**
 * ID of the campaign to remove the lead from. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @default []
 */
    campaignId?: string | Expression<string>;
/**
 * Email of the lead to delete
 */
    email?: string | Expression<string> | PlaceholderValue;
};

export type LemlistV2LeadDeleteNode = {
  type: 'n8n-nodes-base.lemlist';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<LemlistV2LeadDeleteParams>;
};