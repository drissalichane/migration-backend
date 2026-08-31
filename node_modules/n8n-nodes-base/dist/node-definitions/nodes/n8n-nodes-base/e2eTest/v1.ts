/**
 * E2E Test Node - Version 1
 * Dummy node used for e2e testing
 */


export interface E2eTestV1Params {
  operation?: 'remoteOptions' | 'resourceLocator' | 'resourceMapper';
  fieldId?: string | Expression<string> | PlaceholderValue;
/**
 * Remote options to load. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { operation: ["remoteOptions"] }
 * @default []
 */
    remoteOptions?: string | Expression<string>;
/**
 * Resource Locator
 * @displayOptions.show { operation: ["resourceLocator"] }
 * @default {"mode":"list","value":""}
 */
    rlc?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Resource Mapping Component
 * @displayOptions.show { operation: ["resourceMapper"] }
 * @default {"mappingMode":"defineBelow","value":null}
 */
    resourceMapper?: string;
  otherField?: string | Expression<string> | PlaceholderValue;
}

interface E2eTestV1NodeBase {
  type: 'n8n-nodes-base.e2eTest';
  version: 1;
}

export type E2eTestV1ParamsNode = E2eTestV1NodeBase & {
  config: NodeConfig<E2eTestV1Params>;
};

export type E2eTestV1Node = E2eTestV1ParamsNode;