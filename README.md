# Expense Tracking System

The Expense Tracking System is a web application that allows users to track their daily expenses. The application provides a user-friendly interface for users to input their expenses, categorize them, and view a list of entered expenses. The backend is built using Spring Boot for the server-side, and the frontend is developed using React.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Authentication
- Expense Entry with Amount, Date, Category, and Description
- Expense Categorization
- Displaying a List of Entered Expenses
- Aspect-Oriented Logging for Expense Entry
- Service-Oriented Architecture (SOA) Principles

## Project Structure

- **backend**: Contains the Spring Boot application for the backend.
  - `src`: Source code for the backend.
  - `pom.xml`: Maven configuration file for dependencies.

- **frontend**: Contains the React application for the frontend.
  - `public`: Static assets and HTML template.
  - `src`: Source code for the React application.
  - `package.json`: Node.js configuration file.

## Technologies Used

The Expense Tracking System is built using a combination of technologies for both the backend and frontend:

### Backend

- **Spring Boot**: A Java-based framework used for building the backend server.
- **Java Persistence API (JPA)**: A standard interface for Java applications to interact with relational databases.
- **Hibernate**: An object-relational mapping framework for Java applications.
- **Maven**: A build tool used for managing dependencies and building the project.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **Create React App**: A tool for creating React applications with no build configuration.
- **Node.js**: A JavaScript runtime used for building and running the frontend.

### Database

- **MySQL**: A relational database management system used to store user and expense data.

### Additional Concepts

- **Aspect-Oriented Programming (AOP)**: Used for separating cross-cutting concerns such as logging.
- **Service-Oriented Architecture (SOA) Principles**: Applied to enhance modularity and scalability.


## Setup

1. **Backend Setup:**
   - Navigate to the `backend` directory.
   - Open the project in your preferred IDE (IntelliJ, Eclipse, etc.).
   - Build and run the Spring Boot application.

2. **Frontend Setup:**
   - Navigate to the `frontend` directory.
   - Run `npm install` to install dependencies.
   - Run `npm start` to start the React development server.

3. **Access the Application:**
   - Open your web browser and go to `http://localhost:3000` to access the application.

## Usage

- Register a new user or log in if you already have an account.
- Enter your expenses, providing the amount, date, category, and description.
- View and manage your expenses and categories.


## License

This project is licensed under the [MIT License](LICENSE).
