/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=case, operation=create
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Create a case */
export type ElasticSecurityV1CaseCreateParams = {
  resource: 'case';
  operation: 'create';
/**
 * Title
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Connectors allow you to send Elastic Security cases into other systems (only ServiceNow, Jira, or IBM Resilient). Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    connectorId?: string | Expression<string>;
/**
 * Connector Type
 * @default .jira
 */
    connectorType?: '.resilient' | '.jira' | '.servicenow' | Expression<string>;
/**
 * Type of the Jira issue to create for this case
 * @displayOptions.show { connectorType: [".jira"] }
 */
    issueType?: string | Expression<string> | PlaceholderValue;
/**
 * Priority of the Jira issue to create for this case
 * @displayOptions.show { connectorType: [".jira"] }
 */
    priority?: string | Expression<string> | PlaceholderValue;
/**
 * Urgency of the ServiceNow ITSM issue to create for this case
 * @displayOptions.show { connectorType: [".servicenow"] }
 * @default 1
 */
    urgency?: 1 | 2 | 3 | Expression<number>;
/**
 * Severity of the ServiceNow ITSM issue to create for this case
 * @displayOptions.show { connectorType: [".servicenow"] }
 * @default 1
 */
    severity?: 1 | 2 | 3 | Expression<number>;
/**
 * Impact of the ServiceNow ITSM issue to create for this case
 * @displayOptions.show { connectorType: [".servicenow"] }
 * @default 1
 */
    impact?: 1 | 2 | 3 | Expression<number>;
/**
 * Category of the ServiceNow ITSM issue to create for this case
 * @displayOptions.show { connectorType: [".servicenow"] }
 */
    category?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of numerical types of the IBM Resilient issue to create for this case
 * @displayOptions.show { connectorType: [".resilient"] }
 */
    issueTypes?: string | Expression<string> | PlaceholderValue;
/**
 * Severity code of the IBM Resilient issue to create for this case
 * @displayOptions.show { connectorType: [".resilient"] }
 * @default 1
 */
    severityCode?: number | Expression<number>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Valid application owner registered within the Cases Role Based Access Control system
     */
    owner?: string | Expression<string> | PlaceholderValue;
    /** Whether to synchronize with alerts
     * @default false
     */
    syncAlerts?: boolean | Expression<boolean>;
  };
};

export type ElasticSecurityV1CaseCreateNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseCreateParams>;
};