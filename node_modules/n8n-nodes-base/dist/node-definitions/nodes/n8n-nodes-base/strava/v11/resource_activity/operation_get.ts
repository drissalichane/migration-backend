/**
 * Strava Node - Version 1.1
 * Discriminator: resource=activity, operation=get
 */


interface Credentials {
  stravaOAuth2Api: CredentialReference;
}

/** Get an activity */
export type StravaV11ActivityGetParams = {
  resource: 'activity';
  operation: 'get';
/**
 * ID or email of activity
 */
    activityId?: string | Expression<string> | PlaceholderValue;
};

export type StravaV11ActivityGetNode = {
  type: 'n8n-nodes-base.strava';
  version: 1.1;
  credentials?: Credentials;
  config: NodeConfig<StravaV11ActivityGetParams>;
};