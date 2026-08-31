/**
 * BambooHR Node - Version 1
 * Discriminator: resource=employee, operation=create
 */


interface Credentials {
  bambooHrApi: CredentialReference;
}

/** Create an employee */
export type BambooHrV1EmployeeCreateParams = {
  resource: 'employee';
  operation: 'create';
/**
 * Whether the employee to create was added to a pay schedule synced with Trax Payroll
 * @default false
 */
    synced?: boolean | Expression<boolean>;
/**
 * First Name
 */
    firstName?: string | Expression<string> | PlaceholderValue;
/**
 * Last Name
 */
    lastName?: string | Expression<string> | PlaceholderValue;
/**
 * Address
 * @displayOptions.show { synced: [true] }
 * @default {}
 */
    address?: {
        /** Address
     */
    value?: {
      /** Line 1
       */
      address1?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      address2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** The full name of the state/province
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** The name of the country. Must exist in the BambooHr country list.
       */
      country?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Date of Birth
 * @displayOptions.show { synced: [true] }
 */
    dateOfBirth?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { synced: [true] }
 */
    department?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { synced: [true] }
 */
    division?: string | Expression<string>;
/**
 * Employee Number
 * @displayOptions.show { synced: [true] }
 */
    employeeNumber?: string | Expression<string> | PlaceholderValue;
/**
 * FLSA Overtime Status
 * @displayOptions.show { synced: [true] }
 */
    exempt?: 'exempt' | 'non-exempt' | Expression<string>;
/**
 * Gender
 * @displayOptions.show { synced: [true] }
 */
    gender?: 'female' | 'male' | Expression<string>;
/**
 * Hire Date
 * @displayOptions.show { synced: [true] }
 */
    hireDate?: string | Expression<string>;
/**
 * Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
 * @displayOptions.show { synced: [true] }
 */
    location?: string | Expression<string>;
/**
 * Marital Status
 * @displayOptions.show { synced: [true] }
 */
    maritalStatus?: 'single' | 'married' | 'domesticPartnership' | Expression<string>;
/**
 * Mobile Phone
 * @displayOptions.show { synced: [true] }
 */
    mobilePhone?: string | Expression<string> | PlaceholderValue;
/**
 * Pay Per
 * @displayOptions.show { synced: [true] }
 */
    paidPer?: 'hour' | 'day' | 'week' | 'month' | 'quater' | 'year' | Expression<string>;
/**
 * Pay Rate
 * @displayOptions.show { synced: [true] }
 * @default {}
 */
    payRate?: {
        /** Pay Rate
     */
    value?: {
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
      /** Currency
       */
      currency?: string | Expression<string> | PlaceholderValue;
    };
  };
/**
 * Pay Type
 * @displayOptions.show { synced: [true] }
 */
    payType?: 'commission' | 'contract' | 'daily' | 'exceptionHourly' | 'hourly' | 'monthly' | 'pieceRate' | 'proRata' | 'salary' | 'weekly' | Expression<string>;
/**
 * Preferred Name
 * @displayOptions.show { synced: [true] }
 */
    preferredName?: string | Expression<string> | PlaceholderValue;
/**
 * A standard United States Social Security number, with dashes
 * @displayOptions.show { synced: [true] }
 */
    ssn?: string | Expression<string> | PlaceholderValue;
/**
 * Additional Fields
 * @default {}
 */
    additionalFields?: {
    /** Address
     * @displayOptions.show { /synced: [false] }
     * @default {}
     */
    address?: {
        /** Address
     */
    value?: {
      /** Line 1
       */
      address1?: string | Expression<string> | PlaceholderValue;
      /** Line 2
       */
      address2?: string | Expression<string> | PlaceholderValue;
      /** City
       */
      city?: string | Expression<string> | PlaceholderValue;
      /** The full name of the state/province
       */
      state?: string | Expression<string> | PlaceholderValue;
      /** The name of the country. Must exist in the BambooHr country list.
       */
      country?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Date of Birth
     * @displayOptions.show { /synced: [false] }
     */
    dateOfBirth?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /synced: [false] }
     */
    department?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /synced: [false] }
     */
    division?: string | Expression<string>;
    /** Employee Number
     * @displayOptions.show { /synced: [false] }
     */
    employeeNumber?: string | Expression<string> | PlaceholderValue;
    /** FLSA Overtime Status
     * @displayOptions.show { /synced: [false] }
     */
    exempt?: 'exempt' | 'non-exempt' | Expression<string>;
    /** Gender
     * @displayOptions.show { /synced: [false] }
     */
    gender?: 'female' | 'male' | Expression<string>;
    /** Hire Date
     * @displayOptions.show { /synced: [false] }
     */
    hireDate?: string | Expression<string>;
    /** Choose from the list, or specify an ID using an &lt;a href="https://docs.n8n.io/code/expressions/"&gt;expression&lt;/a&gt;
     * @displayOptions.show { /synced: [false] }
     */
    location?: string | Expression<string>;
    /** Marital Status
     * @displayOptions.show { /synced: [false] }
     */
    maritalStatus?: 'single' | 'married' | 'domesticPartnership' | Expression<string>;
    /** Mobile Phone
     * @displayOptions.show { /synced: [false] }
     */
    mobilePhone?: string | Expression<string> | PlaceholderValue;
    /** Pay Per
     * @displayOptions.show { /synced: [false] }
     */
    paidPer?: 'hour' | 'day' | 'week' | 'month' | 'quater' | 'year' | Expression<string>;
    /** Pay Rate
     * @displayOptions.show { /synced: [false] }
     * @default {}
     */
    payRate?: {
        /** Pay Rate
     */
    value?: {
      /** Value
       */
      value?: string | Expression<string> | PlaceholderValue;
      /** Currency
       */
      currency?: string | Expression<string> | PlaceholderValue;
    };
  };
    /** Pay Type
     * @displayOptions.show { /synced: [false] }
     */
    payType?: 'commission' | 'contract' | 'daily' | 'exceptionHourly' | 'hourly' | 'monthly' | 'pieceRate' | 'proRata' | 'salary' | 'weekly' | Expression<string>;
    /** Preferred Name
     * @displayOptions.show { /synced: [false] }
     */
    preferredName?: string | Expression<string> | PlaceholderValue;
    /** A standard United States Social Security number, with dashes
     * @displayOptions.show { /synced: [false] }
     */
    ssn?: string | Expression<string> | PlaceholderValue;
    /** Work Email
     */
    workEmail?: string | Expression<string> | PlaceholderValue;
    /** Work Phone
     */
    workPhone?: string | Expression<string> | PlaceholderValue;
  };
};

export type BambooHrV1EmployeeCreateNode = {
  type: 'n8n-nodes-base.bambooHr';
  version: 1;
  credentials?: Credentials;
  config: NodeConfig<BambooHrV1EmployeeCreateParams>;
};