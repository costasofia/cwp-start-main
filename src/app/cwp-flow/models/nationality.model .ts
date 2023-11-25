export interface NationalityModel {
  nationalityPage: {
    country: string;
    residencePermit?: string;
    dateOfExpiry?: Date;
    countryExceptionCheck?: boolean;
  };
}
