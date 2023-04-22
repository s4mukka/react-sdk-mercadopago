export interface CheckoutParams {
  preference: {
    id: string;
  }
  theme?: {
    elementsColor?: string;
    headerColor?: string;
  };
  autoOpen?: boolean;
  render?: {
    container: string;
    label: string;
    type?: string;
  }
}
