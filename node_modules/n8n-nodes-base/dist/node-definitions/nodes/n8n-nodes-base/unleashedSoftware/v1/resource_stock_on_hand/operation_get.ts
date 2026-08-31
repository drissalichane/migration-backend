/**
 * Unleashed Software Node - Version 1
 * Discriminator: resource=stockOnHand, operation=get
 */


interface Credentials {
  unleashedSoftwareApi: CredentialReference;
}

/** Get a stock on hand */
export type UnleashedSoftwareV1StockOnHandGetParams = {
  resource: 'stockOnHand';
  operation: 'get';
/**
 * Product ID
 */
    productId?: string | Expression<string> | PlaceholderValue;
};

export type UnleashedSoftwareV1StockOnHandGetNode = {
  type: 'n8n-nodes-base.unleashedSoftware';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<UnleashedSoftwareV1StockOnHandGetParams>;
};