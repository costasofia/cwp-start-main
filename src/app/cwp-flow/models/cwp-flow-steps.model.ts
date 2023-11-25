import { BankDetailsModel } from './bank-details.model';
import { ContactDetailsModel } from './contact-details.model ';
import { EmploymentDetailsModel } from './employment-details.model';
import { NationalityModel } from './nationality.model ';
import { PersonalDataModel } from './personal-data.model';
import { RegularExpensesDetailsModel } from './regular-expenses-details.model';

export interface CWPFlowStepsModel {
  personalData: PersonalDataModel;
  contactDetails: ContactDetailsModel;
  nationality: NationalityModel;
  bankDetails: BankDetailsModel;
  employmentDetails: EmploymentDetailsModel;
  regularExpenses: RegularExpensesDetailsModel;
  overallOverview: string;
}
