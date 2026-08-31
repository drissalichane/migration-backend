/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=case, operation=update
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1CaseUpdateParams = {
  resource: 'case';
  operation: 'update';
/**
 * Fields
 * @default {"mappingMode":"defineBelow","value":null}
 */
    caseUpdateFields?: unknown;
};

export type TheHiveProjectV1CaseUpdateNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1CaseUpdateParams>;
};