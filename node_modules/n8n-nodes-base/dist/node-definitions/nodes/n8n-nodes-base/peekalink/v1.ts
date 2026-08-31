/**
 * Peekalink Node - Version 1
 * Consume the Peekalink API
 */


export interface PeekalinkV1Params {
  operation?: 'isAvailable' | 'preview';
  url?: string | Expression<string> | PlaceholderValue;
}

export interface PeekalinkV1Credentials {
  peekalinkApi: CredentialReference;
}

interface PeekalinkV1NodeBase {
  type: 'n8n-nodes-base.peekalink';
  version: 1;
  credentials?: PeekalinkV1Credentials;
}

export type PeekalinkV1ParamsNode = PeekalinkV1NodeBase & {
  config: NodeConfig<PeekalinkV1Params>;
};

export type PeekalinkV1Node = PeekalinkV1ParamsNode;