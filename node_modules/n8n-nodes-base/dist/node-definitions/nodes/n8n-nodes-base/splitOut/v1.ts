/**
 * Split Out Node - Version 1
 * Turn a list inside item(s) into separate items
 */


export interface SplitOutV1Params {
/**
 * The name of the input fields to break out into separate items. Separate multiple field names by commas. For binary data, use $binary.
 * @hint Use $binary to split out the input item by binary data
 */
    fieldToSplitOut?: string | Expression<string> | PlaceholderValue;
/**
 * Whether to copy any other fields into the new items
 * @default noOtherFields
 */
    include?: 'noOtherFields' | 'allOtherFields' | 'selectedOtherFields' | Expression<string>;
/**
 * Fields in the input items to aggregate together
 * @displayOptions.show { include: ["selectedOtherFields"] }
 */
    fieldsToInclude?: string | Expression<string> | PlaceholderValue;
  options?: {
    /** Whether to disallow referencing child fields using `parent.child` in the field name
     * @default false
     */
    disableDotNotation?: boolean | Expression<boolean>;
    /** The field in the output under which to put the split field contents
     */
    destinationFieldName?: string | Expression<string> | PlaceholderValue;
    /** Whether to include the binary data in the new items
     * @default false
     */
    includeBinary?: boolean | Expression<boolean>;
  };
}

interface SplitOutV1NodeBase {
  type: 'n8n-nodes-base.splitOut';
  version: 1;
}

export type SplitOutV1ParamsNode = SplitOutV1NodeBase & {
  config: NodeConfig<SplitOutV1Params>;
};

export type SplitOutV1Node = SplitOutV1ParamsNode;