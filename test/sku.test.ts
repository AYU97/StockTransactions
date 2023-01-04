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

    it("should return No records found", async () => {
        const expectedResult = await TaskService.getProductBySKU("")
        expect(expectedResult).toBe("No records found");
    });
});
