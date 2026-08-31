/**
 * Segment Node - Version 1
 * Discriminator: resource=track, operation=event
 */


interface Credentials {
  segmentApi: CredentialReference;
}

/** Track lets you record events */
export type SegmentV1TrackEventParams = {
  resource: 'track';
  operation: 'event';
/**
 * User ID
 */
    userId?: string | Expression<string> | PlaceholderValue;
/**
 * Name of the action that a user has performed
 */
    event?: string | Expression<string> | PlaceholderValue;
/**
 * Context
 * @default {}
 */
    context?: {
        /** Context
     */
    contextUi?: {
      /** Whether a user is active
       * @default false
       */
      active?: boolean | Expression<boolean>;
      /** Current user’s IP address
       */
      ip?: string | Expression<string> | PlaceholderValue;
      /** Locale string for the current user, for example en-US
       */
      locate?: string | Expression<string> | PlaceholderValue;
      /** Dictionary of information about the current page in the browser, containing hash, path, referrer, search, title and URL
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** Timezones are sent as tzdata strings to add user timezone information which might be stripped from the timestamp, for example America/New_York
       */
      timezone?: string | Expression<string> | PlaceholderValue;
      /** App
       * @default {}
       */
      app?: {
        /** App
     */
    appUi?: {
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Version
       */
      version?: string | Expression<string> | PlaceholderValue;
      /** Build
       */
      build?: string | Expression<string> | PlaceholderValue;
    };
  };
      /** Campaign
       * @default {}
       */
      campaign?: {
        /** Campaign
     */
    campaignUi?: {
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Source
       */
      source?: string | Expression<string> | PlaceholderValue;
      /** Medium
       */
      medium?: string | Expression<string> | PlaceholderValue;
      /** Term
       */
      term?: string | Expression<string> | PlaceholderValue;
      /** Content
       */
      content?: string | Expression<string> | PlaceholderValue;
    };
  };
      /** Device
       * @default {}
       */
      device?: {
        /** Device
     */
    deviceUi?: {
      /** ID
       */
      id?: string | Expression<string> | PlaceholderValue;
      /** Manufacturer
       */
      manufacturer?: string | Expression<string> | PlaceholderValue;
      /** Model
       */
      model?: string | Expression<string> | PlaceholderValue;
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Type
       */
      type?: string | Expression<string> | PlaceholderValue;
      /** Version
       */
      version?: string | Expression<string> | PlaceholderValue;
    };
  };
    };
  };
/**
 * Integration
 * @default {}
 */
    integrations?: {
        /** Integration
     */
    integrationsUi?: {
      /** All
       * @default true
       */
      all?: boolean | Expression<boolean>;
      /** Salesforce
       * @default false
       */
      salesforce?: boolean | Expression<boolean>;
    };
  };
/**
 * Properties
 * @default {}
 */
    properties?: {
        /** Property
     */
    propertiesUi?: Array<{
      /** Key
       */
      key?: string | Expression<string> | PlaceholderValue;
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
};

export type SegmentV1TrackEventOutput = {
  success?: boolean;
};

export type SegmentV1TrackEventNode = {
  type: 'n8n-nodes-base.segment';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SegmentV1TrackEventParams>;
  output?: Items<SegmentV1TrackEventOutput>;
};