export const salutation = 'salutation';
export const firstName = 'firstName';
export const lastName = 'lastName';
export const email = 'email';
export const birthDate = 'birthDate';
export const birthName = 'birthName';
export const maritalStatus = 'maritalStatus';
export const postalCode = 'postalCode';
export const location = 'location';
export const street = 'street';
export const number = 'number';
export const residentSince = 'residentSince';
export const country = 'country';
export const mobileNumber = 'mobileNumber';

export const residencePermit = 'residencePermit';
export const dateOfExpiry = 'dateOfExpiry';
export const countryExceptionCheck = 'countryExceptionCheck';

export const EmailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const LicenseRegex =
  /^((?:^[A-Za-z]{2}-\d{2}-\d{2}$)|(?:^[A-Za-z]{2}\d{2}\d{2}$)|(?:^\d{2}-\d{2}-[A-Za-z]{2}$)|(?:^\d{2}\d{2}[A-Za-z]{2}$)|(?:^\d{2}-[A-Za-z]{2}-\d{2}$)|(?:^\d{2}[A-Za-z]{2}\d{2}$)|(?:^[A-Za-z]{2}-\d{2}-[A-Za-z]{2}$)|(?:^[A-Za-z]{2}\d{2}[A-Za-z]{2}$))/;

export const PhoneNumberRegex = /^((?:^[1-9]{1}\d{8}$))/;

export const ErrorPage = {
  TITLE: 'Oops, something went wrong',
  DESCRIPTION: 'Sorry for the inconvenience. please try again later.',
};

export const ErrorMessages = {
  HOME: 'Error getting home content',
  FAQ: 'Error getting faq content',
  FAQ_QUESTIONS: 'Error getting faq questions content',
  PRIVACY_POLICY: 'Error getting privacy policy content',
  TERMS_AND_CONDITIONS: 'Error getting terms and conditions content',
  HEADER: 'Error getting header content',
  FOOTER: 'Error getting footer content',
};

export const SearchPlaceholder = ' Searching ...';
