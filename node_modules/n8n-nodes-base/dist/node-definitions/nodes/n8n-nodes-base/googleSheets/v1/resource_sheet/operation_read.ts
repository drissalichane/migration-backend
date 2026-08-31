/**
 * Google Sheets  Node - Version 1
 * Discriminator: resource=sheet, operation=read
 */


interface Credentials {
  googleApi: CredentialReference;
  googleSheetsOAuth2Api: CredentialReference;
}

/** Read data from a sheet */
export type GoogleSheetsV1SheetReadParams = {
  resource: 'sheet';
  operation: 'read';
/**
 * Authentication
 * @default serviceAccount
 */
    authentication?: 'serviceAccount' | 'oAuth2' | Expression<string>;
/**
 * The ID of the Google Spreadsheet. Found as part of the sheet URL https://docs.google.com/spreadsheets/d/{ID}/.
 */
    sheetId?: string | Expression<string> | PlaceholderValue;
/**
 * The table range to read from or to append data to. See the Google &lt;a href="https://developers.google.com/sheets/api/guides/values#writing"&gt;documentation&lt;/a&gt; for the details. If it contains multiple sheets it can also be added like this: "MySheet!A:F"
 * @displayOptions.hide { operation: ["create", "delete", "remove"] }
 * @default A:F
 */
    range?: string | Expression<string> | PlaceholderValue;
/**
 * Whether the data should be returned RAW instead of parsed into keys according to their header
 * @default false
 */
    rawData?: boolean | Expression<boolean>;
/**
 * The name of the property into which to write the RAW data
 * @displayOptions.show { rawData: [true] }
 * @default data
 */
    dataProperty?: string | Expression<string> | PlaceholderValue;
/**
 * Index of the first row which contains the actual data and not the keys. Starts with 0.
 * @displayOptions.hide { operation: ["append", "create", "clear", "delete", "remove"], rawData: [true] }
 * @default 1
 */
    dataStartRow?: number | Expression<number>;
/**
 * Index of the row which contains the keys. Starts at 0. The incoming node data is matched to the keys for assignment. The matching is case sensitive.
 * @displayOptions.hide { operation: ["clear", "create", "delete", "remove"], rawData: [true] }
 * @default 0
 */
    keyRow?: number | Expression<number>;
/**
 * Options
 * @default {}
 */
    options?: {
    /** By default, the workflow stops executing if the lookup/read does not return values
     * @default false
     */
    'continue'?: boolean | Expression<boolean>;
    /** By default only the first result gets returned. If options gets set all found matches get returned.
     * @displayOptions.show { /operation: ["lookup"] }
     * @default false
     */
    returnAllMatches?: boolean | Expression<boolean>;
    /** Whether you want to match the headers as path, for example, the row header "category.name" will match the "category" object and get the field "name" from it. By default "category.name" will match with the field with exact name, not nested object.
     * @displayOptions.show { /operation: ["append"] }
     * @default false
     */
    usePathForKeyRow?: boolean | Expression<boolean>;
    /** Determines how data should be interpreted
     * @displayOptions.show { /operation: ["append", "update", "upsert"] }
     * @default RAW
     */
    valueInputMode?: 'RAW' | 'USER_ENTERED' | Expression<string>;
    /** Determines how values should be rendered in the output
     * @default UNFORMATTED_VALUE
     */
    valueRenderMode?: 'FORMATTED_VALUE' | 'FORMULA' | 'UNFORMATTED_VALUE' | Expression<string>;
    /** Determines how values should be rendered in the output
     * @displayOptions.show { /operation: ["update", "upsert"], /rawData: [false] }
     * @default UNFORMATTED_VALUE
     */
    valueRenderMode?: 'FORMATTED_VALUE' | 'FORMULA' | 'UNFORMATTED_VALUE' | Expression<string>;
  };
};

export type GoogleSheetsV1SheetReadNode = {
  type: 'n8n-nodes-base.googleSheets';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<GoogleSheetsV1SheetReadParams>;
};