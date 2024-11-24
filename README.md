# Stationery Shop

### Overview

The Stationery Shop is a fully functional web application built with Express and TypeScript for managing stationery products and orders. It uses MongoDB and Mongoose for database operations and schema validation, ensuring data integrity and a smooth user experience.

This project demonstrates CRUD operations for managing products and orders, along with inventory management, error handling, and schema validations.

---

### Features

### Stationery Product Management

- Create, read, update, and delete stationery products.
- Categorized products with predefined types (e.g., Writing, Office Supplies, etc.).
- Query products by name, brand, or category.

---

### Error Handling

**Stationery Product Model**

- Comprehensive error messages for validation failures and resource not found errors.
- Includes detailed stack traces for debugging (in development mode).

### Built-in API Endpoints

**Products**

/api/products (POST, GET, PUT, DELETE)

#### **Products**

- /api/orders (POST)

### Technologies Used

- Backend: Node.js, Express
- Programming Language: TypeScript
- Database: MongoDB (with Mongoose)
- Validation: Mongoose schema validation

---

## **Installation and Setup**

### Prerequisites

- Node.js and npm/yarn installed
- MongoDB server running

### Steps

### 1.Clone the repository

```
git clone <repository-url>
cd stationery-shop
```

### 2.Install dependencies:

```
npm install

```

### 3. Create a .env file for environment variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string

```

### 4. Start the server:

```bash
npm run dev

```

## Live Preview

[Live Preview](https://l2b4a2-mongoose-stationery-shop.vercel.app/)

## API Endpoints

### Products

- Create Product: POST /api/products
- Get All Products: GET /api/products
- Get Product by ID: GET /api/products/:productId
- Update Product: PUT /api/products/:productId
- Delete Product: DELETE /api/products/:productId

### Orders

- Place Order: POST /api/orders
- Get All orders: GET /api/orders
- Get total revenue: GET /api/orders/revenue

### Example API Request and Response

#### Request

```

POST /api/products
{
  "name": "Notebook",
  "brand": "Moleskine",
  "price": 15,
  "category": "Office Supplies",
  "description": "A high-quality notebook for professionals.",
  "quantity": 200,
  "inStock": true
}
```

#### Response

```
{
  "message": "Product created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 15,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 200,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}

```

## License

### MIT License
