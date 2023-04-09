import { PrismaClient, Prisma } from "@prisma/client";
import fetch from "node-fetch";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "hola",
    email: "hola1@prisma.com",
    password: "password",
  },
  {
    name: "adios",
    email: "adios@prisma.com",
    password: "password",
  },
];

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }

  console.log("Seeding Jokes");

  const response = await fetch(
    "https://raw.githubusercontent.com/15Dkatz/official_joke_api/master/jokes/index.json"
  );
  const jokes: Joke[] = await response.json() as Joke[];

  for (const joke of jokes) {
    await prisma.joke.create({
      data: {
        type: joke.type,
        setup: joke.setup,
        punchline: joke.punchline,
      },
    });
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
