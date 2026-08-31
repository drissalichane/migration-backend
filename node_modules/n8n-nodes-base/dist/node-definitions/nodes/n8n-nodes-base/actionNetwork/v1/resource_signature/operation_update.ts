/**
 * Action Network Node - Version 1
 * Discriminator: resource=signature, operation=update
 */


interface Credentials {
  actionNetworkApi: CredentialReference;
}

export type ActionNetworkV1SignatureUpdateParams = {
  resource: 'signature';
  operation: 'update';
/**
 * ID of the petition whose signature to update
 */
    petitionId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the signature to update
 */
    signatureId?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Comments to leave when signing this petition
     */
    comments?: string | Expression<string> | PlaceholderValue;
  };
};

export type ActionNetworkV1SignatureUpdateNode = {
  type: 'n8n-nodes-base.actionNetwork';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActionNetworkV1SignatureUpdateParams>;
};