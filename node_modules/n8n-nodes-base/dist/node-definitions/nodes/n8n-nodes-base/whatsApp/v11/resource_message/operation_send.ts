/**
 * WhatsApp Business Cloud Node - Version 1.1
 * Discriminator: resource=message, operation=send
 */


interface Credentials {
  whatsAppApi: CredentialReference;
}

export type WhatsAppV11MessageSendParams = {
  resource: 'message';
  operation: 'send';
/**
 * Messaging Product
 * @default whatsapp
 */
    messagingProduct?: unknown;
/**
 * The ID of the business account's phone number from which the message will be sent from
 */
    phoneNumberId?: string | Expression<string>;
/**
 * Phone number of the recipient of the message
 * @hint When entering a phone number, make sure to include the country code
 */
    recipientPhoneNumber?: string | Expression<string> | PlaceholderValue;
/**
 * The type of the message
 * @default text
 */
    messageType?: 'audio' | 'contacts' | 'document' | 'image' | 'location' | 'text' | 'video';
/**
 * Name
 * @displayOptions.show { messageType: ["contacts"] }
 * @default {}
 */
    name?: {
        /** Name
     */
    data?: {
      /** Formatted Name
       */
      formatted_name?: string | Expression<string> | PlaceholderValue;
      /** First Name
       */
      first_name?: string | Expression<string> | PlaceholderValue;
      /** Last Name
       */
      last_name?: string | Expression<string> | PlaceholderValue;
      /** Middle Name
       */
      middle_name?: string | Expression<string> | PlaceholderValue;
      /** Suffix
       */
      suffix?: string | Expression<string> | PlaceholderValue;
      /** Prefix
       */
      prefix?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Additional Fields
 * @displayOptions.show { messageType: ["contacts", "location", "image", "video", "audio", "sticker", "document", "text"] }
 * @default {}
 */
    additionalFields?: {
    /** Addresses
     * @default {}
     */
    addresses?: {
        /** Address
     */
    address?: Array<{
      /** Type
       * @default HOME
       */
      type?: 'HOME' | 'WORK' | Expression<string>;
      /** Street
       */
      street?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** State
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** Zip
       */
      zip?: string | Expression<string> | PlaceholderValue;
      /** Country
       */
      country?: string | Expression<string> | PlaceholderValue;
      /** Country Code
       */
      country_code?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Birthday
     */
    birthday?: string | Expression<string> | PlaceholderValue;
    /** Emails
     * @default {}
     */
    emails?: {
        /** Email
     */
    data?: Array<{
      /** Type
       * @default HOME
       */
      type?: 'HOME' | 'WORK' | Expression<string>;
      /** Email
       */
      email?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Organization
     * @default {}
     */
    organization?: {
        /** Organization
     */
    data?: {
      /** Company
       */
      company?: string | Expression<string> | PlaceholderValue;
      /** Department
       */
      department?: string | Expression<string> | PlaceholderValue;
      /** Title
       */
      title?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Phones
     * @default {}
     */
    phones?: {
        /** Phone
     */
    data?: Array<{
      /** Type
       * @default CELL
       */
      type?: 'CELL' | 'HOME' | 'IPHONE' | 'MAIN' | 'wa_id' | 'WORK' | Expression<string>;
      /** Type
       * @default CELL
       */
      type?: 'CELL' | 'HOME' | 'IPHONE' | 'MAIN' | 'WORK' | Expression<string>;
      /** Phone
       */
      phone?: string | Expression<string> | PlaceholderValue;
      /** If omitted, the message will display an Invite to WhatsApp button instead of the standard buttons
       */
      whatsapp_user_id?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** URLs
     * @default {}
     */
    urls?: {
        /** URL
     */
    url?: Array<{
      /** Type
       * @default HOME
       */
      type?: 'HOME' | 'WORK' | Expression<string>;
      /** URL
       */
      url?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
/**
 * Longitude
 * @displayOptions.show { messageType: ["location"] }
 */
    longitude?: number | Expression<number>;
/**
 * Latitude
 * @displayOptions.show { messageType: ["location"] }
 */
    latitude?: number | Expression<number>;
/**
 * The body of the message (max 4096 characters)
 * @displayOptions.show { messageType: ["text"] }
 */
    textBody?: string | Expression<string> | PlaceholderValue;
/**
 * Use a link, an ID, or n8n to upload an audio file
 * @displayOptions.show { messageType: ["audio", "document", "image", "video"] }
 * @default useMediaLink
 */
    mediaPath?: 'useMediaLink' | 'useMediaId' | 'useMedian8n' | Expression<string>;
/**
 * Link of the media to be sent
 * @displayOptions.show { messageType: ["image", "video", "audio", "sticker", "document"], mediaPath: ["useMediaLink"] }
 */
    mediaLink?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the media to be sent
 * @displayOptions.show { messageType: ["image", "video", "audio", "sticker", "document"], mediaPath: ["useMediaId"] }
 */
    mediaId?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the input field containing the binary file data to be uploaded
 * @displayOptions.show { messageType: ["image", "video", "audio", "sticker", "document"], mediaPath: ["useMedian8n"] }
 * @default data
 */
    mediaPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the file (required when using a file ID)
 * @displayOptions.show { messageType: ["document"], mediaPath: ["useMediaId"] }
 */
    mediaFilename?: string | Expression<string> | PlaceholderValue;
};

export type WhatsAppV11MessageSendOutput = {
  contacts?: Array<{
    input?: string;
    wa_id?: string;
  }>;
  messages?: Array<{
    id?: string;
  }>;
  messaging_product?: string;
};

export type WhatsAppV11MessageSendNode = {
  type: 'n8n-nodes-base.whatsApp';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<WhatsAppV11MessageSendParams>;
  output?: Items<WhatsAppV11MessageSendOutput>;
};