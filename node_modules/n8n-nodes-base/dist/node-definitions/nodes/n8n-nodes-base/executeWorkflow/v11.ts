/**
 * Execute Sub-workflow Node - Version 1.1
 * Execute another workflow
 */


export interface ExecuteWorkflowV11Params {
  operation?: unknown;
/**
 * Where to get the workflow to execute from
 * @default database
 */
    source?: 'database' | 'localFile' | 'parameter' | 'url' | Expression<string>;
/**
 * Workflow
 * @displayOptions.show { source: ["database"] }
 */
    workflowId?: unknown;
/**
 * The path to local JSON workflow file to execute
 * @displayOptions.show { source: ["localFile"] }
 */
    workflowPath?: string | Expression<string> | PlaceholderValue;
/**
 * The workflow JSON code to execute
 * @displayOptions.show { source: ["parameter"] }
 */
    workflowJson?: IDataObject | string | Expression<string>;
/**
 * The URL from which to load the workflow from
 * @displayOptions.show { source: ["url"] }
 */
    workflowUrl?: string | Expression<string> | PlaceholderValue;
  mode?: 'once' | 'each';
  options?: {
    /** Whether the main workflow should wait for the sub-workflow to complete its execution before proceeding
     * @default true
     */
    waitForSubWorkflow?: boolean | Expression<boolean>;
  };
}

interface ExecuteWorkflowV11NodeBase {
  type: 'n8n-nodes-base.executeWorkflow';
  version: 1.1;
}

export type ExecuteWorkflowV11ParamsNode = ExecuteWorkflowV11NodeBase & {
  config: NodeConfig<ExecuteWorkflowV11Params>;
};

export type ExecuteWorkflowV11Node = ExecuteWorkflowV11ParamsNode;