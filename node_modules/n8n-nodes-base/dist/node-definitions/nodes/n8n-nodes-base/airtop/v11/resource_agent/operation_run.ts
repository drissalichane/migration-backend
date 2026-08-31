/**
 * Airtop Node - Version 1.1
 * Discriminator: resource=agent, operation=run
 */


interface Credentials {
  airtopApi: CredentialReference;
}

/** Run an Airtop agent */
export type AirtopV11AgentRunParams = {
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

export type AirtopV11AgentRunOutput = {
  invocationId?: string;
  status?: string;
  output?: {
    error?: boolean;
    success?: boolean;
  };
};

export type AirtopV11AgentRunNode = {
  type: 'n8n-nodes-base.airtop';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<AirtopV11AgentRunParams>;
  output?: Items<AirtopV11AgentRunOutput>;
};