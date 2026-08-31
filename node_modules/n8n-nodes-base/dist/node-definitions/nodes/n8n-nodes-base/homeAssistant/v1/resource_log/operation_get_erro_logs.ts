/**
 * Home Assistant Node - Version 1
 * Discriminator: resource=log, operation=getErroLogs
 */


interface Credentials {
  homeAssistantApi: CredentialReference;
}

/** Get a log for a specific entity */
export type HomeAssistantV1LogGetErroLogsParams = {
  resource: 'log';
  operation: 'getErroLogs';
};

export type HomeAssistantV1LogGetErroLogsNode = {
  type: 'n8n-nodes-base.homeAssistant';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<HomeAssistantV1LogGetErroLogsParams>;
};