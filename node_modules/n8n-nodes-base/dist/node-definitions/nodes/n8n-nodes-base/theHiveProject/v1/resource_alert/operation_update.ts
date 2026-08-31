/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=alert, operation=update
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1AlertUpdateParams = {
  resource: 'alert';
  operation: 'update';
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    alertUpdateFields?: unknown;
};

export type TheHiveProjectV1AlertUpdateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1AlertUpdateParams>;
};