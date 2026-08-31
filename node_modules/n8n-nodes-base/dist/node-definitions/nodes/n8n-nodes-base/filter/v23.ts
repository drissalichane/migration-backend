/**
 * Filter Node - Version 2.3
 * Keep only items matching a condition
 */


// Helper types for special n8n fields
type FilterValue = { conditions: Array<{ leftValue: unknown; operator: { type: string; operation: string }; rightValue: unknown }> };

export interface FilterV23Params {
  conditions?: FilterValue;
/**
 * If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans &lt;code&gt;"false"&lt;/code&gt; or &lt;code&gt;0&lt;/code&gt; will be cast to &lt;code&gt;false&lt;/code&gt;
 * @default false
 */
    looseTypeValidation?: boolean | Expression<boolean>;
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

interface FilterV23NodeBase {
  type: 'n8n-nodes-base.filter';
  version: 2.3;
}

export type FilterV23ParamsNode = FilterV23NodeBase & {
  config: NodeConfig<FilterV23Params>;
};

export type FilterV23Node = FilterV23ParamsNode;