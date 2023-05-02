export const types = `#graphql

    input CreateTweetData {
        content: String!
        imageURL: String
    }

    type Tweet {
        id: ID!
        content: String!
        imageURL: String

        author: User
    }
`;
