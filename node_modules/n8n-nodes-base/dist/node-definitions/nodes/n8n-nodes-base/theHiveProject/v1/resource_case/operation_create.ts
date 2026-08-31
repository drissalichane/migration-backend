/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=case, operation=create
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1CaseCreateParams = {
  resource: 'case';
  operation: 'create';
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    caseFields?: unknown;
};

export type TheHiveProjectV1CaseCreateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1CaseCreateParams>;
};