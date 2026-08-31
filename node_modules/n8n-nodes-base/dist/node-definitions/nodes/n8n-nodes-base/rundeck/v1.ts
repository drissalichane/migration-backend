/**
 * Rundeck Node - Version 1
 * Manage Rundeck API
 */


export interface RundeckV1Params {
  resource?: 'job';
  operation?: 'execute' | 'getMetadata';
/**
 * The job ID to execute
 * @displayOptions.show { operation: ["execute"], resource: ["job"] }
 */
    jobid?: string | Expression<string> | PlaceholderValue;
/**
 * Arguments
 * @displayOptions.show { operation: ["execute"], resource: ["job"] }
 * @default {}
 */
    arguments?: {
        /** Arguments
     */
    arguments?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Filter Rundeck nodes by name
 * @displayOptions.show { operation: ["execute"], resource: ["job"] }
 */
    filter?: string | Expression<string> | PlaceholderValue;
}

export interface RundeckV1Credentials {
  rundeckApi: CredentialReference;
}

interface RundeckV1NodeBase {
  type: 'n8n-nodes-base.rundeck';
  version: 1;
  credentials?: RundeckV1Credentials;
}

export type RundeckV1ParamsNode = RundeckV1NodeBase & {
  config: NodeConfig<RundeckV1Params>;
};

export type RundeckV1Node = RundeckV1ParamsNode;