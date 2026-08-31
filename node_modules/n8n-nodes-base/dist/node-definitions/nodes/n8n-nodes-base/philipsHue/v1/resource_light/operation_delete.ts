/**
 * Philips Hue Node - Version 1
 * Discriminator: resource=light, operation=delete
 */


interface Credentials {
  philipsHueOAuth2Api: CredentialReference;
}

/** Delete a light */
export type PhilipsHueV1LightDeleteParams = {
  resource: 'light';
  operation: 'delete';
/**
 * Light ID
 */
    lightId?: string | Expression<string> | PlaceholderValue;
};

export type PhilipsHueV1LightDeleteNode = {
  type: 'n8n-nodes-base.philipsHue';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PhilipsHueV1LightDeleteParams>;
};