/**
 * Strava Node - Version 1
 * Discriminator: resource=activity, operation=update
 */


interface Credentials {
  stravaOAuth2Api: CredentialReference;
}

/** Update an activity */
export type StravaV1ActivityUpdateParams = {
  resource: 'activity';
  operation: 'update';
/**
 * ID or email of activity
 */
    activityId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Whether to mark as commute
     * @default false
     */
    commute?: boolean | Expression<boolean>;
    /** Description of the activity
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Identifier for the gear associated with the activity. ‘none’ clears gear from activity.
     */
    gear_id?: string | Expression<string> | PlaceholderValue;
    /** Do not publish to Home or Club feeds
     * @default false
     */
    hide_from_home?: boolean | Expression<boolean>;
    /** The name of the activity
     */
    name?: string | Expression<string> | PlaceholderValue;
    /** Type of activity. For example - Run, Ride etc.
     */
    type?: string | Expression<string> | PlaceholderValue;
    /** Type of sport
     * @default Run
     */
    sport_type?: 'AlpineSki' | 'BackcountrySki' | 'Badminton' | 'Canoeing' | 'Crossfit' | 'EBikeRide' | 'Elliptical' | 'EMountainBikeRide' | 'Golf' | 'GravelRide' | 'Handcycle' | 'HighIntensityIntervalTraining' | 'Hike' | 'IceSkate' | 'InlineSkate' | 'Kayaking' | 'Kitesurf' | 'MountainBikeRide' | 'NordicSki' | 'Pickleball' | 'Pilates' | 'Racquetball' | 'Ride' | 'RockClimbing' | 'RollerSki' | 'Rowing' | 'Run' | 'Sail' | 'Skateboard' | 'Snowboard' | 'Snowshoe' | 'Soccer' | 'Squash' | 'StairStepper' | 'StandUpPaddling' | 'Surfing' | 'Swim' | 'TableTennis' | 'Tennis' | 'TrailRun' | 'Velomobile' | 'VirtualRide' | 'VirtualRow' | 'VirtualRun' | 'Walk' | 'WeightTraining' | 'Wheelchair' | 'Windsurf' | 'Workout' | 'Yoga' | Expression<string>;
    /** Whether to mark as a trainer activity
     * @default false
     */
    trainer?: boolean | Expression<boolean>;
  };
};

export type StravaV1ActivityUpdateNode = {
  type: 'n8n-nodes-base.strava';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StravaV1ActivityUpdateParams>;
};