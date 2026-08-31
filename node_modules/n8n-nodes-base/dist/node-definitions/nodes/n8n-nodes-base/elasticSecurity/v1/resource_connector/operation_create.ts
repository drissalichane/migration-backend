/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=connector, operation=create
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Create a case */
export type ElasticSecurityV1ConnectorCreateParams = {
  resource: 'connector';
  operation: 'create';
/**
 * Connectors allow you to send Elastic Security cases into other systems (only ServiceNow, Jira, or IBM Resilient)
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Connector Type
 * @default .jira
 */
    connectorType?: '.resilient' | '.jira' | '.servicenow' | Expression<string>;
/**
 * URL of the third-party instance
 */
    apiUrl?: string | Expression<string> | PlaceholderValue;
/**
 * Jira-registered email
 * @displayOptions.show { connectorType: [".jira"] }
 */
    email?: string | Expression<string> | PlaceholderValue;
/**
 * Jira API token
 * @displayOptions.show { connectorType: [".jira"] }
 */
    apiToken?: string | Expression<string> | PlaceholderValue;
/**
 * Jira Project Key
 * @displayOptions.show { connectorType: [".jira"] }
 */
    projectKey?: string | Expression<string> | PlaceholderValue;
/**
 * ServiceNow ITSM username
 * @displayOptions.show { connectorType: [".servicenow"] }
 */
    username?: string | Expression<string> | PlaceholderValue;
/**
 * ServiceNow ITSM password
 * @displayOptions.show { connectorType: [".servicenow"] }
 */
    password?: string | Expression<string> | PlaceholderValue;
/**
 * IBM Resilient API key ID
 * @displayOptions.show { connectorType: [".resilient"] }
 */
    apiKeyId?: string | Expression<string> | PlaceholderValue;
/**
 * IBM Resilient API key secret
 * @displayOptions.show { connectorType: [".resilient"] }
 */
    apiKeySecret?: string | Expression<string> | PlaceholderValue;
/**
 * IBM Resilient organization ID
 * @displayOptions.show { connectorType: [".resilient"] }
 */
    orgId?: string | Expression<string> | PlaceholderValue;
};

export type ElasticSecurityV1ConnectorCreateNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1ConnectorCreateParams>;
};