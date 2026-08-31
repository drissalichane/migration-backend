/**
 * Execute Sub-workflow Node - Version 1.3
 * Execute another workflow
 */


export interface ExecuteWorkflowV13Params {
  operation?: unknown;
/**
 * Where to get the workflow to execute from
 * @default database
 */
    source?: 'database' | 'parameter' | Expression<string>;
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
/**
 * Workflow Inputs
 * @displayOptions.show { source: ["database"] }
 * @displayOptions.hide { workflowId: [""] }
 * @default {"mappingMode":"defineBelow","value":null}
 */
    workflowInputs?: string;
  mode?: 'once' | 'each';
  options?: {
    /** Whether the main workflow should wait for the sub-workflow to complete its execution before proceeding
     * @default true
     */
    waitForSubWorkflow?: boolean | Expression<boolean>;
  };
}

interface ExecuteWorkflowV13NodeBase {
  type: 'n8n-nodes-base.executeWorkflow';
  version: 1.3;
}

export type ExecuteWorkflowV13ParamsNode = ExecuteWorkflowV13NodeBase & {
  config: NodeConfig<ExecuteWorkflowV13Params>;
};

export type ExecuteWorkflowV13Node = ExecuteWorkflowV13ParamsNode;