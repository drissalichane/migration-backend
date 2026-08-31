/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=caseComment, operation=remove
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Remove a comment from a case */
export type ElasticSecurityV1CaseCommentRemoveParams = {
  resource: 'caseComment';
  operation: 'remove';
/**
 * ID of the case containing the comment to remove
 */
    caseId?: string | Expression<string> | PlaceholderValue;
/**
 * Comment ID
 */
    commentId?: string | Expression<string> | PlaceholderValue;
};

export type ElasticSecurityV1CaseCommentRemoveNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseCommentRemoveParams>;
};