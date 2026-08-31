/**
 * Git Node - Version 1
 * Control git.
 */


export interface GitV1Params {
/**
 * The way to authenticate
 * @displayOptions.show { operation: ["clone", "push"] }
 * @default none
 */
    authentication?: 'gitPassword' | 'none' | Expression<string>;
  operation?: 'add' | 'addConfig' | 'clone' | 'commit' | 'fetch' | 'listConfig' | 'log' | 'pull' | 'push' | 'pushTags' | 'reflog' | 'status' | 'switchBranch' | 'tag' | 'userSetup';
/**
 * Local path of the git repository to operate on
 * @displayOptions.hide { operation: ["clone"] }
 */
    repositoryPath?: string | Expression<string> | PlaceholderValue;
/**
 * Comma-separated list of paths (absolute or relative to Repository Path) of files or folders to add
 * @displayOptions.show { operation: ["add"] }
 */
    pathsToAdd?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the key to set
 * @displayOptions.show { operation: ["addConfig"] }
 */
    key?: string | Expression<string> | PlaceholderValue;
/**
 * Value of the key to set
 * @displayOptions.show { operation: ["addConfig"] }
 */
    value?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @displayOptions.show { operation: ["addConfig"] }
 * @default {}
 */
    options?: {
    /** Append setting rather than set it in the local config
     * @default set
     */
    mode?: 'append' | 'set' | Expression<string>;
    /** The branch to switch to before committing. If empty or not set, will commit to current branch.
     */
    branch?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated list of paths (absolute or relative to Repository Path) of files or folders to commit. If not set will all "added" files and folders be committed.
     */
    pathsToAdd?: string | Expression<string> | PlaceholderValue;
    /** The path (absolute or relative to Repository Path) of file or folder to get the history of
     * @default README.md
     */
    file?: string | Expression<string> | PlaceholderValue;
    /** The URL or path of the repository to push to
     */
    targetRepository?: string | Expression<string> | PlaceholderValue;
    /** The reference to show the reflog for (e.g., HEAD, branch name). Leave empty for HEAD.
     */
    reference?: string | Expression<string> | PlaceholderValue;
    /** Whether to create the branch if it does not exist
     * @default true
     */
    createBranch?: boolean | Expression<boolean>;
    /** The commit/branch/tag to create the new branch from. If not set, creates from current HEAD.
     * @displayOptions.show { createBranch: [true] }
     */
    startPoint?: string | Expression<string> | PlaceholderValue;
    /** Whether to force the branch switch, discarding any local changes
     * @default false
     */
    force?: boolean | Expression<boolean>;
    /** Whether to set up tracking to a remote branch when creating a new branch
     * @displayOptions.show { createBranch: [true] }
     * @default false
     */
    setUpstream?: boolean | Expression<boolean>;
    /** The name of the remote to track
     * @displayOptions.show { createBranch: [true], setUpstream: [true] }
     * @default origin
     */
    remoteName?: string | Expression<string> | PlaceholderValue;
  };
/**
 * The URL or path of the repository to clone
 * @displayOptions.show { operation: ["clone"] }
 */
    sourceRepository?: string | Expression<string> | PlaceholderValue;
/**
 * The commit message to use
 * @displayOptions.show { operation: ["commit"] }
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @displayOptions.show { operation: ["log"] }
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { operation: ["log"], returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * The name of the branch to switch to
 * @displayOptions.show { operation: ["switchBranch"] }
 */
    branchName?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the tag to create
 * @displayOptions.show { operation: ["tag"] }
 */
    name?: string | Expression<string> | PlaceholderValue;
}

export interface GitV1Credentials {
  gitPassword: CredentialReference;
}

interface GitV1NodeBase {
  type: 'n8n-nodes-base.git';
  version: 1;
  credentials?: GitV1Credentials;
}

export type GitV1ParamsNode = GitV1NodeBase & {
  config: NodeConfig<GitV1Params>;
};

export type GitV1Node = GitV1ParamsNode;