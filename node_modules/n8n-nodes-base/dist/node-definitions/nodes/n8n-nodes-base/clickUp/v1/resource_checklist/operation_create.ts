/**
 * ClickUp Node - Version 1
 * Discriminator: resource=checklist, operation=create
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Create a checklist */
export type ClickUpV1ChecklistCreateParams = {
  resource: 'checklist';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    task?: string | Expression<string> | PlaceholderValue;
/**
 * Name
 */
    name?: string | Expression<string> | PlaceholderValue;
};

export type ClickUpV1ChecklistCreateOutput = {
  id?: string;
  name?: string;
  orderindex?: number;
  resolved?: number;
  task_id?: string;
  unresolved?: number;
};

export type ClickUpV1ChecklistCreateNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1ChecklistCreateParams>;
  output?: Items<ClickUpV1ChecklistCreateOutput>;
};