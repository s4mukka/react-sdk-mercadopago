export interface CardTokenParams {
  securityCode: string;
  cardNumber?: string;
  cardholderName?: string;
  expirationMonth?: string;
  expirationYear?: string;
  identificationType?: string;
  identificationNumber?: string;
  cardId: string;
}

export interface CardTokenResponse extends CardTokenParams {
  id: string;
}
