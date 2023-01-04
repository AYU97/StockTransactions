
export interface Transactions {
    sku: string;
    type: string;
    qty:number
}


import fs from 'fs'
var transactionsArray = JSON.parse(fs.readFileSync('transactions.json', 'utf-8'))// import stockJson from '../src/'
export const transactions: Transactions[] = transactionsArray