/**
 * Execute Sub-workflow Node - Version 1.2
 * Execute another workflow
 */


export interface ExecuteWorkflowV12Params {
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

interface ExecuteWorkflowV12NodeBase {
  type: 'n8n-nodes-base.executeWorkflow';
  version: 1.2;
}

export type ExecuteWorkflowV12ParamsNode = ExecuteWorkflowV12NodeBase & {
  config: NodeConfig<ExecuteWorkflowV12Params>;
};

export type ExecuteWorkflowV12Node = ExecuteWorkflowV12ParamsNode;