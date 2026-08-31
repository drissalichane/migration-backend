/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requester, operation=getAll
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Retrieve many agents */
export type FreshserviceV1RequesterGetAllParams = {
  resource: 'requester';
  operation: 'getAll';
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
 * Filters
 * @default {}
 */
    filters?: {
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    department_id?: string | Expression<string>;
    /** First Name
     */
    first_name?: string | Expression<string> | PlaceholderValue;
    /** Job Title
     */
    job_title?: string | Expression<string> | PlaceholderValue;
    /** Language
     */
    language?: 'en' | 'ar' | 'ca' | 'cs' | 'cy-GB' | 'da' | 'de' | 'es' | 'es-LA' | 'et' | 'fi' | 'fr' | 'he' | 'hu' | 'id' | 'it' | 'ja-JP' | 'ko' | 'LV' | 'nb-NO' | 'nl' | 'pl' | 'pt' | 'pt-BR' | 'pt-PT' | 'ru-RU' | 'sk' | 'sk-SK' | 'sl' | 'sv-SE' | 'th' | 'tr' | 'UK' | 'vi' | 'zh-CN' | 'zh-TW' | Expression<string>;
    /** Last Name
     */
    last_name?: string | Expression<string> | PlaceholderValue;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    location_id?: string | Expression<string>;
    /** Mobile Phone Number
     */
    mobile_phone_number?: string | Expression<string> | PlaceholderValue;
    /** Primary Email
     */
    primary_email?: string | Expression<string> | PlaceholderValue;
    /** Work Phone Number
     */
    work_phone_number?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1RequesterGetAllNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterGetAllParams>;
};