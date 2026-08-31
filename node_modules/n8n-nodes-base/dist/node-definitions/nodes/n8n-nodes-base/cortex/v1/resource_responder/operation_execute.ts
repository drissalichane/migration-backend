/**
 * Cortex Node - Version 1
 * Discriminator: resource=responder, operation=execute
 */


interface Credentials {
  cortexApi: CredentialReference;
}

/** Execute Analyzer */
export type CortexV1ResponderExecuteParams = {
  resource: 'responder';
  operation: 'execute';
/**
 * Choose the responder. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    responder?: string | Expression<string>;
/**
 * Choose the Data type. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    entityType?: string | Expression<string>;
/**
 * Choose between providing JSON object or seperated attributes
 * @default false
 */
    jsonObject?: boolean | Expression<boolean>;
/**
 * Entity Object (JSON)
 * @displayOptions.show { jsonObject: [true] }
 */
    objectData?: string | Expression<string> | PlaceholderValue;
/**
 * Parameters
 * @displayOptions.show { jsonObject: [false], entityType: ["case"] }
 * @displayOptions.hide { entityType: ["", "alert", "case_artifact", "case_task", "case_task_log"] }
 * @default {}
 */
    parameters?: string | Expression<string>;
};

export type CortexV1ResponderExecuteNode = {
  type: 'n8n-nodes-base.cortex';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CortexV1ResponderExecuteParams>;
};