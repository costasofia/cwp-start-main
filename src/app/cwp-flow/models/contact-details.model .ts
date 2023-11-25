import { AddressModel } from './address.model';

export interface ContactDetailsModel {
  currentAddressePage: {
    currentAddresse: AddressModel;
  };
  previousAddresse: {
    previousAddresse?: AddressModel;
  };
  phoneNumberPage: {
    internationalCode: string;
    mobileNumber: string;
  };
}
