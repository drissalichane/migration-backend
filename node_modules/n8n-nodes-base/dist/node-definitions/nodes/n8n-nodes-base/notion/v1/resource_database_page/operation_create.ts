/**
 * Notion Node - Version 1
 * Discriminator: resource=databasePage, operation=create
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Create a page in a database */
export type NotionV1DatabasePageCreateParams = {
  resource: 'databasePage';
  operation: 'create';
/**
 * The Notion Database to operate on
 * @default {"mode":"list","value":""}
 */
    databaseId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
/**
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Properties
 * @default {}
 */
    propertiesUi?: {
        /** Property
     */
    propertyValues?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       */
      key?: string | Expression<string>;
      /** Type
       * @default ={{$parameter["&key"].split("|")[1]}}
       */
      type?: unknown;
      /** Title
       * @displayOptions.show { type: ["title"] }
       */
      title?: string | Expression<string> | PlaceholderValue;
      /** Rich Text
       * @displayOptions.show { type: ["rich_text"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["rich_text"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["rich_text"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Phone number. No structure is enforced.
       * @displayOptions.show { type: ["phone_number"] }
       */
      phoneValue?: string | Expression<string> | PlaceholderValue;
      /** Name of the options you want to set. Multiples can be defined separated by comma. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["multi_select"] }
       * @default []
       */
      multiSelectValue?: string[];
      /** Name of the option you want to set. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["select"] }
       */
      selectValue?: string | Expression<string>;
      /** Name of the option you want to set. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["status"] }
       */
      statusValue?: string | Expression<string>;
      /** Email address
       * @displayOptions.show { type: ["email"] }
       */
      emailValue?: string | Expression<string> | PlaceholderValue;
      /** Ignore If Empty
       * @displayOptions.show { type: ["url"] }
       * @default false
       */
      ignoreIfEmpty?: boolean | Expression<boolean>;
      /** Web address
       * @displayOptions.show { type: ["url"] }
       */
      urlValue?: string | Expression<string> | PlaceholderValue;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["people"] }
       * @default []
       */
      peopleValue?: string[];
      /** List of databases that belong to another database. Multiples can be defined separated by comma.
       * @displayOptions.show { type: ["relation"] }
       * @default []
       */
      relationValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked.
       * @displayOptions.show { type: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** Number value
       * @displayOptions.show { type: ["number"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** Whether or not you want to define a date range
       * @displayOptions.show { type: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** Whether or not to include the time in the date
       * @displayOptions.show { type: ["date"] }
       * @default true
       */
      includeTime?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { range: [false], type: ["date"] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { range: [true], type: ["date"] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], type: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Time zone to use. By default n8n timezone is used. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["date"] }
       * @default default
       */
      timezone?: string | Expression<string>;
      /** File URLs
       * @displayOptions.show { type: ["files"] }
       * @default {}
       */
      fileUrls?: {
        /** File
     */
    fileUrl?: Array<{
      /** Name
       */
      name?: string | Expression<string> | PlaceholderValue;
      /** Link to externally hosted file
       */
      url?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    }>;
  };
/**
 * Blocks
 * @default {}
 */
    blockUi?: {
        /** Block
     */
    blockValues?: Array<{
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @default paragraph
       */
      type?: string | Expression<string>;
      /** Rich Text
       * @displayOptions.show { type: ["paragraph"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["paragraph"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["paragraph"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Rich Text
       * @displayOptions.show { type: ["heading_1"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["heading_1"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["heading_1"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Rich Text
       * @displayOptions.show { type: ["heading_2"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["heading_2"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["heading_2"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Rich Text
       * @displayOptions.show { type: ["heading_3"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["heading_3"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["heading_3"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Rich Text
       * @displayOptions.show { type: ["toggle"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["toggle"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["toggle"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Whether the to_do is checked or not
       * @displayOptions.show { type: ["to_do"] }
       * @default false
       */
      checked?: boolean | Expression<boolean>;
      /** Rich Text
       * @displayOptions.show { type: ["to_do"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["to_do"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["to_do"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Plain text of page title
       * @displayOptions.show { type: ["child_page"] }
       */
      title?: string | Expression<string> | PlaceholderValue;
      /** Rich Text
       * @displayOptions.show { type: ["bulleted_list_item"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["bulleted_list_item"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["bulleted_list_item"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Rich Text
       * @displayOptions.show { type: ["numbered_list_item"] }
       * @default false
       */
      richText?: boolean | Expression<boolean>;
      /** Text
       * @displayOptions.show { type: ["numbered_list_item"], richText: [false] }
       */
      textContent?: string | Expression<string> | PlaceholderValue;
      /** Rich text in the block
       * @displayOptions.show { type: ["numbered_list_item"], richText: [true] }
       * @default {}
       */
      text?: {
        /** Text
     */
    text?: Array<{
      /** Type
       * @default text
       */
      textType?: 'equation' | 'mention' | 'text' | Expression<string>;
      /** Text content. This field contains the actual content of your text and is probably the field you'll use most often.
       * @displayOptions.show { textType: ["text"] }
       */
      text?: string | Expression<string> | PlaceholderValue;
      /** Is Link
       * @displayOptions.show { textType: ["text"] }
       * @default false
       */
      isLink?: boolean | Expression<boolean>;
      /** The URL that this link points to
       * @displayOptions.show { textType: ["text"], isLink: [true] }
       */
      textLink?: string | Expression<string> | PlaceholderValue;
      /** An inline mention of a user, page, database, or date. In the app these are created by typing @ followed by the name of a user, page, database, or a date.
       * @displayOptions.show { textType: ["mention"] }
       */
      mentionType?: 'database' | 'date' | 'page' | 'user' | Expression<string>;
      /** The ID of the user being mentioned. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { mentionType: ["user"] }
       */
      user?: string | Expression<string>;
      /** The ID of the page being mentioned
       * @displayOptions.show { mentionType: ["page"] }
       */
      page?: string | Expression<string> | PlaceholderValue;
      /** The Notion Database being mentioned
       * @displayOptions.show { mentionType: ["database"] }
       * @default {"mode":"list","value":""}
       */
      database?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
      /** Whether or not you want to define a date range
       * @displayOptions.show { mentionType: ["date"] }
       * @default false
       */
      range?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [false] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { mentionType: ["date"], range: [true] }
       */
      dateStart?: string | Expression<string>;
      /** An ISO 8601 formatted date, with optional time. Represents the end of a date range.
       * @displayOptions.show { range: [true], mentionType: ["date"] }
       */
      dateEnd?: string | Expression<string>;
      /** Expression
       * @displayOptions.show { textType: ["equation"] }
       */
      expression?: string | Expression<string> | PlaceholderValue;
      /** All annotations that apply to this rich text
       * @default {}
       */
      annotationUi?: {
    /** Whether the text is bolded
     * @default false
     */
    bold?: boolean | Expression<boolean>;
    /** Whether the text is italicized
     * @default false
     */
    italic?: boolean | Expression<boolean>;
    /** Whether the text is struck through
     * @default false
     */
    strikethrough?: boolean | Expression<boolean>;
    /** Whether the text is underlined
     * @default false
     */
    underline?: boolean | Expression<boolean>;
    /** Whether the text is code style
     * @default false
     */
    code?: boolean | Expression<boolean>;
    /** Color of the text
     */
    color?: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background' | Expression<string>;
  };
    }>;
  };
      /** Image file reference
       * @displayOptions.show { type: ["image"] }
       */
      url?: string | Expression<string> | PlaceholderValue;
    }>;
  };
/**
 * Options
 * @default {}
 */
    options?: {
    /** The icon type for the database page, Either a URL or an Emoji
     * @default emoji
     */
    iconType?: 'emoji' | 'file' | Expression<string>;
    /** Emoji or File URL to use as the icon
     */
    icon?: string | Expression<string> | PlaceholderValue;
  };
};

export type NotionV1DatabasePageCreateNode = {
  type: 'n8n-nodes-base.notion';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<NotionV1DatabasePageCreateParams>;
};