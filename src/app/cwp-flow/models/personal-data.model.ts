export interface PersonalDataModel {
  salutationAndNamePage: {
    salutation: string;
    firstName: string;
    lastName: string;
  };
  emailPage: {
    email: string;
  };
  birthDatePage: {
    birthDate: Date;
    birthName?: string;
  };
  maritalStatusPage: {
    maritalStatus: string;
  };
}
