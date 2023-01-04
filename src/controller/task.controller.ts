import * as TaskService from '../service/task.service';

export const getAllStocks = async (req:any, res:any) => {
    const stocks = await TaskService.getAllStocks();
    
    try {
        res.status(200).send(stocks);
      } catch (e:any) {
        res.status(404).send(e.message);
      }
  };

  export const getAllTransactions = async (req:any, res:any) => {
    const transactions = await TaskService.getAllTransactions();
    
    try {
        res.status(200).send(transactions);
      } catch (e:any) {
        res.status(404).send(e.message);
      }
  };

  export const getProductBySKU= async (req:any, res:any) => {
    const sku = req.query.sku
    const skuFinal = await TaskService.getProductBySKU(sku);
    
    try {
        res.status(200).send(skuFinal);
      } catch (e:any) {
        res.status(404).send(e.message);
      }
  };

