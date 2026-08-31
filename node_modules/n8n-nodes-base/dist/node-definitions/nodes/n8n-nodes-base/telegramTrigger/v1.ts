/**
 * Telegram Trigger Node - Version 1
 * Starts the workflow on a Telegram update
 */


export interface TelegramTriggerV1Params {
  updates?: Array<'*' | 'callback_query' | 'channel_post' | 'edited_channel_post' | 'edited_message' | 'inline_query' | 'message' | 'poll' | 'pre_checkout_query' | 'shipping_query'>;
  additionalFields?: {
    /** Telegram delivers the image in multiple sizes. By default, just the large image would be downloaded. If you want to change the size, set the field 'Image Size'.
     * @default false
     */
    download?: boolean | Expression<boolean>;
    /** The size of the image to be downloaded
     * @displayOptions.show { download: [true] }
     * @default large
     */
    imageSize?: 'small' | 'medium' | 'large' | 'extraLarge' | Expression<string>;
    /** The chat IDs to restrict the trigger to. Multiple can be defined separated by comma.
     */
    chatIds?: string | Expression<string> | PlaceholderValue;
    /** The user IDs to restrict the trigger to. Multiple can be defined separated by comma.
     */
    userIds?: string | Expression<string> | PlaceholderValue;
  };
}

export interface TelegramTriggerV1Credentials {
  telegramApi: CredentialReference;
}

interface TelegramTriggerV1NodeBase {
  type: 'n8n-nodes-base.telegramTrigger';
  version: 1;
  credentials?: TelegramTriggerV1Credentials;
  isTrigger: true;
}

export type TelegramTriggerV1ParamsNode = TelegramTriggerV1NodeBase & {
  config: NodeConfig<TelegramTriggerV1Params>;
};

export type TelegramTriggerV1Node = TelegramTriggerV1ParamsNode;