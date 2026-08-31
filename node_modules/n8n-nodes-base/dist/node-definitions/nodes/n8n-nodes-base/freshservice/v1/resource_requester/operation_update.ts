/**
 * Freshservice Node - Version 1
 * Discriminator: resource=requester, operation=update
 */


interface Credentials {
  freshserviceApi: CredentialReference;
}

/** Update an agent */
export type FreshserviceV1RequesterUpdateParams = {
  resource: 'requester';
  operation: 'update';
/**
 * ID of the requester to update
 */
    requesterId?: string | Expression<string> | PlaceholderValue;
/**
 * Update Fields
 * @default {}
 */
    updateFields?: {
    /** Address
     */
    address?: string | Expression<string> | PlaceholderValue;
    /** Background Information
     */
    background_information?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated IDs of the departments associated with the requester. Choose from the list or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    department_ids?: string[];
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
    /** Mobile Phone
     */
    mobile_phone_number?: string | Expression<string> | PlaceholderValue;
    /** Primary Email
     */
    primary_email?: string | Expression<string> | PlaceholderValue;
    /** Comma-separated secondary emails associated with the requester
     */
    secondary_emails?: string | Expression<string> | PlaceholderValue;
    /** Time Format
     * @default 12h
     */
    time_format?: '12h' | '24h' | Expression<string>;
    /** Work Phone
     */
    work_phone_number?: string | Expression<string> | PlaceholderValue;
  };
};

export type FreshserviceV1RequesterUpdateNode = {
  type: 'n8n-nodes-base.freshservice';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<FreshserviceV1RequesterUpdateParams>;
};