# ZenStack Integration With RedwoodJS

### Set up

```bash
yarn rw setup package @zenstackhq/redwood
```

See [https://redwoodjs.com/docs/cli-commands#setup-package](https://redwoodjs.com/docs/cli-commands#setup-package). Package `@zenstackhq/redwood` provides an executable that sets up everything below.

### GraphQL context integration

Package `@zenstackhq/redwood` provides a GraphQLYoga plugin to add `db` field (an enhanced PrismaClient) into the GraphQL context.

### GraphQL services

Inside GraphQL services, the developer decides which PrismaClient to use - `db` (raw PrismaClient) or `context.db` (enhanced).

### Mixing ZenStack and RedwoodJS RBAC

They don't conflict. Developers can continue using RedwoodJS's RBAC GraphQL directives and helpers. ZenStack works below RedwoodJS's RBAC.

### Frontend permission checks

We don't provide any frontend permission checks for now. Users can continue using RedwoodJS's built-in RBAC helpers.

In the future, we can add `check` API to enhanced PrismaClient, and then developers can wrap it into GQL queries and use them to check permissions from the frontend.

### Deployment

We should change `@zenstackhq/runtime` to run `zenstack generate` at post-install (like Prisma does) - so developers don't need to do anything during deployment.
