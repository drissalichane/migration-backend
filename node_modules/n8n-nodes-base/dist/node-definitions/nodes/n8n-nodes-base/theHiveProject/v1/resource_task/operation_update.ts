/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=task, operation=update
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1TaskUpdateParams = {
  resource: 'task';
  operation: 'update';
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    taskUpdateFields?: unknown;
};

export type TheHiveProjectV1TaskUpdateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1TaskUpdateParams>;
};