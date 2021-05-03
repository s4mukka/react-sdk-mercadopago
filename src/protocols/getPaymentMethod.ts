import { Cause } from './cause'

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
