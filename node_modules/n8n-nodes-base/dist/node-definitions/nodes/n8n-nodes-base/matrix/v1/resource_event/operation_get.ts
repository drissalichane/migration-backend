/**
 * Matrix Node - Version 1
 * Discriminator: resource=event, operation=get
 */


interface Credentials {
  matrixApi: CredentialReference;
}

/** Get single event by ID */
export type MatrixV1EventGetParams = {
  resource: 'event';
  operation: 'get';
/**
 * The room related to the event
 */
    roomId?: string | Expression<string> | PlaceholderValue;
/**
 * The room related to the event
 */
    eventId?: string | Expression<string> | PlaceholderValue;
};

export type MatrixV1EventGetNode = {
  type: 'n8n-nodes-base.matrix';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MatrixV1EventGetParams>;
};