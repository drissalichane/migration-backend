/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=caseTag, operation=add
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Add a comment to a case */
export type ElasticSecurityV1CaseTagAddParams = {
  resource: 'caseTag';
  operation: 'add';
/**
 * Case ID
 */
    caseId?: string | Expression<string> | PlaceholderValue;
/**
 * Tag to attach to the case. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    tag?: string | Expression<string>;
};

export type ElasticSecurityV1CaseTagAddNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseTagAddParams>;
};