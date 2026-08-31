/**
 * YouTube Node - Version 1
 * Discriminator: resource=video, operation=update
 */


interface Credentials {
  youTubeOAuth2Api: CredentialReference;
}

/** Update a channel */
export type YouTubeV1VideoUpdateParams = {
  resource: 'video';
  operation: 'update';
/**
 * Video ID
 */
    videoId?: string | Expression<string> | PlaceholderValue;
/**
 * Title
 */
    title?: string | Expression<string> | PlaceholderValue;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    regionCode?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    categoryId?: string | Expression<string>;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** The language of the text in the playlist resource's title and description properties. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    defaultLanguage?: string | Expression<string>;
    /** The playlist's description
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Whether the video can be embedded on another website
     * @default false
     */
    embeddable?: boolean | Expression<boolean>;
    /** The video's license
     */
    license?: 'creativeCommon' | 'youtube' | Expression<string>;
    /** Whether YouTube should send a notification about the new video to users who subscribe to the video's channel
     * @default false
     */
    notifySubscribers?: boolean | Expression<boolean>;
    /** The playlist's privacy status
     */
    privacyStatus?: 'private' | 'public' | 'unlistef' | Expression<string>;
    /** Whether the extended video statistics on the video's watch page are publicly viewable
     * @default true
     */
    publicStatsViewable?: boolean | Expression<boolean>;
    /** If you set a value for this property, you must also set the status.privacyStatus property to private
     */
    publishAt?: string | Expression<string>;
    /** The date and time when the video was recorded
     */
    recordingDate?: string | Expression<string>;
    /** Whether the video is designated as child-directed, and it contains the current "made for kids" status of the video
     * @default false
     */
    selfDeclaredMadeForKids?: boolean | Expression<boolean>;
    /** Keyword tags associated with the playlist. Mulplie can be defined separated by comma.
     */
    tags?: string | Expression<string> | PlaceholderValue;
  };
};

export type YouTubeV1VideoUpdateOutput = {
  etag?: string;
  id?: string;
  kind?: string;
  snippet?: {
    categoryId?: string;
    channelId?: string;
    channelTitle?: string;
    defaultAudioLanguage?: string;
    description?: string;
    liveBroadcastContent?: string;
    localized?: {
      description?: string;
      title?: string;
    };
    publishedAt?: string;
    thumbnails?: {
      'default'?: {
        height?: number;
        url?: string;
        width?: number;
      };
      high?: {
        height?: number;
        url?: string;
        width?: number;
      };
      maxres?: {
        height?: number;
        url?: string;
        width?: number;
      };
      medium?: {
        height?: number;
        url?: string;
        width?: number;
      };
      standard?: {
        height?: number;
        url?: string;
        width?: number;
      };
    };
    title?: string;
  };
  status?: {
    embeddable?: boolean;
    license?: string;
    privacyStatus?: string;
    publicStatsViewable?: boolean;
    selfDeclaredMadeForKids?: boolean;
    uploadStatus?: string;
  };
};

export type YouTubeV1VideoUpdateNode = {
  type: 'n8n-nodes-base.youTube';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<YouTubeV1VideoUpdateParams>;
  output?: Items<YouTubeV1VideoUpdateOutput>;
};