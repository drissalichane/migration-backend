/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=purchaseOrder, operation=get
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Get an account */
export type ZohoCrmV1PurchaseOrderGetParams = {
  resource: 'purchaseOrder';
  operation: 'get';
/**
 * ID of the purchase order to retrieve
 */
    purchaseOrderId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1PurchaseOrderGetNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1PurchaseOrderGetParams>;
};