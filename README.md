
# Feed Panda Backend API 
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
A Nest.js-based backend system for food delivery applications featuring category and product management with advanced filtering capabilities.

![Nest.js](https://img.shields.io/badge/Nest.js-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

## 📦 Download Project
[![Download ZIP](https://img.shields.io/badge/Download-ZIP-0a7fc1?style=for-the-badge&logo=github)](#)
[![Clone Repository](https://img.shields.io/badge/Clone-Repository-0a7fc1?style=for-the-badge&logo=git)](#)

## ✨ Features
- **Category Management**: Create, read, update, and delete restaurant categories
- **Product Management**: Create, read, update, and delete food products
- **Advanced Filtering**: Filter categories and products by various criteria
- **Database Integration**: PostgreSQL with Prisma ORM
- **API Documentation**: Automatic Swagger/OpenAPI documentation
- **Input Validation**: Comprehensive request validation
- **RESTful Design**: Clean, predictable API endpoints

## 🛠 Technology Stack
- **Framework**: Nest.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **API Documentation**: Swagger/OpenAPI
- **Validation**: class-validator

## 📁 Project Structure
```text
food-delivery-backend/
├── prisma/                   # Database configuration
|   └── schema.prisma         # Database schema                
├── src/
│   ├── main.ts                  # Application entry point
│   ├── app.module.ts           # Root application module
│   │
│   ├── categories/             # Category module
│   │   ├── categories.controller.ts
│   │   ├── categories.service.ts
│   │   ├── categories.module.ts
|   |   ├── providers/          # find all providers
|   |       ├──find-all-categories.provider.ts
│   │   └── dto/               # Data Transfer Objects of categories
│   │       ├── create-category.dto.ts
│   │       ├── update-category.dto.ts
│   │       └── category-query.dto.ts
│   │
│   ├── products/              # Product module
│   │   ├── products.controller.ts
│   │   ├── products.service.ts
│   │   ├── products.module.ts
|   |   ├── providers/          # find all providers
|   |       ├──find-all-products.provider.ts
│   │   └── dto/              # Data Transfer Objects of products
│   │       ├── create-product.dto.ts
│   │       ├── update-product.dto.ts
│   │       └── product-query.dto.ts
│   │
│   ├── prisma/                # module for prisma client
│   │   ├── prisma.service.ts
│   │   └── prisma.module.ts
│   │   
│   │
│   └── common/                # common helper functions
│       ├── helper/
|           └──generate-slug.helper.ts    # slug generator
│       └──pagination/
|          ├── dtos/
|              ├── paginatedResponse.dto.ts           
|              └── pagination.dto.ts
|          └── helper/
|              └── pagination.helper.ts
|
├── .env                      # Environment variables
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── nest-cli.json            # nestJs configuration
└── README.md               # This file
```

## 🗄 Database Schema
### Category Model
```prisma
model Category {
  id         String         @id @default(uuid())
  name       String         @unique
  slug       String         @unique
  status     CategoryStatus @default(ACTIVE)
  store_id   String
  created_At DateTime       @default(now())
  updated_At DateTime       @updatedAt

  products          Product[]
  ProductCategories ProductCategories[]

  @@unique([store_id, name])
}
```

### Product Model
```prisma
model Product {
  id               String             @id @default(uuid())
  store_id         String
  franchise_id     String
  name             String
  description      String?
  pricing_type     ProductPricingType @default(FLAT)
  price            Float
  preparation_time Float
  status           ProductStatus      @default(PUBLISHED)
  slug             String             @unique
  meta             Json?
  created_At       DateTime           @default(now())
  updated_At       DateTime           @updatedAt

  categories        Category[]
  ProductCategories ProductCategories[]
}

```

### Product-Category Relationship
```prisma
model ProductCategories {
  product_id  String
  category_id String
  product     Product  @relation(fields: [product_id], references: [id], onDelete: Cascade)
  category    Category @relation(fields: [category_id], references: [id], onDelete: Cascade)

  @@id([product_id, category_id])
}
```

## 🌐 API Endpoints
### Categories
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | /categories         | Create a new category    |
| GET    | /categories         | Get all categories       |
| GET    | /categories/:id     | Get a specific category  |
| PATCH  | /categories/:id     | Update a category        |
| DELETE | /categories/:id     | Delete a category        |

### Products
| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | /products           | Create a new product     |
| GET    | /products           | Get all products         |
| GET    | /products/:id       | Get a specific product   |
| PATCH  | /products/:id       | Update a product         |
| DELETE | /products/:id       | Delete a product         |

---

# Query Parameters / Filtering

### Category Filters
- `status` — filter by category status (e.g., `active`, `archived`)  
- `createdAt` — filter by creation date (exact or partial depending on DTO)  
- `updatedAt` — filter by updated date  
- `search` — full-text-ish search in `name` and `slug`  

### Product Filters
- `minPrice` — minimum price (float)  
- `maxPrice` — maximum price (float)    
- `status` — product status (e.g., `published`, `draft`)  
- `categoryStatus` — filter products by their categories' status  
- `createdFrom`, `createdTo` — date-range for product creation  
- `search` — search in `name`, `description`, and `slug`

---

# Installation

```bash
git clone https://github.com/Md-Rashedul-Islam-Rajib/Feed_Panda_APIs.git
cd Feed_Panda_APIs
npm install
```

---

# Environment Variables

```bash
cp .env.example .env
```

```env
DATABASE_URL="postgresql://username:password@localhost:5432/food_delivery_db"
PORT=3000
NODE_ENV=development
```

---

# Database Setup

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

# Running (Development & Production)

```bash
npm run start:dev   # Development
npm run build && npm run start:prod   # Production
```

API docs: [http://localhost:3000/api](http://localhost:3000/api)

---

# Usage Examples (curl)

```bash
# Create Category
curl -X POST http://localhost:3000/categories   -H "Content-Type: application/json"   -d '{"name":"Pizza","storeId":"store1","status":"active"}'
```

```bash
# Get Categories with filter
curl "http://localhost:3000/categories?status=active&search=pizza"
```

```bash
# Create Product
curl -X POST http://localhost:3000/products   -H "Content-Type: application/json"   -d '{"name":"Margherita Pizza","description":"Classic cheese pizza","price":12.99,"storeId":"store1","categoryIds":["clxyz..."]}'
```

```bash
# Filter Products
curl "http://localhost:3000/products?minPrice=10&maxPrice=20&categories=clxyz...,clabc...&status=published"
```

---

# Business Rules

- **Uniqueness**: Category and Product names must be unique within the same store  
- **Slug Generation**: Slugs are automatically generated per store and name  
- **Update Restrictions**: Only `name` and `status` can be updated  
- **Timestamps**: Automatic `createdAt` and `updatedAt` tracking  
- **Cascade Deletes**: Maintains referential integrity for Product-Category links

---


# Troubleshooting

- DB connection issues → check `DATABASE_URL`  
- Prisma migration errors → `npx prisma migrate resolve` or `prisma db push`  
- Unique constraint errors → names must be unique per store  
- Swagger not showing → confirm `http://localhost:3000/api` is available  

---

# Contributing

1. Fork & clone repo  
2. Create branch: `git checkout -b feature-name`  
3. Commit: `git commit -am "Add feature"`  
4. Push: `git push origin feature-name`  
5. Open PR  

---

# License

MIT License (see LICENSE file)
