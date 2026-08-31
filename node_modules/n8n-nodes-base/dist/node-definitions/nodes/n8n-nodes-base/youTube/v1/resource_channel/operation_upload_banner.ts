/**
 * YouTube Node - Version 1
 * Discriminator: resource=channel, operation=uploadBanner
 */


interface Credentials {
  youTubeOAuth2Api: CredentialReference;
}

/** Upload a channel banner */
export type YouTubeV1ChannelUploadBannerParams = {
  resource: 'channel';
  operation: 'uploadBanner';
/**
 * ID of the channel
 */
    channelId?: string | Expression<string> | PlaceholderValue;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be uploaded
 * @default data
 */
    binaryProperty?: string | Expression<string> | PlaceholderValue;
};

export type YouTubeV1ChannelUploadBannerNode = {
  type: 'n8n-nodes-base.youTube';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<YouTubeV1ChannelUploadBannerParams>;
};