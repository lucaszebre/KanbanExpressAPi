# E-Commerce RESTful API Documentation

The E-Commerce API is developed using **Express.js** and **Node.js** and **PostgreSql** and **Prisma** . It provides comprehensive functionalities for handling products, orders, reviews, order items, and user shopping carts within an e-commerce platform.

## Features
- Register , Login 
- CRUD cart , product , orders , reviews etc...
- role customer , admin 

## API Endpoints

## Products ##

- **Get All Products**

    - Method: GET
    - Endpoint: /product
    - Access: Public
    - Description: Retrieves all products.

- **Create a Product**

    - Method: POST
    - Endpoint: /product
    -  Access: Admin Only
    - Description: Adds a new product.
    - Body Parameters:
    - name: string (Required)
    - description: string (Required)
    - price: float (Required)
    - stock: integer (Required)

- **Update a Product**

    - Method: PUT
    - Endpoint: /product/:id
    - Access: Admin Only
    - Description: Modifies a specific product.
    - Path Parameters:
    - id: string (Product ID)
    - Body Parameters:
    - name: string (Optional)
    - description: string (Optional)
    - price: float (Optional)
    - stock: integer (Optional)

- **Delete a Product**

    - Method: DELETE
    - Endpoint: /product/:id
    - Access: Admin Only
    - Description: Removes a specific product.
    - Path Parameters:
    - id: string (Product ID)

## Orders ##

- **Get All Orders**

    - Method: GET
    - Endpoint: /order
    - Access: Public/Private
    - Description: Retrieves all orders.

- **Get One Order**

    - Method: GET
    - Endpoint: /order/:id
    - Access: Public/Private
    - Description: Retrieves details of a specific order by its id.

- **Create an Order**

    - Method: POST
    - Endpoint: /order
    - Access: Private
    - Description: Creates a new order.
    - Body Parameters:
    - price: float (Required)
    - orderStatus: string (Required)
    - method: string (Required)

- **Update an Order**

    - Method: PUT
    - Endpoint: /order/:id
    - Access: Private
    - Description: Updates a specific order.
    - Body Parameters:
    - price: float (Optional)
    - orderStatus: string (Optional)
    - method: string (Optional)

- **Delete an Order**

    - Method: DELETE
    - Endpoint: /order/:id
    - Access: Admin Only
    - Description: Deletes a specific order.
    Reviews

## Review

- **Get All Reviews**

    - Method: GET
    - Endpoint: /review
    - Access: Public
    - Description: Retrieves all reviews.

- **Get One Review**

    - Method: GET
    - Endpoint: /review/:id
    - Access: Public
    - Description: Retrieves a specific review by its id.

- **Create a Review**

    - Method: POST
    - Endpoint: /review
    - Access: Private
    - Description: Creates a new review.
    - Body Parameters:
    - productId: string (Required)
    - rating: integer (Required)
    - text: string (Required)

- **Delete a Review**

    - Method: DELETE
    - Endpoint: /review/:id
    - Access: Admin Only
    - Description: Deletes a specific review.
    Order Items

## Items

- **Get All Order Items**

    - Method: GET
    - Endpoint: /orderitem
    - Access: Public/Private
    - Description: Retrieves all order items.

- **Get One Order Item**

    - Method: GET
    - Endpoint: /orderitem/:id
    - Access: Public/Private
    - Description: Retrieves a specific order item by its id.

- **Create an Order Item**

    - Method: POST
    - Endpoint: /orderitem
    - Access: Private
    - Description: Creates a new order item.
    - Body Parameters:
    - orderId: string (Required)
    - productId: string (Required)
    - quantity: integer (Required)
    - price: float (Required)

- **Delete an Order Item**

    - Method: DELETE
    - Endpoint: /orderitem/:id
    - Access: Admin Only
    - Description: Deletes a specific order item.


## Cart ##

- **Get User Cart**

    - Method: GET
    - Endpoint: /cart
    - Access: Private
    - Description: Retrieves the user's cart items.

- **Add Item to Cart**

    - Method: POST
    - Endpoint: /cart
    - Access: Private
    - Description: Adds an item to the user's cart.
    - Body Parameters:
    - productId: string (Required)
    - quantity: integer (Required)

- **Update Cart Item**

    - Method: PUT
    - Endpoint: /cart/:cartId
    - Access: Private
    - Description: Modifies the quantity of an item in the cart.
    - Path Parameters:
    - cartId: string (Cart Item ID)
    - Body Parameters:
    - quantity: integer (Optional)

- **Remove Item from Cart**

    - Method: DELETE
    - Endpoint: /cart/:cartId
    - Access: Private
    - Description: Deletes an item from the cart.
    - Path Parameters:
    - cartId: string (Cart Item ID)

- **Clear User Cart**

    - Method: DELETE
    - Endpoint: /cart/clear
    - Access: Private
    - Description: Clears all items from the user’s cart.


## Contributing
To contribute to the project, kindly fork the repository and open a pull request. For inquiries or discussions about development, contact me on [Twitter](https://twitter.com/YourTwitterHandle).

## Security Vulnerabilities
Should you identify any security vulnerabilities within the project, please report them by creating an issue. Your contributions towards securing the application are greatly appreciated.
