/**
 * Ldap Node - Version 1
 * Interact with LDAP servers
 */


export interface LdapV1Params {
  operation?: 'compare' | 'create' | 'delete' | 'rename' | 'search' | 'update';
  nodeDebug?: boolean;
/**
 * The distinguished name of the entry to compare
 * @displayOptions.show { operation: ["compare"] }
 */
    dn?: string | Expression<string> | PlaceholderValue;
/**
 * The ID of the attribute to compare
 * @displayOptions.show { operation: ["compare"] }
 * @default []
 */
    id?: string | Expression<string>;
/**
 * The value to compare
 * @displayOptions.show { operation: ["compare"] }
 */
    value?: string | Expression<string> | PlaceholderValue;
/**
 * The new distinguished name for the entry
 * @displayOptions.show { operation: ["rename"] }
 */
    targetDn?: string | Expression<string> | PlaceholderValue;
/**
 * Attributes to add to the entry
 * @displayOptions.show { operation: ["create"] }
 * @default {}
 */
    attributes?: {
        /** Attribute
     */
    attribute?: Array<{
      /** The ID of the attribute to add
       */
      id?: string | Expression<string> | PlaceholderValue;
      /** Value of the attribute to set
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
        /** Add
     */
    add?: Array<{
      /** The ID of the attribute to add
       */
      id?: string | Expression<string> | PlaceholderValue;
      /** Value of the attribute to set
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
        /** Replace
     */
    replace?: Array<{
      /** The ID of the attribute to replace
       */
      id?: string | Expression<string> | PlaceholderValue;
      /** Value of the attribute to replace
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
        /** Remove
     */
    'delete'?: Array<{
      /** The ID of the attribute to remove
       */
      id?: string | Expression<string> | PlaceholderValue;
      /** Value of the attribute to remove
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * The distinguished name of the subtree to search in
 * @displayOptions.show { operation: ["search"] }
 */
    baseDN?: string | Expression<string> | PlaceholderValue;
/**
 * Directory object class to search for
 * @displayOptions.show { operation: ["search"] }
 * @default []
 */
    searchFor?: string | Expression<string>;
/**
 * Custom LDAP filter. Escape these chars * ( ) \ with a backslash "\".
 * @displayOptions.show { operation: ["search"], searchFor: ["custom"] }
 * @default (objectclass=*)
 */
    customFilter?: string | Expression<string> | PlaceholderValue;
/**
 * Attribute to search for
 * @displayOptions.show { operation: ["search"] }
 * @displayOptions.hide { searchFor: ["custom"] }
 * @default []
 */
    attribute?: string | Expression<string>;
/**
 * Text to search for, Use * for a wildcard
 * @displayOptions.show { operation: ["search"] }
 * @displayOptions.hide { searchFor: ["custom"] }
 */
    searchText?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to return all results or only up to a given limit
 * @displayOptions.show { operation: ["search"] }
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { operation: ["search"], returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @displayOptions.show { operation: ["search"] }
 * @default {}
 */
    options?: {
    /** Comma-separated list of attributes to return. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    attributes?: string[];
    /** Maximum number of results to request at one time. Set to 0 to disable paging.
     * @default 1000
     */
    pageSize?: number | Expression<number>;
    /** The set of entries at or below the BaseDN that may be considered potential matches
     * @default sub
     */
    scope?: 'base' | 'one' | 'sub' | Expression<string>;
  };
}

export interface LdapV1Credentials {
  ldap: CredentialReference;
}

interface LdapV1NodeBase {
  type: 'n8n-nodes-base.ldap';
  version: 1;
  credentials?: LdapV1Credentials;
}

export type LdapV1ParamsNode = LdapV1NodeBase & {
  config: NodeConfig<LdapV1Params>;
};

export type LdapV1Node = LdapV1ParamsNode;