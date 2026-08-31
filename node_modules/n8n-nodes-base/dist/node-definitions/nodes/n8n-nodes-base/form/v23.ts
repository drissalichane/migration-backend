/**
 * n8n Form Node - Version 2.3
 * Generate webforms in n8n and pass their responses to the workflow
 */


export interface FormV23Params {
  operation?: 'page' | 'completion';
/**
 * Define Form
 * @displayOptions.show { operation: ["page"] }
 * @default fields
 */
    defineForm?: 'fields' | 'json';
/**
 * Form Fields
 * @hint &lt;a href="https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.form/" target="_blank"&gt;See docs&lt;/a&gt; for field syntax
 * @displayOptions.show { defineForm: ["json"], operation: ["page"] }
 */
    jsonOutput?: IDataObject | string | Expression<string>;
/**
 * Form Elements
 * @displayOptions.show { defineForm: ["fields"], operation: ["page"] }
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
 * Whether to limit the time this node should wait for a user response before execution resumes
 * @displayOptions.show { operation: ["page", "completion"] }
 * @default false
 */
    limitWaitTime?: boolean | Expression<boolean>;
/**
 * Sets the condition for the execution to resume. Can be a specified date or after some time.
 * @displayOptions.show { limitWaitTime: [true], operation: ["page", "completion"] }
 * @default afterTimeInterval
 */
    limitType?: 'afterTimeInterval' | 'atSpecifiedTime' | Expression<string>;
/**
 * The time to wait
 * @displayOptions.show { limitType: ["afterTimeInterval"], limitWaitTime: [true], operation: ["page", "completion"] }
 * @default 1
 */
    resumeAmount?: number | Expression<number>;
/**
 * Unit of the interval value
 * @displayOptions.show { limitType: ["afterTimeInterval"], limitWaitTime: [true], operation: ["page", "completion"] }
 * @default hours
 */
    resumeUnit?: 'minutes' | 'hours' | 'days' | Expression<string>;
/**
 * Continue execution after the specified date and time
 * @displayOptions.show { limitType: ["atSpecifiedTime"], limitWaitTime: [true], operation: ["page", "completion"] }
 */
    maxDateAndTime?: string | Expression<string>;
/**
 * Options
 * @displayOptions.show { operation: ["page", "completion"], respondWith: ["text", "returnBinary", "redirect"] }
 * @default {}
 */
    options?: {
    /** Shown at the top of the form
     */
    formTitle?: string | Expression<string> | PlaceholderValue;
    /** Shown underneath the Form Title. Can be used to prompt the user on how to complete the form. Accepts HTML. Does not accept &lt;code&gt;&lt;script&gt;&lt;/code&gt;, &lt;code&gt;&lt;style&gt;&lt;/code&gt; or &lt;code&gt;&lt;input&gt;&lt;/code&gt; tags.
     */
    formDescription?: string | Expression<string> | PlaceholderValue;
    /** Button Label
     * @default Submit
     */
    buttonLabel?: string | Expression<string> | PlaceholderValue;
    /** Override default styling of the public form interface with CSS
     */
    customCss?: string | Expression<string> | PlaceholderValue;
  };
/**
 * On n8n Form Submission
 * @displayOptions.show { operation: ["completion"] }
 * @default text
 */
    respondWith?: 'text' | 'redirect' | 'showText' | 'returnBinary' | Expression<string>;
/**
 * URL
 * @displayOptions.show { respondWith: ["redirect"], operation: ["completion"] }
 */
    redirectUrl?: string | Expression<string> | PlaceholderValue;
/**
 * Completion Title
 * @displayOptions.show { respondWith: ["text", "returnBinary"], operation: ["completion"] }
 */
    completionTitle?: string | Expression<string> | PlaceholderValue;
/**
 * Completion Message
 * @displayOptions.show { respondWith: ["text", "returnBinary"], operation: ["completion"] }
 */
    completionMessage?: string | Expression<string> | PlaceholderValue;
/**
 * The text to display on the page. Use HTML to show a customized web page.
 * @displayOptions.show { respondWith: ["showText"], operation: ["completion"] }
 */
    responseText?: string | Expression<string> | PlaceholderValue;
/**
 * Find the name of input field containing the binary data to return in the Input panel on the left, in the Binary tab
 * @hint The name of the input field containing the binary file data to be returned
 * @displayOptions.show { respondWith: ["returnBinary"], operation: ["completion"] }
 * @default data
 */
    inputDataFieldName?: string | Expression<string> | PlaceholderValue;
}

interface FormV23NodeBase {
  type: 'n8n-nodes-base.form';
  version: 2.3;
}

export type FormV23ParamsNode = FormV23NodeBase & {
  config: NodeConfig<FormV23Params>;
};

export type FormV23Node = FormV23ParamsNode;