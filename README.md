# graphql-playground

## Queries

```graphql
query {
  singleProduct: getProduct(id: "6756f27b62da91f56214d4ef") {
    ...productFragment
  }
  
  allProducts: getAllProducts {
    ...productFragment
  }
}

fragment productFragment on Product {
  name
  description
  price
}
```

## Mutations

### Create

```graphql
mutation {
  createProduct(input: {
    name: "Spade and Shovel",
    description: "An outdoor widget",
    price: 12.99,
    sold: ONSALE,
    inventory: 10,
    stores: [
      {
        store: "Builders"
      },
      {
        store: "Blitz"
      }
    ]
  }) {
    price
    name
    description
    inventory
    sold
    id
  }
}
```

### Update

```graphql
mutation {
  updateProduct(input:{
    id: "6756f27b62da91f56214d4ef",
    price: 50.99,
    stores: [
      { store: "Waverley" },
      { store: "Villeria" }
    ]
  }) {
    price
    name
  }
}
```

### Destroy

```graphql
mutation {
  deleteProduct(id: "6756f27b62da91f56214d4ef")
}
```
