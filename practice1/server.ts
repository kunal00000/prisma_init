import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

// get all jokes
app.get("/", async (req: Request, res: Response) => {
  const jokes = await prisma.joke.findMany({
    include: { User: true }
  });

  res.json({ jokes });
});

// create a new joke
app.post("/", async (req: Request, res: Response) => {
  const new_joke = await prisma.joke.create({
    data: {
      text: "This is a joke",
      userId: "a9355c2c-4575-4940-8098-045cdacb1514"
    }
  });

  res.json({ new_joke });
});

// get a joke by id
app.get("/:joke_id", async (req: Request, res: Response) => {});

// delete a joke
app.delete("/:joke_id", async (req: Request, res: Response) => {});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
