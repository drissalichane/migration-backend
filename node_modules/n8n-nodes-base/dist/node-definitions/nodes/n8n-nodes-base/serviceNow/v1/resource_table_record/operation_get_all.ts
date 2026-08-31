/**
 * ServiceNow Node - Version 1
 * Discriminator: resource=tableRecord, operation=getAll
 */


interface Credentials {
  serviceNowOAuth2Api: CredentialReference;
  serviceNowBasicApi: CredentialReference;
}

/** Get many attachments on a table */
export type ServiceNowV1TableRecordGetAllParams = {
  resource: 'tableRecord';
  operation: 'getAll';
/**
 * Authentication method to use
 * @default oAuth2
 */
    authentication?: 'basicAuth' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    tableName?: string | Expression<string>;
/**
 * Whether to return all results or only up to a given limit
 * @default false
 */
    returnAll?: boolean | Expression<boolean>;
/**
 * Max number of results to return
 * @displayOptions.show { returnAll: [false] }
 * @default 50
 */
    limit?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to exclude Table API links for reference fields
     * @default false
     */
    sysparm_exclude_reference_link?: boolean | Expression<boolean>;
    /** A list of fields to return. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @hint String of comma separated values or an array of strings can be set in an expression
     * @default []
     */
    sysparm_fields?: string[];
    /** An encoded query string used to filter the results. &lt;a href="https://developer.servicenow.com/dev.do#!/learn/learning-plans/quebec/servicenow_application_developer/app_store_learnv2_rest_quebec_more_about_query_parameters"&gt;More info&lt;/a&gt;.
     */
    sysparm_query?: string | Expression<string> | PlaceholderValue;
    /** Choose which values to return
     * @default false
     */
    sysparm_display_value?: 'false' | 'all' | 'true' | Expression<string>;
  };
};

export type ServiceNowV1TableRecordGetAllOutput = {
  state?: string;
  sys_class_name?: string;
  sys_created_by?: string;
  sys_created_on?: string;
  sys_mod_count?: string;
  sys_tags?: string;
  sys_updated_by?: string;
  sys_updated_on?: string;
};

export type ServiceNowV1TableRecordGetAllNode = {
  type: 'n8n-nodes-base.serviceNow';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ServiceNowV1TableRecordGetAllParams>;
  output?: Items<ServiceNowV1TableRecordGetAllOutput>;
};