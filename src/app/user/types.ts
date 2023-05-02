export const types = `#graphql

    type User {
        id: ID!
        firstName: String!
        lastName: String
        email: String!
        profileImageURL: String

        tweets: [Tweet]
    }

`;
