/**
 * Hunter Node - Version 1
 * Consume Hunter API
 */


export interface HunterV1Params {
/**
 * Operation to consume
 * @default domainSearch
 */
    operation?: 'domainSearch' | 'emailFinder' | 'emailVerifier';
/**
 * Domain name from which you want to find the email addresses. For example, "stripe.com".
 * @displayOptions.show { operation: ["domainSearch"] }
 */
    domain?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return only the found emails
 * @displayOptions.show { operation: ["domainSearch"] }
 * @default true
 */
    onlyEmails?: boolean | Expression<boolean>;
/**
 * Whether to return all results or only up to a given limit
 * @displayOptions.show { operation: ["domainSearch"] }
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { operation: ["domainSearch"], returnAll: [false] }
 * @default 100
 */
    limit?: number | Expression<number>;
/**
 * Filters
 * @displayOptions.show { operation: ["domainSearch"] }
 * @default {}
 */
    filters?: {
    /** Type
     */
    type?: 'personal' | 'generic' | Expression<string>;
    /** Seniority
     * @default []
     */
    seniority?: Array<'junior' | 'senior' | 'executive'>;
    /** Department
     * @default []
     */
    department?: Array<'communication' | 'executive' | 'finance' | 'hr' | 'it' | 'legal' | 'management' | 'marketing' | 'sales' | 'support'>;
  };
/**
 * The person's first name. It doesn't need to be in lowercase.
 * @displayOptions.show { operation: ["emailFinder"] }
 */
    firstname?: string | Expression<string> | PlaceholderValue;
/**
 * The person's last name. It doesn't need to be in lowercase.
 * @displayOptions.show { operation: ["emailFinder"] }
 */
    lastname?: string | Expression<string> | PlaceholderValue;
/**
 * The email address you want to verify
 * @displayOptions.show { operation: ["emailVerifier"] }
 */
    email?: string | Expression<string> | PlaceholderValue;
}

export interface HunterV1Credentials {
  hunterApi: CredentialReference;
}

interface HunterV1NodeBase {
  type: 'n8n-nodes-base.hunter';
  version: 1;
  credentials?: HunterV1Credentials;
}

export type HunterV1ParamsNode = HunterV1NodeBase & {
  config: NodeConfig<HunterV1Params>;
};

export type HunterV1Node = HunterV1ParamsNode;