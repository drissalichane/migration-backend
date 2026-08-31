/**
 * Elastic Security Node - Version 1
 * Discriminator: resource=caseComment, operation=get
 */


interface Credentials {
  elasticSecurityApi: CredentialReference;
}

/** Get a case */
export type ElasticSecurityV1CaseCommentGetParams = {
  resource: 'caseComment';
  operation: 'get';
/**
 * ID of the case containing the comment to retrieve
 */
    caseId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the case comment to retrieve
 */
    commentId?: string | Expression<string> | PlaceholderValue;
};

export type ElasticSecurityV1CaseCommentGetNode = {
  type: 'n8n-nodes-base.elasticSecurity';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ElasticSecurityV1CaseCommentGetParams>;
};