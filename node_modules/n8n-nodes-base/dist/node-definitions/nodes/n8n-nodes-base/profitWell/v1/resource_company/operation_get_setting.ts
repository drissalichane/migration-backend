/**
 * ProfitWell Node - Version 1
 * Discriminator: resource=company, operation=getSetting
 */


interface Credentials {
  profitWellApi: CredentialReference;
}

/** Get your company's ProfitWell account settings */
export type ProfitWellV1CompanyGetSettingParams = {
  resource: 'company';
  operation: 'getSetting';
};

export type ProfitWellV1CompanyGetSettingNode = {
  type: 'n8n-nodes-base.profitWell';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ProfitWellV1CompanyGetSettingParams>;
};