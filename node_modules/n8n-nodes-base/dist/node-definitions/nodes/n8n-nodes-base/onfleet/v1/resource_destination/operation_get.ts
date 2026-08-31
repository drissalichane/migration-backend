/**
 * Onfleet Node - Version 1
 * Discriminator: resource=destination, operation=get
 */


interface Credentials {
  onfleetApi: CredentialReference;
}

/** Get container information */
export type OnfleetV1DestinationGetParams = {
  resource: 'destination';
  operation: 'get';
/**
 * The ID of the destination object for lookup
 * @displayOptions.hide { operation: ["create"] }
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type OnfleetV1DestinationGetNode = {
  type: 'n8n-nodes-base.onfleet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<OnfleetV1DestinationGetParams>;
};