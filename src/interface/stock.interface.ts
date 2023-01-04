
export interface Stocks {
    sku: string;
    stock: number;
}


import fs from 'fs'
var stocksArray = JSON.parse(fs.readFileSync('stock.json', 'utf-8'))
export const stocks: Stocks[] = stocksArray