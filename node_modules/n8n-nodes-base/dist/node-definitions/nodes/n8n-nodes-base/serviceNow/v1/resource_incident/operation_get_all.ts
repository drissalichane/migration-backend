/**
 * ServiceNow Node - Version 1
 * Discriminator: resource=incident, operation=getAll
 */


interface Credentials {
  serviceNowOAuth2Api: CredentialReference;
  serviceNowBasicApi: CredentialReference;
}

/** Get many attachments on a table */
export type ServiceNowV1IncidentGetAllParams = {
  resource: 'incident';
  operation: 'getAll';
/**
 * Authentication method to use
 * @default oAuth2
 */
    authentication?: 'basicAuth' | 'oAuth2' | Expression<string>;
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

export type ServiceNowV1IncidentGetAllOutput = {
  active?: string;
  activity_due?: string;
  additional_assignee_list?: string;
  approval?: string;
  approval_history?: string;
  approval_set?: string;
  business_duration?: string;
  business_impact?: string;
  business_stc?: string;
  calendar_duration?: string;
  calendar_stc?: string;
  caller_id?: {
    link?: string;
    value?: string;
  };
  cause?: string;
  caused_by?: string;
  close_notes?: string;
  closed_at?: string;
  comments?: string;
  comments_and_work_notes?: string;
  correlation_display?: string;
  correlation_id?: string;
  description?: string;
  due_date?: string;
  escalation?: string;
  expected_start?: string;
  follow_up?: string;
  group_list?: string;
  hold_reason?: string;
  impact?: string;
  knowledge?: string;
  made_sla?: string;
  notify?: string;
  opened_by?: {
    link?: string;
    value?: string;
  };
  order?: string;
  origin_table?: string;
  parent?: string;
  reassignment_count?: string;
  reopen_count?: string;
  reopened_time?: string;
  resolved_at?: string;
  resolved_by?: {
    link?: string;
    value?: string;
  };
  route_reason?: string;
  severity?: string;
  sla_due?: string;
  state?: string;
  sys_class_name?: string;
  sys_created_by?: string;
  sys_created_on?: string;
  sys_domain?: {
    link?: string;
    value?: string;
  };
  sys_domain_path?: string;
  sys_mod_count?: string;
  sys_tags?: string;
  sys_updated_by?: string;
  task_effective_number?: string;
  time_worked?: string;
  universal_request?: string;
  upon_approval?: string;
  upon_reject?: string;
  urgency?: string;
  user_input?: string;
  watch_list?: string;
  work_end?: string;
  work_notes?: string;
  work_notes_list?: string;
  work_start?: string;
};

export type ServiceNowV1IncidentGetAllNode = {
  type: 'n8n-nodes-base.serviceNow';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ServiceNowV1IncidentGetAllParams>;
  output?: Items<ServiceNowV1IncidentGetAllOutput>;
};