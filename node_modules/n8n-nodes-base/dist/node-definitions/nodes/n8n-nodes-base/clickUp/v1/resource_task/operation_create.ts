/**
 * ClickUp Node - Version 1
 * Discriminator: resource=task, operation=create
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Create a checklist */
export type ClickUpV1TaskCreateParams = {
  resource: 'task';
  operation: 'create';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    team?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 */
    space?: string | Expression<string>;
/**
 * Folderless List
 * @default false
 */
    folderless?: boolean | Expression<boolean>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { folderless: [false] }
 */
    folder?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { folderless: [true] }
 */
    list?: string | Expression<string>;
/**
 * The first name on the task
 */
    name?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @default []
     */
    assignees?: string[];
    /** Custom fields to set as JSON in the format: &lt;code&gt;[ {"id": "", "value": ""} ]&lt;/code&gt;
     */
    customFieldsJson?: IDataObject | string | Expression<string>;
    /** Content
     */
    content?: string | Expression<string> | PlaceholderValue;
    /** Due Date
     */
    dueDate?: string | Expression<string>;
    /** Due Date Time
     * @default false
     */
    dueDateTime?: boolean | Expression<boolean>;
    /** Is Markdown Content
     * @default false
     */
    markdownContent?: boolean | Expression<boolean>;
    /** Notify All
     * @default false
     */
    notifyAll?: boolean | Expression<boolean>;
    /** Parent ID
     */
    parentId?: string | Expression<string> | PlaceholderValue;
    /** Integer mapping as 1 : Urgent, 2 : High, 3 : Normal, 4 : Low
     * @default 3
     */
    priority?: number | Expression<number>;
    /** Start Date
     */
    startDate?: string | Expression<string>;
    /** Start Date Time
     * @default false
     */
    startDateTime?: boolean | Expression<boolean>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     */
    status?: string | Expression<string>;
    /** The array of tags applied to this task. Choose from the list, or specify IDs using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;.
     * @default []
     */
    tags?: string[];
    /** Time estimate in minutes
     * @default 1
     */
    timeEstimate?: number | Expression<number>;
  };
};

export type ClickUpV1TaskCreateOutput = {
  archived?: boolean;
  assignees?: Array<{
    email?: string;
    id?: number;
    initials?: string;
    username?: string;
  }>;
  creator?: {
    email?: string;
    id?: number;
    username?: string;
  };
  custom_fields?: Array<{
    date_created?: string;
    hide_from_guests?: boolean;
    id?: string;
    name?: string;
    type?: string;
    type_config?: {
      new_drop_down?: boolean;
      options?: Array<{
        id?: string;
        name?: string;
        orderindex?: number;
      }>;
      sorting?: string;
    };
  }>;
  custom_id?: null;
  custom_item_id?: number;
  date_created?: string;
  date_updated?: string;
  description?: string;
  folder?: {
    access?: boolean;
    hidden?: boolean;
    id?: string;
    name?: string;
  };
  id?: string;
  list?: {
    access?: boolean;
    id?: string;
    name?: string;
  };
  name?: string;
  orderindex?: string;
  permission_level?: string;
  points?: null;
  project?: {
    access?: boolean;
    hidden?: boolean;
    id?: string;
    name?: string;
  };
  sharing?: {
    public?: boolean;
    public_fields?: Array<string>;
    public_share_expires_on?: null;
    seo_optimized?: boolean;
    token?: null;
  };
  space?: {
    id?: string;
  };
  status?: {
    color?: string;
    id?: string;
    orderindex?: number;
    status?: string;
    type?: string;
  };
  tags?: Array<{
    creator?: number;
    name?: string;
    tag_bg?: string;
    tag_fg?: string;
  }>;
  team_id?: string;
  text_content?: string;
  time_spent?: number;
  url?: string;
  watchers?: Array<{
    email?: string;
    id?: number;
    initials?: string;
    username?: string;
  }>;
};

export type ClickUpV1TaskCreateNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TaskCreateParams>;
  output?: Items<ClickUpV1TaskCreateOutput>;
};