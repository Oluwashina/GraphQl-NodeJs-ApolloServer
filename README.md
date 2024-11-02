# GraphQL API with Node.js and Apollo Server

This repository contains a basic setup for building a GraphQL API with Node.js and Apollo Server. The purpose is to provide a structured approach to building scalable, efficient, and easy-to-maintain GraphQL services.

## Features

- **Apollo Server**: A production-ready GraphQL server that works with any Node.js HTTP server.
- **GraphQL**: A query language for APIs and a runtime for executing queries by using a type system.
- **Modular Structure**: Designed to keep your codebase clean and maintainable by organizing resolvers and schema types.

## Project Structure

```
.
├── src
│   ├── index.js          # Entry point for the server
│   ├── schema.js         # GraphQL schema definitions
│   ├── resolvers.js      # Resolver functions for GraphQL queries and mutations
│   ├── data              # Example data source or database models
│   └── utils             # Utility functions (e.g., authentication helpers)
├── .env                  # Environment variables
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- **Node.js** (version 14 or above)
- **npm** (version 6 or above)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Oluwashina/GraphQl-NodeJs-ApolloServer.git
   cd GraphQl-NodeJs-ApolloServer
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Create a `.env` file in the root directory and add any required environment variables.

### Running the Server

To start the server in development mode:

```bash
npm run dev
```

The server will start on `http://localhost:4000` by default. You can access the Apollo Studio at `http://localhost:4000/graphql` for testing queries and mutations.

### Building for Production

To build and run the server in production mode:

```bash
npm run build
npm start
```

## Usage

- **Schemas**: Define your GraphQL types and operations (queries, mutations, subscriptions) in `schema.js`.
- **Resolvers**: Write your resolver functions in `resolvers.js` to handle each GraphQL operation.

## Examples

To query all items:

```graphql
query {
  items {
    id
    name
    description
  }
}
```

To add a new item:

```graphql
mutation {
  addItem(name: "Example", description: "This is an example item") {
    id
    name
  }
}
```

## Contributing

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request
