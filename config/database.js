// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("DATABASE_HOST", "localhost"),
//       port: env.int("DATABASE_PORT", 5432),
//       database: env("DATABASE_NAME", "firstDB"),
//       user: env("DATABASE_USER", "postgres"),
//       password: env("DATABASE_PASSWORD", "SHIVAM"),
//       schema: env("DATABASE_SCHEMA", "public"),
//       //asd
//     },
//   }});

  module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
      client: "postgres",
      connection: {
        host: env("DATABASE_HOST", "ec2-52-22-136-117.compute-1.amazonaws.com"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "d15vvqhjfabci3"),
        user: env("DATABASE_USER", "fifrzgbauvcouo"),
        password: env("DATABASE_PASSWORD", "a509f3cfd89473794ade6865133d575356c6f3a065c418d75fd8c6f433524f9b"),
        schema: env("DATABASE_SCHEMA", "public"),
        //asd asdasd
      },
    }});