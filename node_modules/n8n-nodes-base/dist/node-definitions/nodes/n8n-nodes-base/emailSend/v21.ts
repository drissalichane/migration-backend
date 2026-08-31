/**
 * Send Email Node - Version 2.1
 * Sends an email using SMTP protocol
 */


export interface EmailSendV21Params {
  resource?: unknown;
/**
 * Operation
 * @displayOptions.show { resource: ["email"] }
 * @default send
 */
    operation?: 'send' | 'sendAndWait';
/**
 * Email address of the sender. You can also specify a name: Nathan Doe &lt;nate@n8n.io&gt;.
 * @displayOptions.show { resource: ["email"], operation: ["send", "sendAndWait"] }
 */
    fromEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Email address of the recipient. You can also specify a name: Nathan Doe &lt;nate@n8n.io&gt;.
 * @displayOptions.show { resource: ["email"], operation: ["send", "sendAndWait"] }
 */
    toEmail?: string | Expression<string> | PlaceholderValue;
/**
 * Subject line of the email
 * @displayOptions.show { resource: ["email"], operation: ["send", "sendAndWait"] }
 */
    subject?: string | Expression<string> | PlaceholderValue;
/**
 * Email Format
 * @displayOptions.show { resource: ["email"], operation: ["send"] }
 * @default html
 */
    emailFormat?: 'text' | 'html' | 'both' | Expression<string>;
/**
 * Plain text message of email
 * @displayOptions.show { emailFormat: ["text", "both"], resource: ["email"], operation: ["send"] }
 */
    text?: string | Expression<string> | PlaceholderValue;
/**
 * HTML text message of email
 * @displayOptions.show { emailFormat: ["html", "both"], resource: ["email"], operation: ["send"] }
 */
    html?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @displayOptions.show { resource: ["email"], operation: ["send", "sendAndWait"], responseType: ["approval", "freeText", "customForm"] }
 * @default {}
 */
    options?: {
    /** Whether to include the phrase “This email was sent automatically with n8n” to the end of the email
     * @default true
     */
    appendAttribution?: boolean | Expression<boolean>;
    /** Name of the binary properties that contain data to add to email as attachment. Multiple ones can be comma-separated. Reference embedded images or other content within the body of an email message, e.g. &lt;img src="cid:image_1"&gt;
     */
    attachments?: string | Expression<string> | PlaceholderValue;
    /** Email address of CC recipient
     */
    ccEmail?: string | Expression<string> | PlaceholderValue;
    /** Email address of BCC recipient
     */
    bccEmail?: string | Expression<string> | PlaceholderValue;
    /** Whether to connect even if SSL certificate validation is not possible
     * @default false
     */
    allowUnauthorizedCerts?: boolean | Expression<boolean>;
    /** The email address to send the reply to
     */
    replyTo?: string | Expression<string> | PlaceholderValue;
    /** Whether to limit the time this node should wait for a user response before execution resumes
     * @default {"values":{"limitType":"afterTimeInterval","resumeAmount":45,"resumeUnit":"minutes"}}
     */
    limitWaitTime?: {
        /** Values
     */
    values?: {
      /** Sets the condition for the execution to resume. Can be a specified date or after some time.
       * @default afterTimeInterval
       */
      limitType?: 'afterTimeInterval' | 'atSpecifiedTime' | Expression<string>;
      /** The time to wait
       * @displayOptions.show { limitType: ["afterTimeInterval"] }
       * @default 1
       */
      resumeAmount?: number | Expression<number>;
      /** Unit of the interval value
       * @displayOptions.show { limitType: ["afterTimeInterval"] }
       * @default hours
       */
      resumeUnit?: 'minutes' | 'hours' | 'days' | Expression<string>;
      /** Continue execution after the specified date and time
       * @displayOptions.show { limitType: ["atSpecifiedTime"] }
       */
      maxDateAndTime?: string | Expression<string>;
    };
  };
    /** Message Button Label
     * @default Respond
     */
    messageButtonLabel?: string | Expression<string> | PlaceholderValue;
    /** Title of the form that the user can access to provide their response
     */
    responseFormTitle?: string | Expression<string> | PlaceholderValue;
    /** Description of the form that the user can access to provide their response
     */
    responseFormDescription?: string | Expression<string> | PlaceholderValue;
    /** Response Form Button Label
     * @default Submit
     */
    responseFormButtonLabel?: string | Expression<string> | PlaceholderValue;
    /** Override default styling of the response form with CSS
     */
    responseFormCustomCss?: string | Expression<string> | PlaceholderValue;
  };
/**
 * Message
 * @displayOptions.show { resource: ["email"], operation: ["sendAndWait"] }
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Response Type
 * @displayOptions.show { resource: ["email"], operation: ["sendAndWait"] }
 * @default approval
 */
    responseType?: 'approval' | 'freeText' | 'customForm' | Expression<string>;
/**
 * Define Form
 * @displayOptions.show { responseType: ["customForm"], resource: ["email"], operation: ["sendAndWait"] }
 * @default fields
 */
    defineForm?: 'fields' | 'json';
/**
 * Form Fields
 * @hint &lt;a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.form/" target="_blank"&gt;See docs&lt;/a&gt; for field syntax
 * @displayOptions.show { defineForm: ["json"], responseType: ["customForm"], resource: ["email"], operation: ["sendAndWait"] }
 */
    jsonOutput?: IDataObject | string | Expression<string>;
/**
 * Form Elements
 * @displayOptions.show { defineForm: ["fields"], responseType: ["customForm"], resource: ["email"], operation: ["sendAndWait"] }
 * @default {}
 */
    formFields?: {
        /** Values
     */
    values?: Array<{
      /** The name of the field, used in input attributes and referenced by the workflow
       * @displayOptions.hide { fieldType: ["html"] }
       */
      fieldName?: string | Expression<string> | PlaceholderValue;
      /** Label that appears above the input field
       * @displayOptions.hide { fieldType: ["hiddenField", "html"] }
       */
      fieldLabel?: string | Expression<string> | PlaceholderValue;
      /** Label that appears above the input field
       * @displayOptions.hide { fieldType: ["hiddenField", "html"] }
       */
      fieldLabel?: string | Expression<string> | PlaceholderValue;
      /** The name of the field, used in input attributes and referenced by the workflow
       * @displayOptions.show { fieldType: ["hiddenField"] }
       */
      fieldName?: string | Expression<string> | PlaceholderValue;
      /** The type of field to add to the form
       * @default text
       */
      fieldType?: 'checkbox' | 'html' | 'date' | 'dropdown' | 'email' | 'file' | 'hiddenField' | 'number' | 'password' | 'radio' | 'text' | 'textarea' | Expression<string>;
      /** Optional field. It can be used to include the html in the output.
       * @displayOptions.show { fieldType: ["html"] }
       */
      elementName?: string | Expression<string> | PlaceholderValue;
      /** The name of the field, used in input attributes and referenced by the workflow
       * @displayOptions.hide { fieldType: ["html"] }
       */
      fieldName?: string | Expression<string> | PlaceholderValue;
      /** Sample text to display inside the field
       * @displayOptions.hide { fieldType: ["dropdown", "date", "file", "html", "hiddenField", "radio", "checkbox"] }
       */
      placeholder?: string | Expression<string> | PlaceholderValue;
      /** Default value that will be pre-filled in the form field
       * @displayOptions.show { fieldType: ["text", "number", "email", "textarea"] }
       */
      defaultValue?: string | Expression<string> | PlaceholderValue;
      /** Default date value that will be pre-filled in the form field (format: YYYY-MM-DD)
       * @displayOptions.show { fieldType: ["date"] }
       */
      defaultValue?: string | Expression<string>;
      /** Default value that will be pre-selected. Must match one of the option labels.
       * @displayOptions.show { fieldType: ["dropdown", "radio"] }
       */
      defaultValue?: string | Expression<string> | PlaceholderValue;
      /** Default value(s) that will be pre-selected. Must match one or multiple of the option labels. Separate multiple pre-selected options with a comma.
       * @displayOptions.show { fieldType: ["checkbox"] }
       */
      defaultValue?: string | Expression<string> | PlaceholderValue;
      /** Input value can be set here or will be passed as a query parameter via Field Name if no value is set
       * @displayOptions.show { fieldType: ["hiddenField"] }
       */
      fieldValue?: string | Expression<string> | PlaceholderValue;
      /** List of options that can be selected from the dropdown
       * @displayOptions.show { fieldType: ["dropdown"] }
       * @default {"values":[{"option":""}]}
       */
      fieldOptions?: {
        /** Values
     */
    values?: Array<{
      /** Option
       */
      option?: string | Expression<string> | PlaceholderValue;
    }>;
  };
      /** Checkboxes
       * @displayOptions.show { fieldType: ["checkbox"] }
       * @default {"values":[{"option":""}]}
       */
      fieldOptions?: {
        /** Values
     */
    values?: Array<{
      /** Checkbox Label
       */
      option?: string | Expression<string> | PlaceholderValue;
    }>;
  };
      /** Radio Buttons
       * @displayOptions.show { fieldType: ["radio"] }
       * @default {"values":[{"option":""}]}
       */
      fieldOptions?: {
        /** Values
     */
    values?: Array<{
      /** Radio Button Label
       */
      option?: string | Expression<string> | PlaceholderValue;
    }>;
  };
      /** Whether to allow the user to select multiple options from the dropdown list
       * @displayOptions.show { fieldType: ["dropdown"] }
       * @default false
       */
      multiselect?: boolean | Expression<boolean>;
      /** Limit Selection
       * @displayOptions.show { fieldType: ["checkbox"] }
       * @default unlimited
       */
      limitSelection?: 'exact' | 'range' | 'unlimited' | Expression<string>;
      /** Number of Selections
       * @displayOptions.show { fieldType: ["checkbox"], limitSelection: ["exact"] }
       * @default 1
       */
      numberOfSelections?: number | Expression<number>;
      /** Minimum Selections
       * @displayOptions.show { fieldType: ["checkbox"], limitSelection: ["range"] }
       * @default 0
       */
      minSelections?: number | Expression<number>;
      /** Maximum Selections
       * @displayOptions.show { fieldType: ["checkbox"], limitSelection: ["range"] }
       * @default 1
       */
      maxSelections?: number | Expression<number>;
      /** HTML elements to display on the form page
       * @hint Does not accept &lt;code&gt;&lt;script&gt;&lt;/code&gt;, &lt;code&gt;&lt;style&gt;&lt;/code&gt; or &lt;code&gt;&lt;input&gt;&lt;/code&gt; tags
       * @displayOptions.show { fieldType: ["html"] }
       */
      html?: string;
      /** Whether to allow the user to select multiple files from the file input or just one
       * @displayOptions.show { fieldType: ["file"] }
       * @default true
       */
      multipleFiles?: boolean | Expression<boolean>;
      /** Comma-separated list of allowed file extensions
       * @hint Leave empty to allow all file types
       * @displayOptions.show { fieldType: ["file"] }
       */
      acceptFileTypes?: string | Expression<string> | PlaceholderValue;
      /** Whether to require the user to enter a value for this field before submitting the form
       * @displayOptions.hide { fieldType: ["html", "hiddenField"] }
       * @default false
       */
      requiredField?: boolean | Expression<boolean>;
    }>;
  };
/**
 * Approval Options
 * @displayOptions.show { responseType: ["approval"], resource: ["email"], operation: ["sendAndWait"] }
 * @default {}
 */
    approvalOptions?: {
        /** Values
     */
    values?: {
      /** Type of Approval
       * @default single
       */
      approvalType?: 'single' | 'double' | Expression<string>;
      /** Approve Button Label
       * @displayOptions.show { approvalType: ["single", "double"] }
       * @default Approve
       */
      approveLabel?: string | Expression<string> | PlaceholderValue;
      /** Approve Button Style
       * @displayOptions.show { approvalType: ["single", "double"] }
       * @default primary
       */
      buttonApprovalStyle?: 'primary' | 'secondary' | Expression<string>;
      /** Disapprove Button Label
       * @displayOptions.show { approvalType: ["double"] }
       * @default Decline
       */
      disapproveLabel?: string | Expression<string> | PlaceholderValue;
      /** Disapprove Button Style
       * @displayOptions.show { approvalType: ["double"] }
       * @default secondary
       */
      buttonDisapprovalStyle?: 'primary' | 'secondary' | Expression<string>;
    };
  };
}

export interface EmailSendV21Credentials {
  smtp: CredentialReference;
}

interface EmailSendV21NodeBase {
  type: 'n8n-nodes-base.emailSend';
  version: 2.1;
  credentials?: EmailSendV21Credentials;
}

export type EmailSendV21ParamsNode = EmailSendV21NodeBase & {
  config: NodeConfig<EmailSendV21Params>;
};

export type EmailSendV21Node = EmailSendV21ParamsNode;