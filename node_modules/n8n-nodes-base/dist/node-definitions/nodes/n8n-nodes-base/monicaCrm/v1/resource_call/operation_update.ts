/**
 * Monica CRM Node - Version 1
 * Discriminator: resource=call, operation=update
 */


interface Credentials {
  monicaCrmApi: CredentialReference;
}

/** Update an activity */
export type MonicaCrmV1CallUpdateParams = {
  resource: 'call';
  operation: 'update';
/**
 * ID of the call to update
 */
    callId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Date when the call happened
     */
    calledAt?: string | Expression<string>;
    /** ID of the contact to associate the call with
     */
    contactId?: string | Expression<string> | PlaceholderValue;
    /** Description of the call - max 100,000 characters
     */
    content?: string | Expression<string> | PlaceholderValue;
  };
};

export type MonicaCrmV1CallUpdateNode = {
  type: 'n8n-nodes-base.monicaCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MonicaCrmV1CallUpdateParams>;
};