/**
 * Filter Node - Version 2
 * Keep only items matching a condition
 */


// Helper types for special n8n fields
type FilterValue = { conditions: Array<{ leftValue: unknown; operator: { type: string; operation: string }; rightValue: unknown }> };

export interface FilterV2Params {
  conditions?: FilterValue;
  options?: {
    /** Whether to ignore letter case when evaluating conditions
     * @default true
     */
    ignoreCase?: boolean | Expression<boolean>;
    /** If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans &lt;code&gt;"false"&lt;/code&gt; or &lt;code&gt;0&lt;/code&gt; will be cast to &lt;code&gt;false&lt;/code&gt;
     * @default true
     */
    looseTypeValidation?: boolean | Expression<boolean>;
  };
}

interface FilterV2NodeBase {
  type: 'n8n-nodes-base.filter';
  version: 2;
}

export type FilterV2ParamsNode = FilterV2NodeBase & {
  config: NodeConfig<FilterV2Params>;
};

export type FilterV2Node = FilterV2ParamsNode;