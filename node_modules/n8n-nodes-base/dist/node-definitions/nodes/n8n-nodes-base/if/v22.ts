/**
 * If Node - Version 2.2
 * Route items to different branches (true/false)
 */


// Helper types for special n8n fields
type FilterValue = { conditions: Array<{ leftValue: unknown; operator: { type: string; operation: string }; rightValue: unknown }> };

export interface IfV22Params {
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

interface IfV22NodeBase {
  type: 'n8n-nodes-base.if';
  version: 2.2;
}

export type IfV22ParamsNode = IfV22NodeBase & {
  config: NodeConfig<IfV22Params>;
};

export type IfV22Node = IfV22ParamsNode;