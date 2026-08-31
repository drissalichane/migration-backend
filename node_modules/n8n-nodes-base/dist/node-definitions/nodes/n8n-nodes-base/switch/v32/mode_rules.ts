/**
 * Switch Node - Version 3.2
 * Discriminator: mode=rules
 */


/** Build a matching rule for each output */
export type SwitchV32RulesParams = {
  mode: 'rules';
/**
 * Routing Rules
 * @default {"values":[{"conditions":{"options":{"caseSensitive":true,"leftValue":"","typeValidation":"strict"},"conditions":[{"leftValue":"","rightValue":"","operator":{"type":"string","operation":"equals"}}],"combinator":"and"}}]}
 */
    rules?: {
        /** Routing Rule
     */
    values?: Array<{
      /** Conditions
       * @default {}
       */
      conditions?: FilterValue;
      /** Rename Output
       * @default false
       */
      renameOutput?: boolean | Expression<boolean>;
      /** The label of output to which to send data to if rule matches
       * @displayOptions.show { renameOutput: [true] }
       */
      outputKey?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans &lt;code&gt;"false"&lt;/code&gt; or &lt;code&gt;0&lt;/code&gt; will be cast to &lt;code&gt;false&lt;/code&gt;
 * @default false
 */
    looseTypeValidation?: boolean | Expression<boolean>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** If no rule matches the item will be sent to this output, by default they will be ignored
     * @default none
     */
    fallbackOutput?: string | Expression<string>;
    /** Whether to ignore letter case when evaluating conditions
     * @default true
     */
    ignoreCase?: boolean | Expression<boolean>;
    /** If the type of an expression doesn't match the type of the comparison, n8n will try to cast the expression to the required type. E.g. for booleans &lt;code&gt;"false"&lt;/code&gt; or &lt;code&gt;0&lt;/code&gt; will be cast to &lt;code&gt;false&lt;/code&gt;
     * @default true
     */
    looseTypeValidation?: boolean | Expression<boolean>;
    /** Rename Fallback Output
     * @displayOptions.show { fallbackOutput: ["extra"] }
     */
    renameFallbackOutput?: string | Expression<string> | PlaceholderValue;
    /** Whether to send data to all outputs meeting conditions (and not just the first one)
     * @default false
     */
    allMatchingOutputs?: boolean | Expression<boolean>;
  };
};

export type SwitchV32RulesNode = {
  type: 'n8n-nodes-base.switch';
  version: 3.2;
  config: NodeConfig<SwitchV32RulesParams>;
};