/**
 * Zoho CRM Node - Version 1
 * Discriminator: resource=salesOrder, operation=delete
 */


interface Credentials {
  zohoOAuth2Api: CredentialReference;
}

/** Delete an account */
export type ZohoCrmV1SalesOrderDeleteParams = {
  resource: 'salesOrder';
  operation: 'delete';
/**
 * ID of the sales order to delete
 */
    salesOrderId?: string | Expression<string> | PlaceholderValue;
};

export type ZohoCrmV1SalesOrderDeleteNode = {
  type: 'n8n-nodes-base.zohoCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ZohoCrmV1SalesOrderDeleteParams>;
};