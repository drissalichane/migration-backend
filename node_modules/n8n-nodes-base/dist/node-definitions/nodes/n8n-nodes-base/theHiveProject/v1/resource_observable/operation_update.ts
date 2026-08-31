/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=observable, operation=update
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1ObservableUpdateParams = {
  resource: 'observable';
  operation: 'update';
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    observableUpdateFields?: unknown;
};

export type TheHiveProjectV1ObservableUpdateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1ObservableUpdateParams>;
};