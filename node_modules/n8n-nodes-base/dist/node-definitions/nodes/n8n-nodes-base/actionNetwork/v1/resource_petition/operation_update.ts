/**
 * Action Network Node - Version 1
 * Discriminator: resource=petition, operation=update
 */


interface Credentials {
  actionNetworkApi: CredentialReference;
}

export type ActionNetworkV1PetitionUpdateParams = {
  resource: 'petition';
  operation: 'update';
/**
 * ID of the petition to update
 */
    petitionId?: string | Expression<string> | PlaceholderValue;
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
    /** URL to this petition’s page on the Action Network or a third party
     */
    browser_url?: string | Expression<string> | PlaceholderValue;
    /** URL to this action’s featured image on the Action Network
     */
    featured_image_url?: string | Expression<string> | PlaceholderValue;
    /** Internal (not public) title of the petition
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Text of the letter to the petition’s target
     */
    petition_text?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated names of targets for this petition
     */
    target?: string | Expression<string> | PlaceholderValue;
  };
};

export type ActionNetworkV1PetitionUpdateNode = {
  type: 'n8n-nodes-base.actionNetwork';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ActionNetworkV1PetitionUpdateParams>;
};