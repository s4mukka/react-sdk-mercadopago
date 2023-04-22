export interface IssuersParams {
  paymentMethodId: string;
  bin: string;
}

export interface IssuersResponse {
  id: string;
  name: string;
  secure_thumbnail: string;
  thumbnail: string;
  processing_mode: string;
  merchant_account_id?: string;
}