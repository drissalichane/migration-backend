/**
 * SyncroMSP Node - Version 1
 * Discriminator: resource=ticket, operation=update
 */


interface Credentials {
  syncroMspApi: CredentialReference;
}

/** Update customer */
export type SyncroMspV1TicketUpdateParams = {
  resource: 'ticket';
  operation: 'update';
/**
 * Ticket ID
 */
    ticketId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Asset ID
     */
    assetId?: string | Expression<string> | PlaceholderValue;
    /** The ID of the contact you want to assign the ticket to
     */
    contactId?: string | Expression<string> | PlaceholderValue;
    /** Customer ID
     */
    customerId?: string | Expression<string> | PlaceholderValue;
    /** Due Date
     */
    dueDate?: string | Expression<string>;
    /** Issue Type
     */
    issueType?: 'Contract Work' | 'Network Project' | 'Other' | 'Regular Maintenance' | 'Remote Support' | Expression<string>;
    /** Status
     * @default New
     */
    status?: 'Customer Reply' | 'In Progress' | 'New' | 'Resolved' | 'Scheduled' | 'Waiting for Parts' | 'Waiting on Customer' | Expression<string>;
    /** Subject
     */
    subject?: string | Expression<string> | PlaceholderValue;
  };
};

export type SyncroMspV1TicketUpdateNode = {
  type: 'n8n-nodes-base.syncroMsp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SyncroMspV1TicketUpdateParams>;
};