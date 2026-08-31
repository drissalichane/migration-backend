/**
 * Markdown Node - Version 1
 * Discriminator: mode=htmlToMarkdown
 */


/** Convert data from HTML to Markdown */
export type MarkdownV1HtmlToMarkdownParams = {
  mode: 'htmlToMarkdown';
/**
 * The HTML to be converted to markdown
 */
    html?: string | Expression<string> | PlaceholderValue;
/**
 * The field to put the output in. Specify nested fields using dots, e.g."level1.level2.newKey".
 * @default data
 */
    destinationKey?: string | Expression<string> | PlaceholderValue;
/**
 * Options
 * @default {}
 */
    options?: {
    /** Specify bullet marker, default *
     * @default *
     */
    bulletMarker?: string | Expression<string> | PlaceholderValue;
    /** Specify code block fence, default ```
     * @default ```
     */
    codeFence?: string | Expression<string> | PlaceholderValue;
    /** Specify emphasis delimiter, default _
     * @default _
     */
    emDelimiter?: string | Expression<string> | PlaceholderValue;
    /** Setting this will override the default escape settings, you might want to use textReplace option instead
     * @default {}
     */
    globalEscape?: {
        /** Value
     */
    value?: {
      /** RegEx for pattern
       */
      pattern?: string | Expression<string> | PlaceholderValue;
      /** String replacement
       */
      replacement?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Supplied elements will be ignored (ignores inner text does not parse children)
     * @hint Comma separated elements
     */
    ignore?: string | Expression<string> | PlaceholderValue;
    /** Whether to keep images with data: URI (Note: These can be up to 1MB each), e.g. &lt;img src="data:image/gif;base64,R0lGODlhEAAQAMQAAORHHOVSK......0o/"&gt;
     * @default false
     */
    keepDataImages?: boolean | Expression<boolean>;
    /** Setting this will override the default escape settings, you might want to use textReplace option instead
     * @default {}
     */
    lineStartEscape?: {
        /** Value
     */
    value?: {
      /** RegEx for pattern
       */
      pattern?: string | Expression<string> | PlaceholderValue;
      /** String replacement
       */
      replacement?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Specify max consecutive new lines allowed
     * @default 3
     */
    maxConsecutiveNewlines?: number | Expression<number>;
    /** Whether to Place URLS at the bottom and format links using link reference definitions
     * @default false
     */
    useLinkReferenceDefinitions?: boolean | Expression<boolean>;
    /** Specify strong delimiter, default **
     * @default **
     */
    strongDelimiter?: string | Expression<string> | PlaceholderValue;
    /** Specify style for code block, default "fence"
     * @default fence
     */
    codeBlockStyle?: 'fence' | 'indented' | Expression<string>;
    /** User-defined text replacement pattern (Replaces matching text retrieved from nodes)
     * @default []
     */
    textReplace?: {
        /** Values
     */
    values?: Array<{
      /** RegEx for pattern
       */
      pattern?: string | Expression<string> | PlaceholderValue;
      /** String replacement
       */
      replacement?: string | Expression<string> | PlaceholderValue;
    }>;
  };
    /** Supplied elements will be treated as blocks (surrounded with blank lines)
     * @hint Comma separated elements
     */
    blockElements?: string | Expression<string> | PlaceholderValue;
  };
};

export type MarkdownV1HtmlToMarkdownNode = {
  type: 'n8n-nodes-base.markdown';
  version: 1;
  config: NodeConfig<MarkdownV1HtmlToMarkdownParams>;
};