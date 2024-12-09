import { buildSchema } from "graphql";

const schema = buildSchema(`

  type Product {
    id: ID
    name: String
    description: String
    price: Float
    sold: Sold
    inventory: Int
    stores: [Store]!
  }

  enum Sold {
    SOLDOUT
    ONSALE  
  }

  type Store {
    store: String
  }

  type Query {
    getProduct(id: ID): Product
    getAllProducts: [Product]
  }

  input StoreInput {
    store: String
  }

  input ProductInput {
    id: ID
    name: String
    description: String
    price: Float
    sold: Sold
    inventory: Int
    stores: [StoreInput]!
  }

  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(input: ProductInput): Product
    deleteProduct(id: ID!): String
  }
`);

export default schema;
