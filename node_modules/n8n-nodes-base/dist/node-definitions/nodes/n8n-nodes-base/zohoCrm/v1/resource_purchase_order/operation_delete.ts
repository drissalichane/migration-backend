/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=purchaseOrder, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1PurchaseOrderDeleteParams = {
  resource: 'purchaseOrder';
  operation: 'delete';
/**
 * ID of the purchase order to delete
 */
    purchaseOrderId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1PurchaseOrderDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1PurchaseOrderDeleteParams>;
};