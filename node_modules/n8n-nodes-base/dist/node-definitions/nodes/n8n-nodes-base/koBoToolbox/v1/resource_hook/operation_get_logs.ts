/**
 * KoBoToolbox Node - Version 1
 * Discriminator: resource=hook, operation=getLogs
 */


interface Credentials {
  koBoToolboxApi: CredentialReference;
}

/** Get hook logs */
export type KoBoToolboxV1HookGetLogsParams = {
  resource: 'hook';
  operation: 'getLogs';
/**
 * Form ID (e.g. aSAvYreNzVEkrWg5Gdcvg). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    formId?: string | Expression<string>;
/**
 * Hook ID (starts with h, e.g. hVehywQ2oXPYGHJHKtqth4)
 */
    hookId?: string | Expression<string> | PlaceholderValue;
/**
 * Only retrieve logs with a specific status
 */
    status?: '' | '0' | '1' | '2' | Expression<string>;
/**
 * Minimum date for the hook log to retrieve
 */
    startDate?: string | Expression<string>;
/**
 * Maximum date for the hook log to retrieve
 */
    endDate?: string | Expression<string>;
};

export type KoBoToolboxV1HookGetLogsNode = {
  type: 'n8n-nodes-base.koBoToolbox';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<KoBoToolboxV1HookGetLogsParams>;
};