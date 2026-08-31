/**
 * ClickUp Node - Version 1
 * Discriminator: resource=task, operation=get
 */


interface Credentials {
  clickUpApi: CredentialReference;
  clickUpOAuth2Api: CredentialReference;
}

/** Get a folder */
export type ClickUpV1TaskGetParams = {
  resource: 'task';
  operation: 'get';
  authentication?: 'accessToken' | 'oAuth2' | Expression<string>;
/**
 * Task ID
 */
    id?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to also fetch and include subtasks for this task
 * @default false
 */
    includeSubtasks?: boolean | Expression<boolean>;
/**
 * Whether to include the markdown_description field in the response. This is important for preserving links in the description.
 * @default false
 */
    includeMarkdownDescription?: boolean | Expression<boolean>;
};

export type ClickUpV1TaskGetOutput = {
  archived?: boolean;
  assignees?: Array<{
    color?: string;
    email?: string;
    id?: number;
    initials?: string;
    username?: string;
  }>;
  attachments?: Array<{
    date?: string;
    deleted?: boolean;
    email_data?: null;
    extension?: string;
    hidden?: boolean;
    id?: string;
    is_folder?: null;
    mimetype?: string;
    orientation?: null;
    parent_id?: string;
    resolved_comments?: number;
    size?: number;
    source?: number;
    title?: string;
    total_comments?: number;
    type?: number;
    url?: string;
    url_w_host?: string;
    url_w_query?: string;
    user?: {
      color?: string;
      email?: string;
      id?: number;
      initials?: string;
      username?: string;
    };
    version?: number;
    workspace_id?: null;
  }>;
  creator?: {
    color?: string;
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
      field_inverted_name?: string;
      fields?: Array<{
        field?: string;
        hidden?: boolean;
        name?: string;
        width?: number;
      }>;
      linked_subcategory_access?: boolean;
      options?: Array<{
        id?: string;
        name?: string;
        orderindex?: number;
      }>;
      subcategory_id?: string;
      subcategory_inverted_name?: string;
    };
  }>;
  custom_item_id?: number;
  date_created?: string;
  date_updated?: string;
  dependencies?: Array<{
    chain_id?: null;
    date_created?: string;
    depends_on?: string;
    task_id?: string;
    type?: number;
    userid?: string;
    workspace_id?: string;
  }>;
  folder?: {
    access?: boolean;
    hidden?: boolean;
    id?: string;
    name?: string;
  };
  id?: string;
  linked_tasks?: Array<{
    date_created?: string;
    link_id?: string;
    task_id?: string;
    userid?: string;
    workspace_id?: string;
  }>;
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
  time_spent?: number;
  url?: string;
  watchers?: Array<{
    email?: string;
    id?: number;
    initials?: string;
    username?: string;
  }>;
};

export type ClickUpV1TaskGetNode = {
  type: 'n8n-nodes-base.clickUp';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<ClickUpV1TaskGetParams>;
  output?: Items<ClickUpV1TaskGetOutput>;
};