/**
 * RocketChat Node - Version 1
 * Discriminator: resource=chat, operation=postMessage
 */


interface Credentials {
  rocketchatApi: CredentialReference;
}

/** Post a message to a channel or a direct message */
export type RocketchatV1ChatPostMessageParams = {
  resource: 'chat';
  operation: 'postMessage';
/**
 * The channel name with the prefix in front of it
 */
    channel?: string | Expression<string> | PlaceholderValue;
/**
 * The text of the message to send, is optional because of attachments
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * JSON Parameters
 * @default false
 */
    jsonParameters?: boolean | Expression<boolean>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** This will cause the message’s name to appear as the given alias, but your username will still display
     */
    alias?: string | Expression<string> | PlaceholderValue;
    /** If provided, this will make the avatar use the provided image URL
     */
    avatar?: string | Expression<string> | PlaceholderValue;
    /** This will cause the message’s name to appear as the given alias, but your username will still display
     */
    emoji?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Attachments
 * @displayOptions.show { jsonParameters: [false] }
 * @default {}
 */
    attachments?: {
    /** The color you want the order on the left side to be, any value background-css supports
     * @default #ff0000
     */
    color?: string | Expression<string>;
    /** The text to display for this attachment, it is different than the message’s text
     */
    text?: string | Expression<string> | PlaceholderValue;
    /** Displays the time next to the text portion
     */
    ts?: string | Expression<string>;
    /** An image that displays to the left of the text, looks better when this is relatively small
     */
    thumbUrl?: string | Expression<string> | PlaceholderValue;
    /** Only applicable if the timestamp is provided, as it makes the time clickable to this link
     */
    messageLink?: string | Expression<string> | PlaceholderValue;
    /** Causes the image, audio, and video sections to be hiding when collapsed is true
     * @default false
     */
    collapsed?: boolean | Expression<boolean>;
    /** Name of the author
     */
    authorName?: string | Expression<string> | PlaceholderValue;
    /** Providing this makes the author name clickable and points to this link
     */
    authorLink?: string | Expression<string> | PlaceholderValue;
    /** Displays a tiny icon to the left of the Author’s name
     */
    authorIcon?: string | Expression<string> | PlaceholderValue;
    /** Title to display for this attachment, displays under the author
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Providing this makes the title clickable, pointing to this link
     */
    titleLink?: string | Expression<string> | PlaceholderValue;
    /** When this is true, a download icon appears and clicking this saves the link to file
     * @default false
     */
    titleLinkDownload?: boolean | Expression<boolean>;
    /** The image to display, will be “big” and easy to see
     */
    imageUrl?: string | Expression<string> | PlaceholderValue;
    /** Audio file to play, only supports what html audio does
     */
    audioUrl?: string | Expression<string> | PlaceholderValue;
    /** Video file to play, only supports what html video does
     */
    videoUrl?: string | Expression<string> | PlaceholderValue;
    /** Fields
     * @default {}
     */
    fields?: {
        /** Fields
     */
    fieldsValues?: Array<{
      /** Whether this field should be a short field
       * @default false
       */
      short?: boolean | Expression<boolean>;
      /** The title of this field
       */
      title?: string | Expression<string> | PlaceholderValue;
      /** The value of this field, displayed underneath the title value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
  };
/**
 * Attachments
 * @displayOptions.show { jsonParameters: [true] }
 */
    attachmentsJson?: IDataObject | string | Expression<string>;
};

export type RocketchatV1ChatPostMessageOutput = {
  channel?: string;
  message?: {
    _id?: string;
    _updatedAt?: string;
    alias?: string;
    attachments?: Array<{
      fields?: Array<{
        short?: boolean;
        title?: string;
        value?: string;
      }>;
      text?: string;
      title?: string;
      ts?: string;
    }>;
    groupable?: boolean;
    md?: Array<{
      type?: string;
      value?: Array<{
        type?: string;
      }>;
    }>;
    mentions?: Array<{
      _id?: string;
      name?: string;
      type?: string;
      username?: string;
    }>;
    msg?: string;
    parseUrls?: boolean;
    rid?: string;
    ts?: string;
    u?: {
      _id?: string;
      name?: string;
      username?: string;
    };
    unread?: boolean;
    urls?: Array<{
      url?: string;
    }>;
  };
  success?: boolean;
  ts?: number;
};

export type RocketchatV1ChatPostMessageNode = {
  type: 'n8n-nodes-base.rocketchat';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<RocketchatV1ChatPostMessageParams>;
  output?: Items<RocketchatV1ChatPostMessageOutput>;
};