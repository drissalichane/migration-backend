/**
 * Code Node - Version 1
 * Discriminator: mode=runOnceForAllItems
 */


/** Run this code only once, no matter how many input items there are */
export type CodeV1RunOnceForAllItemsParams = {
  mode: 'runOnceForAllItems';
/**
 * Language
 * @default javaScript
 */
    language?: unknown;
/**
 * JavaScript code to execute.&lt;br&gt;&lt;br&gt;Tip: You can use luxon vars like &lt;code&gt;$today&lt;/code&gt; for dates and &lt;code&gt;$jmespath&lt;/code&gt; for querying JSON structures. &lt;a href="https://docs.n8n.io/nodes/n8n-nodes-base.function"&gt;Learn more&lt;/a&gt;.
 */
    jsCode?: string;
/**
 * Python code to execute.&lt;br&gt;&lt;br&gt;Tip: You can use built-in methods and variables like &lt;code&gt;_today&lt;/code&gt; for dates and &lt;code&gt;_jmespath&lt;/code&gt; for querying JSON structures. &lt;a href="https://docs.n8n.io/code/builtin/"&gt;Learn more&lt;/a&gt;.
 * @displayOptions.show { language: ["python", "pythonNative"] }
 */
    pythonCode?: string;
};

export type CodeV1RunOnceForAllItemsNode = {
  type: 'n8n-nodes-base.code';
  version: 1;
  config: NodeConfig<CodeV1RunOnceForAllItemsParams>;
};