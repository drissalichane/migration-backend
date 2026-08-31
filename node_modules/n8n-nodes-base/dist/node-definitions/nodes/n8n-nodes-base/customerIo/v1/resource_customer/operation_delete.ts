/**
 * Customer.io Node - Version 1
 * Discriminator: resource=customer, operation=delete
 */


interface Credentials {
  customerIoApi: CredentialReference;
}

/** Delete a customer */
export type CustomerIoV1CustomerDeleteParams = {
  resource: 'customer';
  operation: 'delete';
/**
 * The unique identifier for the customer
 */
    id?: string | Expression<string> | PlaceholderValue;
};

export type CustomerIoV1CustomerDeleteNode = {
  type: 'n8n-nodes-base.customerIo';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<CustomerIoV1CustomerDeleteParams>;
};