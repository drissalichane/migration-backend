/**
 * TheHive 5 Node - Version 1
 * Discriminator: resource=alert, operation=search
 */


interface Credentials {
  theHiveProjectApi: CredentialReference;
}

export type TheHiveProjectV1AlertSearchParams = {
  resource: 'alert';
  operation: 'search';
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
/**
 * Filters
 * @default {}
 */
    filters?: {
        /** Values
     */
    values?: Array<{
      /** Dot notation is also supported, e.g. customFields.field1
       */
      field?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      field?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { /resource: ["case"] }
       */
      field?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { /resource: ["task"] }
       */
      field?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { /resource: ["observable"] }
       */
      field?: string | Expression<string>;
      /** Field
       * @displayOptions.show { /resource: ["log"] }
       */
      field?: 'message' | 'date' | Expression<string>;
      /** Field
       * @displayOptions.show { /resource: ["comment"] }
       */
      field?: 'message' | Expression<string>;
      /** Field
       * @displayOptions.show { /resource: ["page"] }
       */
      field?: 'category' | 'content' | 'title' | Expression<string>;
      /** Operator
       * @default _eq
       */
      operator?: '_between' | '_like' | '_endsWith' | '_eq' | '_gt' | '_gte' | '_in' | '_lt' | '_lte' | '_match' | '_ne' | '_startsWith' | Expression<string>;
      /** Value
       * @displayOptions.hide { operator: ["_between", "_in"] }
       */
      value?: string | Expression<string> | PlaceholderValue;
      /** Comma-separated list of values
       * @displayOptions.show { operator: ["_in"] }
       */
      values?: string | Expression<string> | PlaceholderValue;
      /** From
       * @displayOptions.show { operator: ["_between"] }
       */
      from?: string | Expression<string> | PlaceholderValue;
      /** To
       * @displayOptions.show { operator: ["_between"] }
       */
      to?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Sort
 * @default {}
 */
    sort?: {
        /** Fields
     */
    fields?: Array<{
      /** Dot notation is also supported, e.g. customFields.field1
       */
      field?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      field?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { /resource: ["case"] }
       */
      field?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { /resource: ["task"] }
       */
      field?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { /resource: ["observable"] }
       */
      field?: string | Expression<string>;
      /** Field
       * @displayOptions.show { /resource: ["log"] }
       */
      field?: 'message' | 'date' | Expression<string>;
      /** Field
       * @displayOptions.show { /resource: ["comment"] }
       */
      field?: 'message' | Expression<string>;
      /** Field
       * @displayOptions.show { /resource: ["page"] }
       */
      field?: 'category' | 'content' | 'title' | Expression<string>;
      /** Direction
       * @default asc
       */
      direction?: 'asc' | 'desc' | Expression<string>;
    }>;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to return only the count of results
     * @displayOptions.hide { /returnAll: [false] }
     * @default false
     */
    returnCount?: boolean | Expression<boolean>;
    /** Additional data to include in the response
     * @displayOptions.show { /resource: ["observable"] }
     * @displayOptions.hide { returnCount: [true] }
     * @default []
     */
    extraData?: Array<'isOwner' | 'links' | 'permissions' | 'seen' | 'shareCount' | 'shares'>;
    /** Additional data to include in the response
     * @displayOptions.show { /resource: ["task"] }
     * @displayOptions.hide { returnCount: [true] }
     * @default []
     */
    extraData?: Array<'actionRequired' | 'actionRequiredMap' | 'case' | 'caseId' | 'caseTemplate' | 'caseTemplateId' | 'shareCount'>;
    /** Additional data to include in the response
     * @displayOptions.hide { returnCount: [true] }
     * @default []
     */
    extraData?: Array<'caseNumber' | 'importDate' | 'procedureCount' | 'status'>;
    /** Additional data to include in the response
     * @displayOptions.show { /resource: ["case"] }
     * @displayOptions.hide { returnCount: [true] }
     * @default []
     */
    extraData?: Array<'actionRequired' | 'alertCount' | 'alerts' | 'attachmentCount' | 'contributors' | 'computed.handlingDuration' | 'computed.handlingDurationInDays' | 'computed.handlingDurationInHours' | 'computed.handlingDurationInMinutes' | 'computed.handlingDurationInSeconds' | 'isOwner' | 'observableStats' | 'permissions' | 'procedureCount' | 'shareCount' | 'similarAlerts' | 'status' | 'taskStats'>;
    /** Additional data to include in the response
     * @displayOptions.show { /resource: ["comment"] }
     * @displayOptions.hide { returnCount: [true] }
     * @default []
     */
    extraData?: Array<'links'>;
    /** Additional data to include in the response
     * @displayOptions.show { /resource: ["log"] }
     * @displayOptions.hide { returnCount: [true] }
     * @default []
     */
    extraData?: Array<'actionCount' | 'case' | 'task' | 'taskId'>;
    /** Additional data to include in the response
     * @displayOptions.show { /resource: ["query"] }
     * @displayOptions.hide { returnCount: [true] }
     */
    extraData?: string | Expression<string> | PlaceholderValue;
  };
};

export type TheHiveProjectV1AlertSearchNode = {
  type: 'n8n-nodes-base.theHiveProject';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<TheHiveProjectV1AlertSearchParams>;
};