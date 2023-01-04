Pre requisite

1. Do npm install
2. Create an .env file at the root of the project and assign a PORT value like (PORT=8080)


To start the application

1. Open one terminal and run "npm run webpack" - this will generate/update the build and create/update the dist folder
2. Open another terminal and run "npm run start" - to trigger the index.ts for application


Routes

1. To get the base page -> "localhost:8080/task" 
2. To get all the stocks -> "localhost:8080/task/stocks" 
3. To get all the transactions -> "localhost:8080/task/transactions" 
4. To get the sku based results -> "localhost:8080/task/sku?sku={putAnySKU}" 


To test the application

1. npm run test