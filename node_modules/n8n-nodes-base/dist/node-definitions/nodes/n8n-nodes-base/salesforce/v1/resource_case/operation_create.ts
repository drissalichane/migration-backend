/**
 * Salesforce Node - Version 1
 * Discriminator: resource=case, operation=create
 */


interface Credentials {
  salesforceOAuth2Api: CredentialReference;
  salesforceJwtApi: CredentialReference;
}

/** Represents a case, which is a customer issue or problem */
export type SalesforceV1CaseCreateParams = {
  resource: 'case';
  operation: 'create';
/**
 * OAuth Authorization Flow
 * @default oAuth2
 */
    authentication?: 'oAuth2' | 'jwt' | Expression<string>;
/**
 * The type of case. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
 */
    type?: string | Expression<string>;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** ID of the account associated with this case
     */
    accountId?: string | Expression<string> | PlaceholderValue;
    /** ID of the associated Contact
     */
    contactId?: string | Expression<string> | PlaceholderValue;
    /** Filter by custom fields
     * @default {}
     */
    customFieldsUi?: {
        /** Custom Field
     */
    customFieldsValues?: Array<{
      /** The ID of the field to add custom field to. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      fieldId?: string | Expression<string>;
      /** The value to set on custom field
       */
      value?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** A text description of the case. Limit: 32 KB.
     */
    description?: string | Expression<string> | PlaceholderValue;
    /** Whether indicates whether the case has been escalated (true) or not
     * @default false
     */
    isEscalated?: boolean | Expression<boolean>;
    /** The source of the case, such as Email, Phone, or Web. Label is Case Origin. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    origin?: string | Expression<string>;
    /** The owner of the case. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    owner?: string | Expression<string>;
    /** The ID of the parent case in the hierarchy. The label is Parent Case.
     */
    ParentId?: string | Expression<string> | PlaceholderValue;
    /** The importance or urgency of the case, such as High, Medium, or Low. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    priority?: string | Expression<string>;
    /** The reason why the case was created, such as Instructions not clear, or User didn’t attend training. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    reason?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    recordTypeId?: string | Expression<string>;
    /** The status of the case, such as “New,” “Closed,” or “Escalated.” This field directly controls the IsClosed flag. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     */
    status?: string | Expression<string>;
    /** The subject of the case. Limit: 255 characters.
     */
    subject?: string | Expression<string> | PlaceholderValue;
    /** The company name that was entered when the case was created. This field can't be updated after the case has been created..
     */
    suppliedCompany?: string | Expression<string> | PlaceholderValue;
    /** The email address that was entered when the case was created. This field can't be updated after the case has been created.
     */
    suppliedEmail?: string | Expression<string> | PlaceholderValue;
    /** The name that was entered when the case was created. This field can't be updated after the case has been created.
     */
    suppliedName?: string | Expression<string> | PlaceholderValue;
    /** The phone number that was entered when the case was created. This field can't be updated after the case has been created.
     */
    suppliedPhone?: string | Expression<string> | PlaceholderValue;
  };
};

export type SalesforceV1CaseCreateOutput = {
  id?: string;
  success?: boolean;
};

export type SalesforceV1CaseCreateNode = {
  type: 'n8n-nodes-base.salesforce';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<SalesforceV1CaseCreateParams>;
  output?: Items<SalesforceV1CaseCreateOutput>;
};