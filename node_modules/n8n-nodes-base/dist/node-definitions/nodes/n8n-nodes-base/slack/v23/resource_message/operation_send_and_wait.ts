/**
 * Slack Node - Version 2.3
 * Discriminator: resource=message, operation=sendAndWait
 */


interface Credentials {
  slackApi: CredentialReference;
  slackOAuth2Api: CredentialReference;
}

export type SlackV23MessageSendAndWaitParams = {
  resource: 'message';
  operation: 'sendAndWait';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Send Message To
 * @default user
 */
    select?: 'channel' | 'user' | Expression<string>;
/**
 * The Slack channel to send to
 * @displayOptions.show { select: ["channel"] }
 * @default {"mode":"list","value":""}
 */
    channelId?: { __rl: true; mode: 'list' | 'id' | 'name' | 'url'; value: string; cachedResultName?: string };
/**
 * User
 * @displayOptions.show { select: ["user"] }
 * @default {"mode":"list","value":""}
 */
    user?: { __rl: true; mode: 'list' | 'id' | 'username'; value: string; cachedResultName?: string };
/**
 * Message
 */
    message?: string | Expression<string> | PlaceholderValue;
/**
 * Response Type
 * @default approval
 */
    responseType?: 'approval' | 'freeText' | 'customForm' | Expression<string>;
/**
 * Define Form
 * @displayOptions.show { responseType: ["customForm"] }
 * @default fields
 */
    defineForm?: 'fields' | 'json';
/**
 * Form Fields
 * @hint &lt;a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.form/" target="_blank"&gt;See docs&lt;/a&gt; for field syntax
 * @displayOptions.show { defineForm: ["json"], responseType: ["customForm"] }
 */
    jsonOutput?: IDataObject | string | Expression<string>;
/**
 * Form Elements
 * @displayOptions.show { defineForm: ["fields"], responseType: ["customForm"] }
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
 * @displayOptions.show { responseType: ["approval"] }
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
/**
 * Options
 * @displayOptions.show { responseType: ["approval", "freeText", "customForm"] }
 * @default {}
 */
    options?: {
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
    /** Whether to include the phrase "This message was sent automatically with n8n" to the end of the message
     * @default true
     */
    appendAttribution?: boolean | Expression<boolean>;
    /** Provide another message's Timestamp value to make this message a reply
     * @default {}
     */
    thread_ts?: {
        /** Reply to a Message
     */
    replyValues?: {
      /** Message timestamps are included in output data of Slack nodes, abbreviated to ts
       */
      thread_ts?: number | Expression<number>;
      /** Whether the reply should be made visible to everyone in the channel or conversation
       * @default false
       */
      reply_broadcast?: boolean | Expression<boolean>;
    };
  };
  };
};

export type SlackV23MessageSendAndWaitOutput = {
  data?: {
    approved?: boolean;
  };
};

export type SlackV23MessageSendAndWaitNode = {
  type: 'n8n-nodes-base.slack';
  version: 2.3;
  credentials?: Credentials;
  config: NodeConfig<SlackV23MessageSendAndWaitParams>;
  output?: Items<SlackV23MessageSendAndWaitOutput>;
};