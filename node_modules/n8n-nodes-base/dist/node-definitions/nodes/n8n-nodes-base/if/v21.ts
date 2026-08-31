/**
 * If Node - Version 2.1
 * Route items to different branches (true/false)
 */


// Helper types for special n8n fields
type FilterValue = { conditions: Array<{ leftValue: unknown; operator: { type: string; operation: string }; rightValue: unknown }> };

export interface IfV21Params {
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

interface IfV21NodeBase {
  type: 'n8n-nodes-base.if';
  version: 2.1;
}

export type IfV21ParamsNode = IfV21NodeBase & {
  config: NodeConfig<IfV21Params>;
};

export type IfV21Node = IfV21ParamsNode;