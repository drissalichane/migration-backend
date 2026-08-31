/**
 * YouTube Node - Version 1
 * Discriminator: resource=video, operation=get
 */


interface Credentials {
  youTubeOAuth2Api: CredentialReference;
}

/** Retrieve a channel */
export type YouTubeV1VideoGetParams = {
  resource: 'video';
  operation: 'get';
/**
 * Video ID
 */
    videoId?: string | Expression<string> | PlaceholderValue;
/**
 * The fields parameter specifies a comma-separated list of one or more video resource properties that the API response will include
 * @default ["*"]
 */
    part?: Array<'*' | 'contentDetails' | 'id' | 'liveStreamingDetails' | 'localizations' | 'player' | 'recordingDetails' | 'snippet' | 'statistics' | 'status' | 'topicDetails'>;
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

export type YouTubeV1VideoGetOutput = {
  contentDetails?: {
    caption?: string;
    definition?: string;
    dimension?: string;
    duration?: string;
    licensedContent?: boolean;
    projection?: string;
  };
  etag?: string;
  id?: string;
  kind?: string;
  localizations?: {
    es?: {
      description?: string;
      title?: string;
    };
  };
  player?: {
    embedHtml?: string;
  };
  snippet?: {
    categoryId?: string;
    channelId?: string;
    channelTitle?: string;
    defaultAudioLanguage?: string;
    defaultLanguage?: string;
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
  statistics?: {
    commentCount?: string;
    favoriteCount?: string;
    likeCount?: string;
    viewCount?: string;
  };
  status?: {
    embeddable?: boolean;
    license?: string;
    madeForKids?: boolean;
    privacyStatus?: string;
    publicStatsViewable?: boolean;
    uploadStatus?: string;
  };
  topicDetails?: {
    topicCategories?: Array<string>;
  };
};

export type YouTubeV1VideoGetNode = {
  type: 'n8n-nodes-base.youTube';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<YouTubeV1VideoGetParams>;
  output?: Items<YouTubeV1VideoGetOutput>;
};