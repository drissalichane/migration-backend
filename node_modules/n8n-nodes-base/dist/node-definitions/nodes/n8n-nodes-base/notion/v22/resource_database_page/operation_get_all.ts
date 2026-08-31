/**
 * Notion Node - Version 2.2
 * Discriminator: resource=databasePage, operation=getAll
 */


interface Credentials {
  notionApi: CredentialReference;
}

/** Get many child blocks */
export type NotionV22DatabasePageGetAllParams = {
  resource: 'databasePage';
  operation: 'getAll';
/**
 * The Notion Database to operate on
 * @default {"mode":"list","value":""}
 */
    databaseId?: { __rl: true; mode: 'list' | 'url' | 'id'; value: string; cachedResultName?: string };
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
 * Whether to return a simplified version of the response instead of the raw data
 * @default true
 */
    simple?: boolean | Expression<boolean>;
/**
 * Filter
 * @default none
 */
    filterType?: 'none' | 'manual' | 'json' | Expression<string>;
/**
 * Must Match
 * @displayOptions.show { filterType: ["manual"] }
 * @default anyFilter
 */
    matchType?: 'anyFilter' | 'allFilters' | Expression<string>;
/**
 * Filters
 * @displayOptions.show { filterType: ["manual"] }
 * @default {}
 */
    filters?: {
        /** Conditions
     */
    conditions?: Array<{
      /** The name of the property to filter by. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      key?: string | Expression<string>;
      /** Type
       * @default ={{$parameter["&key"].split("|")[1]}}
       */
      type?: unknown;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["title"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["rich_text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["select"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["multi_select"] }
       */
      condition?: 'contains' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["status"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["people"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["files"] }
       */
      condition?: 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["url"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["email"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["phone_number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["relation"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The formula return type
       * @displayOptions.show { type: ["formula"] }
       */
      returnType?: 'text' | 'checkbox' | 'number' | 'date' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** Title
       * @displayOptions.show { type: ["title"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      titleValue?: string | Expression<string> | PlaceholderValue;
      /** Text
       * @displayOptions.show { type: ["rich_text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      richTextValue?: string | Expression<string> | PlaceholderValue;
      /** Phone number. No structure is enforced.
       * @displayOptions.show { type: ["phone_number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      phoneNumberValue?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["multi_select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default []
       */
      multiSelectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      selectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["status"] }
       */
      statusValue?: string | Expression<string>;
      /** Email
       * @displayOptions.show { type: ["email"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      emailValue?: string | Expression<string> | PlaceholderValue;
      /** URL
       * @displayOptions.show { type: ["url"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      urlValue?: string | Expression<string> | PlaceholderValue;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["people"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      peopleValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["created_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      createdByValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["last_edited_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      lastEditedByValue?: string | Expression<string>;
      /** Relation ID
       * @displayOptions.show { type: ["relation"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      relationValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** Number value
       * @displayOptions.show { type: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["created_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      createdTimeValue?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["last_edited_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      lastEditedTime?: string | Expression<string>;
      /** Number value
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** Text
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      textValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      dateValue?: string | Expression<string>;
    }>;
  };
/**
 * Filters (JSON)
 * @displayOptions.show { filterType: ["json"] }
 */
    filterJson?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Whether to download a file if a database's field contains it
     * @default false
     */
    downloadFiles?: boolean | Expression<boolean>;
    /** Filters
     * @default {}
     */
    filter?: {
        /** Single Condition
     */
    singleCondition?: {
      /** The name of the property to filter by. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      key?: string | Expression<string>;
      /** Type
       * @default ={{$parameter["&key"].split("|")[1]}}
       */
      type?: unknown;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["title"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["rich_text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["select"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["multi_select"] }
       */
      condition?: 'contains' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["status"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["people"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["files"] }
       */
      condition?: 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["url"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["email"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["phone_number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["relation"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The formula return type
       * @displayOptions.show { type: ["formula"] }
       */
      returnType?: 'text' | 'checkbox' | 'number' | 'date' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** Title
       * @displayOptions.show { type: ["title"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      titleValue?: string | Expression<string> | PlaceholderValue;
      /** Text
       * @displayOptions.show { type: ["rich_text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      richTextValue?: string | Expression<string> | PlaceholderValue;
      /** Phone number. No structure is enforced.
       * @displayOptions.show { type: ["phone_number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      phoneNumberValue?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["multi_select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default []
       */
      multiSelectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      selectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["status"] }
       */
      statusValue?: string | Expression<string>;
      /** Email
       * @displayOptions.show { type: ["email"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      emailValue?: string | Expression<string> | PlaceholderValue;
      /** URL
       * @displayOptions.show { type: ["url"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      urlValue?: string | Expression<string> | PlaceholderValue;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["people"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      peopleValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["created_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      createdByValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["last_edited_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      lastEditedByValue?: string | Expression<string>;
      /** Relation ID
       * @displayOptions.show { type: ["relation"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      relationValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** Number value
       * @displayOptions.show { type: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["created_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      createdTimeValue?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["last_edited_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      lastEditedTime?: string | Expression<string>;
      /** Number value
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** Text
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      textValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      dateValue?: string | Expression<string>;
    };
        /** Multiple Condition
     */
    multipleCondition?: {
      /** Condition
       * @default {}
       */
      condition?: {
        /** OR
     */
    or?: Array<{
      /** The name of the property to filter by. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      key?: string | Expression<string>;
      /** Type
       * @default ={{$parameter["&key"].split("|")[1]}}
       */
      type?: unknown;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["title"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["rich_text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["select"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["multi_select"] }
       */
      condition?: 'contains' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["status"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["people"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["files"] }
       */
      condition?: 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["url"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["email"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["phone_number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["relation"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The formula return type
       * @displayOptions.show { type: ["formula"] }
       */
      returnType?: 'text' | 'checkbox' | 'number' | 'date' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** Title
       * @displayOptions.show { type: ["title"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      titleValue?: string | Expression<string> | PlaceholderValue;
      /** Text
       * @displayOptions.show { type: ["rich_text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      richTextValue?: string | Expression<string> | PlaceholderValue;
      /** Phone number. No structure is enforced.
       * @displayOptions.show { type: ["phone_number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      phoneNumberValue?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["multi_select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default []
       */
      multiSelectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      selectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["status"] }
       */
      statusValue?: string | Expression<string>;
      /** Email
       * @displayOptions.show { type: ["email"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      emailValue?: string | Expression<string> | PlaceholderValue;
      /** URL
       * @displayOptions.show { type: ["url"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      urlValue?: string | Expression<string> | PlaceholderValue;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["people"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      peopleValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["created_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      createdByValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["last_edited_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      lastEditedByValue?: string | Expression<string>;
      /** Relation ID
       * @displayOptions.show { type: ["relation"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      relationValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** Number value
       * @displayOptions.show { type: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["created_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      createdTimeValue?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["last_edited_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      lastEditedTime?: string | Expression<string>;
      /** Number value
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** Text
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      textValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      dateValue?: string | Expression<string>;
    }>;
        /** AND
     */
    and?: Array<{
      /** The name of the property to filter by. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       */
      key?: string | Expression<string>;
      /** Type
       * @default ={{$parameter["&key"].split("|")[1]}}
       */
      type?: unknown;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["title"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["rich_text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["select"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["multi_select"] }
       */
      condition?: 'contains' | 'does_not_equal' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["status"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["people"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["files"] }
       */
      condition?: 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["url"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["email"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["phone_number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["relation"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["created_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_by"] }
       */
      condition?: 'contains' | 'does_not_contain' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["last_edited_time"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** The formula return type
       * @displayOptions.show { type: ["formula"] }
       */
      returnType?: 'text' | 'checkbox' | 'number' | 'date' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'contains' | 'does_not_contain' | 'starts_with' | 'ends_with' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       */
      condition?: 'equals' | 'does_not_equal' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       */
      condition?: 'equals' | 'does_not_equal' | 'greater_than' | 'less_than' | 'greater_than_or_equal_to' | 'less_than_or_equal_to' | 'is_empty' | 'is_not_empty' | Expression<string>;
      /** The value of the property to filter by
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       */
      condition?: 'equals' | 'before' | 'after' | 'on_or_before' | 'is_empty' | 'is_not_empty' | 'on_or_after' | 'past_week' | 'past_month' | 'past_year' | 'next_week' | 'next_month' | 'next_year' | Expression<string>;
      /** Title
       * @displayOptions.show { type: ["title"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      titleValue?: string | Expression<string> | PlaceholderValue;
      /** Text
       * @displayOptions.show { type: ["rich_text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      richTextValue?: string | Expression<string> | PlaceholderValue;
      /** Phone number. No structure is enforced.
       * @displayOptions.show { type: ["phone_number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      phoneNumberValue?: string | Expression<string> | PlaceholderValue;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["multi_select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default []
       */
      multiSelectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["select"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      selectValue?: string | Expression<string>;
      /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
       * @displayOptions.show { type: ["status"] }
       */
      statusValue?: string | Expression<string>;
      /** Email
       * @displayOptions.show { type: ["email"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      emailValue?: string | Expression<string> | PlaceholderValue;
      /** URL
       * @displayOptions.show { type: ["url"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      urlValue?: string | Expression<string> | PlaceholderValue;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["people"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      peopleValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["created_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      createdByValue?: string | Expression<string>;
      /** List of users. Multiples can be defined separated by comma. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { type: ["last_edited_by"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      lastEditedByValue?: string | Expression<string>;
      /** Relation ID
       * @displayOptions.show { type: ["relation"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      relationValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** Number value
       * @displayOptions.show { type: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      date?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["created_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      createdTimeValue?: string | Expression<string>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["last_edited_time"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      lastEditedTime?: string | Expression<string>;
      /** Number value
       * @displayOptions.show { type: ["formula"], returnType: ["number"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       * @default 0
       */
      numberValue?: number | Expression<number>;
      /** Text
       * @displayOptions.show { type: ["formula"], returnType: ["text"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty"] }
       */
      textValue?: string | Expression<string> | PlaceholderValue;
      /** Whether or not the checkbox is checked. &lt;code&gt;true&lt;/code&gt; represents checked. &lt;code&gt;false&lt;/code&gt; represents unchecked
       * @displayOptions.show { type: ["formula"], returnType: ["checkbox"] }
       * @default false
       */
      checkboxValue?: boolean | Expression<boolean>;
      /** An ISO 8601 format date, with optional time
       * @displayOptions.show { type: ["formula"], returnType: ["date"] }
       * @displayOptions.hide { condition: ["is_empty", "is_not_empty", "past_week", "past_month", "past_year", "next_week", "next_month", "next_year"] }
       */
      dateValue?: string | Expression<string>;
    }>;
  };
    };
  };
    /** Sort
     * @default {}
     */
    sort?: {
        /** Sort
     */
    sortValue?: Array<{
      /** Whether or not to use the record's timestamp to sort the response
       * @default false
       */
      timestamp?: boolean | Expression<boolean>;
      /** The name of the property to filter by. Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
       * @displayOptions.show { timestamp: [false] }
       */
      key?: string | Expression<string>;
      /** The name of the property to filter by
       * @displayOptions.show { timestamp: [true] }
       */
      key?: 'created_time' | 'last_edited_time' | Expression<string>;
      /** Type
       * @displayOptions.show { timestamp: [true] }
       * @default ={{$parameter["&key"].split("|")[1]}}
       */
      type?: unknown;
      /** The direction to sort
       */
      direction?: 'ascending' | 'descending' | Expression<string>;
    }>;
  };
  };
};

export type NotionV22DatabasePageGetAllOutput = {
  id?: string;
  name?: string;
  url?: string;
};

export type NotionV22DatabasePageGetAllNode = {
  type: 'n8n-nodes-base.notion';
  version: 2.2;
  credentials?: Credentials;
  config: NodeConfig<NotionV22DatabasePageGetAllParams>;
  output?: Items<NotionV22DatabasePageGetAllOutput>;
};