/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=caseComment, operation=update
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Update a case */
export type ElasticSecurityV1CaseCommentUpdateParams = {
  resource: 'caseComment';
  operation: 'update';
/**
 * ID of the case containing the comment to retrieve
 */
    caseId?: string | Expression<string> | PlaceholderValue;
/**
 * Comment ID
 */
    commentId?: string | Expression<string> | PlaceholderValue;
/**
 * Text to replace current comment message
 */
    comment?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
};

export type ElasticSecurityV1CaseCommentUpdateNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseCommentUpdateParams>;
};