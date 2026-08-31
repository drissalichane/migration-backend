/**
 * Pushbullet Node - Version 1
 * Discriminator: resource=push, operation=create
 */


interface Credentials {
  pushbulletOAuth2Api: CredentialReference;
}

/** Create a push */
export type PushbulletV1PushCreateParams = {
  resource: 'push';
  operation: 'create';
/**
 * Type
 * @default note
 */
    type?: 'file' | 'link' | 'note' | Expression<string>;
/**
 * Title of the push
 * @displayOptions.show { type: ["note", "link"] }
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Body of the push
 * @displayOptions.show { type: ["note", "link", "file"] }
 */
    body?: string | Expression<string> | PlaceholderValue;
/**
 * URL of the push
 * @displayOptions.show { type: ["link"] }
 */
    url?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be written
 * @displayOptions.show { type: ["file"] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Define the medium that will be used to send the push
 * @default default
 */
    target?: 'channel_tag' | 'default' | 'device_iden' | 'email' | Expression<string>;
/**
 * The value to be set depending on the target selected. For example, if the target selected is email then this field would take the email address of the person you are trying to send the push to.
 * @displayOptions.hide { target: ["default", "device_iden"] }
 */
    value?: string | Expression<string> | PlaceholderValue;
};

export type PushbulletV1PushCreateOutput = {
  active?: boolean;
  body?: string;
  client_iden?: string;
  created?: number;
  direction?: string;
  dismissed?: boolean;
  iden?: string;
  modified?: number;
  receiver_email?: string;
  receiver_email_normalized?: string;
  receiver_iden?: string;
  sender_name?: string;
  title?: string;
  type?: string;
};

export type PushbulletV1PushCreateNode = {
  type: 'n8n-nodes-base.pushbullet';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<PushbulletV1PushCreateParams>;
  output?: Items<PushbulletV1PushCreateOutput>;
};