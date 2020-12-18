import Hapi from "@hapi/hapi";

const start = async () => {
  const server = Hapi.server({
    port: 8000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/hello",
    handler: (req, h) => {
      return "Hello";
      // Or custom response code
      //   return h.response("Hello").code(***);
    },
  });

  await server.start();
  console.log(`Server listening on ${server.info.uri}`);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

start();
