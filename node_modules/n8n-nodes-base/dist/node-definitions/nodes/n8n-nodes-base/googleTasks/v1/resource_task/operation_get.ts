/**
 * Google Tasks Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  googleTasksOAuth2Api: CredentialReference;
}

/** Retrieve a task */
export type GoogleTasksV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    task?: string | Expression<string>;
/**
 * Task ID
 */
    taskId?: string | Expression<string> | PlaceholderValue;
};

export type GoogleTasksV1TaskGetOutput = {
  etag?: string;
  id?: string;
  kind?: string;
  links?: Array<{
    description?: string;
    link?: string;
    type?: string;
  }>;
  position?: string;
  selfLink?: string;
  status?: string;
  title?: string;
  updated?: string;
  webViewLink?: string;
};

export type GoogleTasksV1TaskGetNode = {
  type: 'n8n-nodes-base.googleTasks';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleTasksV1TaskGetParams>;
  output?: Items<GoogleTasksV1TaskGetOutput>;
};