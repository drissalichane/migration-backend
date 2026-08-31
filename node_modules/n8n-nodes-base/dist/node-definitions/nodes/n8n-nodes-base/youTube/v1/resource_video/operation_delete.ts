/**
 * YouTube Node - Version 1
 * Discriminator: resource=video, operation=delete
 */


interface Credentials {
  youTubeOAuth2Api: CredentialReference;
}

/** Delete a playlist */
export type YouTubeV1VideoDeleteParams = {
  resource: 'video';
  operation: 'delete';
/**
 * ID of the video
 */
    videoId?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** The onBehalfOfContentOwner parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value
     */
    onBehalfOfContentOwner?: string | Expression<string> | PlaceholderValue;
  };
};

export type YouTubeV1VideoDeleteNode = {
  type: 'n8n-nodes-base.youTube';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<YouTubeV1VideoDeleteParams>;
};