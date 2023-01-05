import * as TaskService from '../src/service/task.service';
import { stocks } from '../src/interface/stock.interface';
import {transactions } from '../src/interface/transaction.interface'

describe("test getAllStocks function", () => {
    it("should return all stocks", async () => {
        const expectedResult = await TaskService.getAllStocks()
        expect(expectedResult).toBe(stocks);
    });
});


describe("test getAllTransactions function", () => {
    it("should return all transactions", async () => {
        const expectedResult = await TaskService.getAllTransactions()
        expect(expectedResult).toBe(transactions);
    });
});


describe("test getProductBySKU function", () => {
    it("should have a property with sku and qty", async () => {
        const expectedResult = await TaskService.getProductBySKU("LTV719449/39/39")
        expect(expectedResult).toHaveProperty("sku");
        expect(expectedResult).toHaveProperty("qty");
    });

    it("should return qty as 8510 as basic stock qty is 8525 post which is subjected to add/subtract on refund/order", async () => {
        const expectedResult = await TaskService.getProductBySKU("LTV719449/39/39")
        const actualResult = {"sku": 'LTV719449/39/39', "qty": 8510}
        expect(expectedResult).toMatchObject(actualResult);
    });

    it("should return qty as 1000 as there is no transaction for this sku(added new stock for testing)", async () => {
        const expectedResult = await TaskService.getProductBySKU("AYUSHSINGH")
        const actualResult = {"sku": 'AYUSHSINGH', "qty": 1000}
       expect(expectedResult).toMatchObject(actualResult);
    });

    it("should return qty as -10 as there is no prior stock for this sku apart from order transaction(added new transaction for testing)", async () => {
        const expectedResult = await TaskService.getProductBySKU("ORDER")
        const actualResult = {"sku": 'ORDER', "qty": -10}
       expect(expectedResult).toMatchObject(actualResult);
    });


    it("should return qty as 10 as there is no prior stock for this sku apart from refund transaction(added new transaction for testing)", async () => {
        const expectedResult = await TaskService.getProductBySKU("REFUND")
        const actualResult = {"sku": 'REFUND', "qty": 10}
       expect(expectedResult).toMatchObject(actualResult);
    });


    it("should return No records found", async () => {
        const expectedResult = await TaskService.getProductBySKU("")
        expect(expectedResult).toBe("No records found");
    });
});
