import { AddressModel } from './address.model';

export interface EmploymentDetailsModel {
  employmentStatus: string;
  monthlyNetIncome?: string;
  employedSince: Date;
  employmentContractTemporaryOrPermanent?: string;
  endofTheFixedTermContract?: Date;
  countrOfMajorityOfSales?: string;
  employerAddress?: AddressModel;
}

// Depending on employment status, the montlhy net income is obligatory
