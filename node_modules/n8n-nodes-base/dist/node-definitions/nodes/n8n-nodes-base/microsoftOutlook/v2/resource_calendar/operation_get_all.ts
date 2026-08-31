/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=calendar, operation=getAll
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** List and search calendars */
export type MicrosoftOutlookV2CalendarGetAllParams = {
  resource: 'calendar';
  operation: 'getAll';
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @default {}
 */
    filters?: {
    /** Filter Query
     * @hint Search query to filter calendars. &lt;a href="https://learn.microsoft.com/en-us/graph/filter-query-parameter"&gt;More info&lt;/a&gt;.
     */
    custom?: string | Expression<string> | PlaceholderValue;
  };
};

export type MicrosoftOutlookV2CalendarGetAllOutput = {
  allowedOnlineMeetingProviders?: Array<string>;
  canEdit?: boolean;
  canShare?: boolean;
  canViewPrivateItems?: boolean;
  changeKey?: string;
  color?: string;
  defaultOnlineMeetingProvider?: string;
  hexColor?: string;
  id?: string;
  isDefaultCalendar?: boolean;
  isRemovable?: boolean;
  isTallyingResponses?: boolean;
  name?: string;
  owner?: {
    address?: string;
    name?: string;
  };
};

export type MicrosoftOutlookV2CalendarGetAllNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2CalendarGetAllParams>;
  output?: Items<MicrosoftOutlookV2CalendarGetAllOutput>;
};