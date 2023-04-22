import { ProcessingMode } from "./processingMode";

export interface InstallmentsParams {
  amount: string;
  bin: string;
  locale?: string;
  processingMode?: ProcessingMode;
}

export interface InstallmentsResponse extends InstallmentsParams {
  merchant_account_id?: string;
  payer_costs: PayerCosts[]
}

interface PayerCosts {
  installments: number;
  installment_rate: number;
  discount_rate: number;
  labels: string[];
  installment_rate_collector: string[];
  min_allowed_amount: number;
  max_allowed_amount: number;
  recommended_message: string;
  installment_amount: number;
  total_amount: number;
  payment_method_option_id: string;
}
