/**
 * n8n Form Trigger Node - Version 2.5
 * Generate webforms in n8n and pass their responses to the workflow
 */


export interface FormTriggerV25Params {
  authentication?: 'basicAuth' | 'none' | Expression<string>;
/**
 * Shown at the top of the form
 */
    formTitle?: string | Expression<string> | PlaceholderValue;
/**
 * Shown underneath the Form Title. Can be used to prompt the user on how to complete the form. Accepts HTML. Does not accept &lt;code&gt;&lt;script&gt;&lt;/code&gt;, &lt;code&gt;&lt;style&gt;&lt;/code&gt; or &lt;code&gt;&lt;input&gt;&lt;/code&gt; tags.
 */
    formDescription?: string | Expression<string> | PlaceholderValue;
/**
 * Form Elements
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
 * When to respond to the form submission
 * @default onReceived
 */
    responseMode?: 'onReceived' | 'lastNode' | Expression<string>;
  options?: {
    /** Whether to include the link “Form automated with n8n” at the bottom of the form
     * @default true
     */
    appendAttribution?: boolean | Expression<boolean>;
    /** Comma-separated list of allowed IP addresses or CIDR ranges. Leave empty to allow all IPs.
     */
    ipWhitelist?: string | Expression<string> | PlaceholderValue;
    /** The label of the submit button in the form
     * @default Submit
     */
    buttonLabel?: string | Expression<string> | PlaceholderValue;
    /** The final segment of the form's URL, both for test and production
     */
    path?: string | Expression<string> | PlaceholderValue;
    /** Form Response
     * @displayOptions.hide { /responseMode: ["responseNode"] }
     * @default {"values":{"respondWith":"text"}}
     */
    respondWithOptions?: {
        /** Values
     */
    values?: {
      /** Respond With
       * @default text
       */
      respondWith?: 'text' | 'redirect' | Expression<string>;
      /** The text displayed to users after they fill the form. Leave it empty if don't want to show any additional text.
       * @displayOptions.show { respondWith: ["text"] }
       * @default Your response has been recorded
       */
      formSubmittedText?: string | Expression<string> | PlaceholderValue;
      /** The URL to redirect users to after they fill the form. Must be a valid URL.
       * @displayOptions.show { respondWith: ["redirect"] }
       */
      redirectUrl?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Whether to ignore requests from bots like link previewers and web crawlers
     * @default false
     */
    ignoreBots?: boolean | Expression<boolean>;
    /** Whether to use the workflow timezone in 'submittedAt' field or UTC
     * @default false
     */
    useWorkflowTimezone?: boolean | Expression<boolean>;
    /** Whether to use the workflow timezone in 'submittedAt' field or UTC
     * @default true
     */
    useWorkflowTimezone?: boolean | Expression<boolean>;
    /** Override default styling of the public form interface with CSS
     */
    customCss?: string | Expression<string> | PlaceholderValue;
  };
}

export interface FormTriggerV25Credentials {
  httpBasicAuth: CredentialReference;
}

interface FormTriggerV25NodeBase {
  type: 'n8n-nodes-base.formTrigger';
  version: 2.5;
  credentials?: FormTriggerV25Credentials;
  isTrigger: true;
}

export type FormTriggerV25ParamsNode = FormTriggerV25NodeBase & {
  config: NodeConfig<FormTriggerV25Params>;
};

export type FormTriggerV25Node = FormTriggerV25ParamsNode;