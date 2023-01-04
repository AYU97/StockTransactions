import { Stocks, stocks } from '../interface/stock.interface';
import { Transactions,transactions } from '../interface/transaction.interface';

export const getAllStocks = async (): Promise<Stocks[]> => {
  return stocks;
};


export const getAllTransactions = async (): Promise<Transactions[]> => {
  return transactions;
};


export const getProductBySKU = async (sku: string): Promise<any> => {
  const stocksExist = stocks.find(d => d.sku === sku);
  const transactionExist:any = transactions.find(d => d.sku === sku);

  if ((stocksExist && transactionExist) || (stocksExist) || transactionExist) {
    let stocksTotal = 0;
    let qtyTotal = 0;

    for (let i of stocks) {
      if (i.sku === sku)
        stocksTotal += i.stock
    }

    for (let i of transactions) {
      if (i.sku === sku && i.type === 'order') {
        qtyTotal -= i.qty
      }

      if (i.sku === sku && i.type === 'refund') {
        qtyTotal += i.qty
      }

    }
    if(transactionExist)
    return { sku: transactionExist.sku, qty: stocksTotal + qtyTotal }
    else if(stocksExist)
    return { sku: stocksExist.sku, qty: stocksTotal + qtyTotal }
    else {
     return "No records found"
    }

  } else {
   return "No records found"

  }
}
