/**
 * LinkedIn Node - Version 1
 * Discriminator: resource=post, operation=create
 */


interface Credentials {
  linkedInOAuth2Api: CredentialReference;
  linkedInCommunityManagementOAuth2Api: CredentialReference;
}

/** Create a new post */
export type LinkedInV1PostCreateParams = {
  resource: 'post';
  operation: 'create';
  authentication?: 'standard' | 'communityManagement' | Expression<string>;
/**
 * If to post on behalf of a user or an organization
 * @default person
 */
    postAs?: 'person' | 'organization' | Expression<string>;
/**
 * Person as which the post should be posted as. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 * @displayOptions.show { postAs: ["person"] }
 */
    person?: string | Expression<string>;
/**
 * URN of Organization as which the post should be posted as
 * @displayOptions.show { postAs: ["organization"] }
 */
    organization?: string | Expression<string> | PlaceholderValue;
/**
 * The primary content of the post
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * Media Category
 * @default NONE
 */
    shareMediaCategory?: 'NONE' | 'ARTICLE' | 'IMAGE' | Expression<string>;
/**
 * Input Binary Field
 * @hint The name of the input binary field containing the file to be written
 * @displayOptions.show { shareMediaCategory: ["IMAGE"] }
 * @default data
 */
    binaryPropertyName?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Provide a short description for your image or article
     * @displayOptions.show { /shareMediaCategory: ["ARTICLE"] }
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Provide the URL of the article you would like to share here
     * @displayOptions.show { /shareMediaCategory: ["ARTICLE"] }
     */
    originalUrl?: string | Expression<string> | PlaceholderValue;
    /** Input Binary Field
     * @hint The name of the input binary field containing the file for the article thumbnail
     * @displayOptions.show { /shareMediaCategory: ["ARTICLE"] }
     * @default data
     */
    thumbnailBinaryPropertyName?: string | Expression<string> | PlaceholderValue;
    /** Customize the title of your image or article
     * @displayOptions.show { /shareMediaCategory: ["ARTICLE", "IMAGE"] }
     */
    title?: string | Expression<string> | PlaceholderValue;
    /** Dictate if post will be seen by the public or only connections
     * @displayOptions.show { /postAs: ["person"] }
     * @default PUBLIC
     */
    visibility?: 'CONNECTIONS' | 'PUBLIC' | Expression<string>;
  };
};

export type LinkedInV1PostCreateOutput = {
  urn?: string;
};

export type LinkedInV1PostCreateNode = {
  type: 'n8n-nodes-base.linkedIn';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<LinkedInV1PostCreateParams>;
  output?: Items<LinkedInV1PostCreateOutput>;
};