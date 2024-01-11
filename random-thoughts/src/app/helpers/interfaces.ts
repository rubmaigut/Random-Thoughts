export interface User {
  id: string;
  firstName: string;
  lastName: string;
  emailAddresses: EmailAddress[];
  primaryEmailAddressId: string;
}

export interface EmailAddress {
  id: string;
  emailAddress: string;
  primary: boolean;
}

export interface Session {
  id: string;
  status: string;
}
