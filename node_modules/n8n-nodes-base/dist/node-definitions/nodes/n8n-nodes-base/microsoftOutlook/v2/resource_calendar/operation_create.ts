/**
 * Microsoft Outlook Node - Version 2
 * Discriminator: resource=calendar, operation=create
 */


interface Credentials {
  microsoftOutlookOAuth2Api: CredentialReference;
}

/** Create a new calendar */
export type MicrosoftOutlookV2CalendarCreateParams = {
  resource: 'calendar';
  operation: 'create';
/**
 * The name of the calendar to create
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** If set, the calendar will be created in the specified calendar group. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    calendarGroup?: string | Expression<string>;
    /** Specify the color to distinguish the calendar from the others
     * @default lightBlue
     */
    color?: 'lightBlue' | 'lightBrown' | 'lightGray' | 'lightGreen' | 'lightOrange' | 'lightPink' | 'lightRed' | 'lightTeal' | 'lightYellow' | Expression<string>;
  };
};

export type MicrosoftOutlookV2CalendarCreateOutput = {
  '@odata.context'?: string;
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

export type MicrosoftOutlookV2CalendarCreateNode = {
  type: 'n8n-nodes-base.microsoftOutlook';
  version: 2;
  credentials?: Credentials;
  config: NodeConfig<MicrosoftOutlookV2CalendarCreateParams>;
  output?: Items<MicrosoftOutlookV2CalendarCreateOutput>;
};