/**
 * Telegram Node - Version 1.2
 * Discriminator: resource=message, operation=sendAndWait
 */


interface Credentials {
  telegramApi: CredentialReference;
}

/** Send a message and wait for response */
export type TelegramV12MessageSendAndWaitParams = {
  resource: 'message';
  operation: 'sendAndWait';
/**
 * Force Reply
 * @displayOptions.show { replyMarkup: ["forceReply"] }
 * @default {}
 */
    forceReply?: {
    /** Whether to show reply interface to the user, as if they manually selected the bot‘s message and tapped ’Reply
     * @default false
     */
    force_reply?: boolean | Expression<boolean>;
    /** Whether to force reply from specific users only
     * @default false
     */
    selective?: boolean | Expression<boolean>;
  };
/**
 * Adds an inline keyboard that appears right next to the message it belongs to
 * @displayOptions.show { replyMarkup: ["inlineKeyboard"] }
 * @default {}
 */
    inlineKeyboard?: {
        /** Rows
     */
    rows?: Array<{
      /** The value to set
       * @default {}
       */
      row?: {
        /** Buttons
     */
    buttons?: Array<{
      /** Label text on the button
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Additional Fields
       * @default {}
       */
      additionalFields?: {
    /** Data to be sent in a callback query to the bot when button is pressed, 1-64 bytes
     */
    callback_data?: string | Expression<string> | PlaceholderValue;
    /** Whether to send a Pay button
     * @default false
     */
    pay?: boolean | Expression<boolean>;
    /** If set, pressing the button will insert the bot‘s username and the specified inline query in the current chat's input field.Can be empty, in which case only the bot’s username will be inserted
     */
    switch_inline_query_current_chat?: string | Expression<string> | PlaceholderValue;
    /** If set, pressing the button will prompt the user to select one of their chats, open that chat and insert the bot‘s username and the specified inline query in the input field. Can be empty, in which case just the bot’s username will be inserted.
     */
    switch_inline_query?: string | Expression<string> | PlaceholderValue;
    /** HTTP or tg:// URL to be opened when button is pressed
     */
    url?: string | Expression<string> | PlaceholderValue;
    /** Launch the Telegram Web App
     * @default {}
     */
    web_app?: {
    /** An HTTPS URL of a Web App to be opened
     */
    url?: string | Expression<string> | PlaceholderValue;
  };
  };
    }>;
  };
    }>;
  };
/**
 * Adds a custom keyboard with reply options
 * @displayOptions.show { replyMarkup: ["replyKeyboard"] }
 * @default {}
 */
    replyKeyboard?: {
        /** Rows
     */
    rows?: Array<{
      /** The value to set
       * @default {}
       */
      row?: {
        /** Buttons
     */
    buttons?: Array<{
      /** Text of the button. If none of the optional fields are used, it will be sent as a message when the button is pressed.
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Additional Fields
       * @default {}
       */
      additionalFields?: {
    /** Whether the user's phone number will be sent as a contact when the button is pressed.Available in private chats only
     * @default false
     */
    request_contact?: boolean | Expression<boolean>;
    /** Whether the user's request_location
     * @default false
     */
    request_location?: boolean | Expression<boolean>;
    /** Launch the Telegram Web App
     * @default {}
     */
    web_app?: {
    /** An HTTPS URL of a Web App to be opened
     */
    url?: string | Expression<string> | PlaceholderValue;
  };
  };
    }>;
  };
    }>;
  };
/**
 * Reply Keyboard Options
 * @displayOptions.show { replyMarkup: ["replyKeyboard"] }
 * @default {}
 */
    replyKeyboardOptions?: {
    /** Whether to request clients to resize the keyboard vertically for optimal fit
     * @default false
     */
    resize_keyboard?: boolean | Expression<boolean>;
    /** Whether to request clients to hide the keyboard as soon as it's been used
     * @default false
     */
    one_time_keyboard?: boolean | Expression<boolean>;
    /** Whether to show the keyboard to specific users only
     * @default false
     */
    selective?: boolean | Expression<boolean>;
  };
/**
 * Reply Keyboard Remove
 * @displayOptions.show { replyMarkup: ["replyKeyboardRemove"] }
 * @default {}
 */
    replyKeyboardRemove?: {
    /** Whether to request clients to remove the custom keyboard
     * @default false
     */
    remove_keyboard?: boolean | Expression<boolean>;
    /** Whether to force reply from specific users only
     * @default false
     */
    selective?: boolean | Expression<boolean>;
  };
/**
 * Unique identifier for the target chat or username of the target channel (in the format @channelusername). To find your chat ID ask @get_id_bot.
 */
    chatId?: string | Expression<string> | PlaceholderValue;
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
       * @default ✅ Approve
       */
      approveLabel?: string | Expression<string> | PlaceholderValue;
      /** Disapprove Button Label
       * @displayOptions.show { approvalType: ["double"] }
       * @default ❌ Decline
       */
      disapproveLabel?: string | Expression<string> | PlaceholderValue;
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
  };
};

export type TelegramV12MessageSendAndWaitOutput = {
  data?: {
    text?: string;
  };
};

export type TelegramV12MessageSendAndWaitNode = {
  type: 'n8n-nodes-base.telegram';
  version: 1.2;
  credentials?: Credentials;
  config: NodeConfig<TelegramV12MessageSendAndWaitParams>;
  output?: Items<TelegramV12MessageSendAndWaitOutput>;
};