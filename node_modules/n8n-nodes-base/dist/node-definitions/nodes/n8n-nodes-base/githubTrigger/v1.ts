/**
 * Github Trigger Node - Version 1
 * Starts the workflow when Github events occur
 */


export interface GithubTriggerV1Params {
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
  owner?: { __rl: true; mode: 'list' | 'url' | 'name'; value: string; cachedResultName?: string };
  repository?: { __rl: true; mode: 'list' | 'url' | 'name'; value: string; cachedResultName?: string };
/**
 * The events to listen to
 * @default []
 */
    events?: Array<'*' | 'check_run' | 'check_suite' | 'commit_comment' | 'create' | 'delete' | 'deploy_key' | 'deployment' | 'deployment_status' | 'fork' | 'github_app_authorization' | 'gollum' | 'installation' | 'installation_repositories' | 'issue_comment' | 'issues' | 'label' | 'marketplace_purchase' | 'member' | 'membership' | 'meta' | 'milestone' | 'org_block' | 'organization' | 'page_build' | 'project' | 'project_card' | 'project_column' | 'public' | 'pull_request' | 'pull_request_review' | 'pull_request_review_comment' | 'push' | 'release' | 'repository' | 'repository_import' | 'repository_vulnerability_alert' | 'security_advisory' | 'star' | 'status' | 'team' | 'team_add' | 'watch'>;
  options?: {
    /** Whether the SSL certificate of the n8n host be verified by GitHub when delivering payloads
     * @default false
     */
    insecureSSL?: boolean | Expression<boolean>;
  };
}

export interface GithubTriggerV1Credentials {
  githubApi: CredentialReference;
  githubOAuth2Api: CredentialReference;
}

interface GithubTriggerV1NodeBase {
  type: 'n8n-nodes-base.githubTrigger';
  version: 1;
  credentials?: GithubTriggerV1Credentials;
  isTrigger: true;
}

export type GithubTriggerV1ParamsNode = GithubTriggerV1NodeBase & {
  config: NodeConfig<GithubTriggerV1Params>;
};

export type GithubTriggerV1Node = GithubTriggerV1ParamsNode;