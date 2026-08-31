/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=ticket, operation=create
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Create new customer */
export type SyncroMspV1TicketCreateParams = {
  resource: 'ticket';
  operation: 'create';
/**
 * Customer ID
 */
    customerId?: string | Expression<string> | PlaceholderValue;
/**
 * Subject
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Asset ID
     */
    assetId?: string | Expression<string> | PlaceholderValue;
    /** The ID of the contact you want to assign the ticket to
     */
    contactId?: string | Expression<string> | PlaceholderValue;
    /** Issue Type
     */
    issueType?: 'Contract Work' | 'Network Project' | 'Other' | 'Regular Maintenance' | 'Remote Support' | Expression<string>;
    /** If used along the parameter Search Query, only Search Query will be applied
     * @default New
     */
    status?: 'Customer Reply' | 'In Progress' | 'New' | 'Resolved' | 'Scheduled' | 'Waiting for Parts' | 'Waiting on Customer' | Expression<string>;
  };
};

export type SyncroMspV1TicketCreateNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1TicketCreateParams>;
};