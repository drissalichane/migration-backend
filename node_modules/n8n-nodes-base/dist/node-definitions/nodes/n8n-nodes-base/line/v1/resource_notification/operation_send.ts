/**
 * Line Node - Version 1
 * Discriminator: resource=notification, operation=send
 */


interface Credentials {
  lineNotifyOAuth2Api: CredentialReference;
}

/** Sends notifications to users or groups */
export type LineV1NotificationSendParams = {
  resource: 'notification';
  operation: 'send';
/**
 * Message
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Image
     * @default {}
     */
    imageUi?: {
        /** Image
     */
    imageValue?: {
      /** Binary File
       * @default false
       */
      binaryData?: boolean | Expression<boolean>;
      /** HTTP/HTTPS URL. Maximum size of 2048×2048px JPEG.
       * @displayOptions.show { binaryData: [false] }
       */
      imageFullsize?: string | Expression<string> | PlaceholderValue;
      /** HTTP/HTTPS URL. Maximum size of 240×240px JPEG.
       * @displayOptions.show { binaryData: [false] }
       */
      imageThumbnail?: string | Expression<string> | PlaceholderValue;
      /** Input Binary Field
       * @hint The name of the input binary field containing the file to be written
       * @displayOptions.show { binaryData: [true] }
       * @default data
       */
      binaryProperty?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** &lt;p&gt;true: The user doesn't receive a push notification when the message is sent.&lt;/p&gt;&lt;p&gt;false: The user receives a push notification when the message is sent&lt;/p&gt;
     * @default false
     */
    notificationDisabled?: boolean | Expression<boolean>;
    /** Sticker
     * @default {}
     */
    stickerUi?: {
        /** Sticker
     */
    stickerValue?: {
      /** Sticker ID
       */
      stickerId?: number | Expression<number>;
      /** Package ID
       */
      stickerPackageId?: number | Expression<number>;
    };
  };
  };
};

export type LineV1NotificationSendOutput = {
  message?: string;
  status?: number;
};

export type LineV1NotificationSendNode = {
  type: 'n8n-nodes-base.line';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<LineV1NotificationSendParams>;
  output?: Items<LineV1NotificationSendOutput>;
};