/**
 * Microsoft To Do Node - Version 1
 * Discriminator: resource=task, operation=getAll
 */


interface Credentials {
  microsoftToDoOAuth2Api: CredentialReference;
}

export type MicrosoftToDoV1TaskGetAllParams = {
  resource: 'task';
  operation: 'getAll';
/**
 * The identifier of the list, unique in the user's mailbox. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    taskListId?: string | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
};

export type MicrosoftToDoV1TaskGetAllOutput = {
  '@odata.etag'?: string;
  body?: {
    content?: string;
    contentType?: string;
  };
  categories?: Array<string>;
  createdDateTime?: string;
  dueDateTime?: {
    dateTime?: string;
    timeZone?: string;
  };
  hasAttachments?: boolean;
  id?: string;
  importance?: string;
  isReminderOn?: boolean;
  lastModifiedDateTime?: string;
  status?: string;
  title?: string;
};

export type MicrosoftToDoV1TaskGetAllNode = {
  type: 'n8n-nodes-base.microsoftToDo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftToDoV1TaskGetAllParams>;
  output?: Items<MicrosoftToDoV1TaskGetAllOutput>;
};