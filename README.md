# Ecommerce API
An ecommerce api to create
- products
- catgory
- order

#  How to set up locally

1. Clone the project.
2. Change the file in config/example.config.json to config/config.json. [DB set-up: Postrgres].
3. Change the example.env file to .env .
4. Run 
```sh
$ npm install 
```
5. Run
```sh
$ sequelize db:migrate
```

# How to interact with APIs Endpoints locally
### Product
`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/v1/products`
* **GET** `/api/v1/products/` Get all products
* **POST** `/api/v1/products/` Create a new product
* **PUT** `/api/v1/products/:id` Update a product 
* **DELETE** `/api/v1/products/:id` Delete a product 

### Category
`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/v1/categories`

* **GET** `/api/v1/categories/` Get all categories
* **POST** `/api/v1/categries/` Create a new category
* **PUT** `/api/v1/categories/:id` Update a category
* **DELETE** `/api/v1/categories/:id` Delete a category

### Order
`Prefix: http://127.0.0.1:3000` against endpoint. Example: `http://127.0.0.1:3000/api/v1/orders`

* **GET** `/api/v1/orders/` Get all orders
* **POST** `/api/v1/orders/` Create a new order
* **PUT** `/api/v1/orders/:id` Update an order
* **DELETE** `/api/v1/orders/:id` Delete an order
