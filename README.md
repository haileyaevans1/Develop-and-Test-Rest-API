# Develop and Test a REST API

This project is a simple REST API built with TypeScript, Express, Zod,
and Swagger. It demonstrates how to design, build, validate, and
document API endpoints. The application uses an in-memory data store and
focuses on foundational backend development concepts.

## Overview

The goal of this project is to practice creating and testing API
endpoints following standard REST principles. It includes:

-   CRUD operations for a sample resource\
-   Request validation using Zod\
-   Centralized error handling\
-   Auto-generated API documentation using Swagger\
-   A beginner-friendly folder structure

This project is intended for learning and practice, particularly for
developers new to TypeScript or backend API development.

## Features

-   Create, read, update, and delete operations\
-   Input validation using Zod schemas\
-   Error responses for invalid data or missing resources\
-   Swagger UI documentation available through the browser\
-   Organized code structure for easy extension

## Requirements

-   Node.js version 18 or later\
-   npm or yarn\
-   An API testing tool such as Postman\
-   Basic knowledge of TypeScript and Express

## Getting Started

### 1. Clone the repository

    git clone https://github.com/haileyaevans1/Develop-and-Test-Rest-API.git
    cd Develop-and-Test-Rest-API

### 2. Install dependencies

    npm install

### 3. Run the development server

    npm run dev

By default, the application starts on port 3000 unless configured
otherwise.

### 4. Access API documentation

Open the following URL in your browser:

    http://localhost:3000/api-docs

Swagger UI will display all available endpoints, request formats, and
expected responses.

## Testing the API

Use Postman or any API tool to test the endpoints.

Common actions to test include:

-   Sending a POST request to create a new item\
-   Fetching all items with GET\
-   Fetching a single item by ID\
-   Updating an item with PUT\
-   Deleting an item with DELETE\
-   Sending intentionally invalid data to confirm validation behavior\
-   Requesting resources using non-existent IDs

## Project Structure

    /code
      /start
        ├── src
        │   ├── routes
        │   │   └── product.routes.ts
        │   ├── schemas
        │   ├── errors
        │   ├── controllers
        │   ├── middleware
        │   └── index.ts
        ├── package.json
        └── tsconfig.json

Key components include:

-   `routes/` -- Defines all API endpoints\
-   `schemas/` -- Contains Zod schemas for validating request data\
-   `errors/` -- Centralized error classes and error-handling logic\
-   `index.ts` -- Application entry point

## Learning Objectives

This project reinforces several backend development concepts:

-   Structuring a basic Express API\
-   Validating incoming data with Zod\
-   Handling errors consistently\
-   Writing clean and maintainable TypeScript code\
-   Providing documentation through OpenAPI/Swagger

## Possible Enhancements

Extend this project further, consider:

-   Adding a real database such as PostgreSQL, MongoDB, or SQLite\
-   Implementing authentication with JSON Web Tokens (JWT)\
-   Writing automated tests\
-   Adding pagination or search features\
-   Creating additional resource types\
-   Using environment variables for configuration settings

