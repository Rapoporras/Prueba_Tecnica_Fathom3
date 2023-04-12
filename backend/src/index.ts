import fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const app = fastify();

app.register(cors);

app.get("/users", async () => {
  return prisma.user.findMany();
});

app.get("/jokes", async () => {
  return prisma.joke.findMany();
});

app.get("/jokes_random", async (req, reply) => {
  const usuarios = await prisma.joke.findMany();
  const indiceAleatorio = Math.floor(Math.random() * usuarios.length);
  return prisma.joke.findUnique({ where: { id: Number(indiceAleatorio) } });
});

app.get<{ Params: { id: string } }>("/users/:id", async (req, reply) => {
  const { id } = req.params;
  return prisma.user.findUnique({ where: { id: Number(id) } });
});

app.post<{ Body: { name: string; email: string; password: string } }>(
  "/users",
  async (req, reply) => {
    const { name, email, password } = req.body;
    return prisma.user.create({ data: { name, email, password } });
  }
);

app.put<{
  Params: { id: string };
  Body: { name?: string; email?: string; password?: string };
}>("/users/:id", async (req, reply) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  return prisma.user.update({
    where: { id: Number(id) },
    data: { name, email, password },
  });
});

app.delete<{ Params: { id: string } }>("/users/:id", async (req, reply) => {
  const { id } = req.params;
  return prisma.user.delete({ where: { id: Number(id) } });
});

app.post<{ Body: { email: string; password: string } }>(
  "/login",

  async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send({
        message: "Missing username or password",
      });
      return;
    }
    return prisma.user
      .findUnique({
        where: {
          email: email,
        },
      })
      .then((user) => {
        if (user) {
          if (user.password === password) {
            return res.send({
              message: "User authenticated successfully",
              // userToken: user.token,
              user: {
                email: user.email,
                id: user.id,
                name: user.name,
              },
            });
          } else {
            return res.status(400).send({
              message: "Incorrect password",
            });
          }
        } else {
          return res.status(400).send({
            message: "No user found",
          });
        }
      });
  }
);

const start = async () => {
  try {
    await prisma.$connect();
    await app.listen({ port: 4000 });
    console.log("Users API listening on port 4000!");
  } catch (err) {
    console.error(err);
  }
};

start();
