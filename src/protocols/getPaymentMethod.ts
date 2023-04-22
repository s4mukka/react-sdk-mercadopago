import { Cause } from './cause'
import { ProcessingMode } from './processingMode'

export type GetPaymentMethod = (
  settings: {
      bin: string
      payment_method_id?: string
  },
  callback: CallbackGetPaymentMethod
) => CallbackGetPaymentMethod

export type CallbackGetPaymentMethod = (status: number, response: {
  accreditation_time: number
  additional_info_needed: string[]
  deferred_capture: string
  financial_institutions: any[]
  id: string
  max_allowed_amount: number
  min_allowed_amount: number
  name: string
  payment_type_id: string
  processing_modes: string[]
  secure_thumbnail: string
  settings: Settings[]
  status: string
  thumbnail: string
  error?: string
  cause?: Cause[] | Cause
  message?: string
}) => void

export interface PaymentMethodsParams {
  bin: string;
  processingMode?: ProcessingMode;
}

export interface PaymentMethodsResponse {
  paging: {
  total: number;
  limit: number;
  offset: number;
  };
  results: [{
    secure_thumbnail: string;
    min_accreditation_days: number;
    max_accreditation_days: number;
    id: string;
    payment_type_id: string;
    accreditation_time: number;
    thumbnail: string;
    marketplace: string;
    deferred_capture: string;
    labels: string[];
    name: string;
    site_id: string;
    processing_mode: string;
    additional_info_needed: string[];
    status: string;
    settings: Settings[];
    issuer: {
      default: boolean;
      name: string;
      id: number;
    };
  }]
}

type Settings = {
    bin: {
        pattern: string
        installments_pattern: string
        exclusion_pattern: string
    }
    card_number: {
        length: number
        validation: string
    }
    security_code: {
        mode: string
        card_location: string
        length: number
    }
}
