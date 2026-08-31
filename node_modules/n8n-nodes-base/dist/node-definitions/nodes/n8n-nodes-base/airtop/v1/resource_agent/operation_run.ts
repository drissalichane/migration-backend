/**
 * Airtop Node - Version 1
 * Discriminator: resource=agent, operation=run
 */


interface Credentials {
  airtopApi: CredentialReference;
}

/** Run an Airtop agent */
export type AirtopV1AgentRunParams = {
  resource: 'agent';
  operation: 'run';
/**
 * The Airtop agent to run. Visit &lt;a href="https://portal.airtop.ai/agents" target="_blank"&gt;Airtop Agents&lt;/a&gt; for more information.
 * @default {"mode":"list","value":""}
 */
    agentId?: { __rl: true; mode: 'list' | 'id'; value: string; cachedResultName?: string };
/**
 * Agent Parameters
 * @displayOptions.hide { agentId: [""] }
 * @default {"mappingMode":"defineBelow","value":null}
 */
    agentParameters?: string;
/**
 * Whether to wait for the agent to complete its execution
 * @default true
 */
    awaitExecution?: boolean | Expression<boolean>;
/**
 * Timeout in seconds to wait for the agent to finish
 * @displayOptions.show { awaitExecution: [true] }
 * @default 600
 */
    timeout?: number | Expression<number>;
};

export type AirtopV1AgentRunOutput = {
  invocationId?: string;
  status?: string;
  output?: {
    error?: boolean;
    success?: boolean;
  };
};

export type AirtopV1AgentRunNode = {
  type: 'n8n-nodes-base.airtop';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<AirtopV1AgentRunParams>;
  output?: Items<AirtopV1AgentRunOutput>;
};