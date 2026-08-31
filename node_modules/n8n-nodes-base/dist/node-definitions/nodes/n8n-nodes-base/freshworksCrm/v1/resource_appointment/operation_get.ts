/**
 * Freshworks CRM Node - Version 1
 * Discriminator: resource=appointment, operation=get
 */


interface Credentials {
  freshworksCrmApi: CredentialReference;
}

/** Retrieve an account */
export type FreshworksCrmV1AppointmentGetParams = {
  resource: 'appointment';
  operation: 'get';
/**
 * ID of the appointment to retrieve
 */
    appointmentId?: string | Expression<string> | PlaceholderValue;
};

export type FreshworksCrmV1AppointmentGetNode = {
  type: 'n8n-nodes-base.freshworksCrm';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshworksCrmV1AppointmentGetParams>;
};