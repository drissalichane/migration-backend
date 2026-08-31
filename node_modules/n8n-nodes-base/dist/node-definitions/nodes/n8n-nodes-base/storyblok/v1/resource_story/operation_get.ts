/**
 * Storyblok Node - Version 1
 * Discriminator: resource=story, operation=get
 */


interface Credentials {
  storyblokContentApi: CredentialReference;
  storyblokManagementApi: CredentialReference;
}

/** Get a story */
export type StoryblokV1StoryGetParams = {
  resource: 'story';
  operation: 'get';
/**
 * Pick where your data comes from, Content or Management API
 * @default contentApi
 */
    source?: 'contentApi' | 'managementApi' | Expression<string>;
/**
 * The ID or slug of the story to get
 * @displayOptions.show { source: ["contentApi"] }
 */
    identifier?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the space. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { source: ["managementApi"] }
 */
    space?: string | Expression<string>;
/**
 * Numeric ID of the story
 * @displayOptions.show { source: ["managementApi"] }
 */
    storyId?: string | Expression<string> | PlaceholderValue;
};

export type StoryblokV1StoryGetNode = {
  type: 'n8n-nodes-base.storyblok';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<StoryblokV1StoryGetParams>;
};