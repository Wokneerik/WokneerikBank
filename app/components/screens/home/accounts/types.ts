export type TypeName = 'Vokneerik Black' | 'Vokneerik Debit'

export type TypeCurrency = 'EUR' | 'USD'

export interface IAccount {
    _id: string
    userId: string
    balance: number
    cardNumber: string
    currency: TypeCurrency
    name: TypeName
}