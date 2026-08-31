/**
 * BambooHR Node - Version 1
 * Discriminator: resource=employeeDocument, operation=download
 */


interface Credentials {
  bambooHrApi: CredentialReference;
}

/** Download an employee document */
export type BambooHrV1EmployeeDocumentDownloadParams = {
  resource: 'employeeDocument';
  operation: 'download';
/**
 * ID of the employee
 */
    employeeId?: string | Expression<string> | PlaceholderValue;
/**
 * ID of the employee file
 */
    fileId?: string | Expression<string> | PlaceholderValue;
/**
 * The name of the output field to put the binary file data in
 * @default data
 */
    output?: string | Expression<string> | PlaceholderValue;
};

export type BambooHrV1EmployeeDocumentDownloadNode = {
  type: 'n8n-nodes-base.bambooHr';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BambooHrV1EmployeeDocumentDownloadParams>;
};