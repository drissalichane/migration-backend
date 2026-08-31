/**
 * AI Transform Node - Version 1
 * Modify data based on instructions written in plain english
 */


export interface AiTransformV1Params {
/**
 * Provide instructions on how you want to transform the data, then click 'Generate code'. Use dot notation to refer to nested fields (e.g. address.street).
 */
    instructions?: unknown;
  codeGeneratedForPrompt?: unknown;
/**
 * Generated JavaScript
 * @hint Read-only. To edit this code, adjust the instructions or copy and paste it into a Code node.
 */
    jsCode?: string;
}

interface AiTransformV1NodeBase {
  type: 'n8n-nodes-base.aiTransform';
  version: 1;
}

export type AiTransformV1ParamsNode = AiTransformV1NodeBase & {
  config: NodeConfig<AiTransformV1Params>;
};

export type AiTransformV1Node = AiTransformV1ParamsNode;