import express, { Application, Request, Response } from "express";

const app: Application = express();
const port = 800340;

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface A {
    name: string;
    age: number;
}

const g: A = {
    name: "aasdasdsdsad",
    age: 343
}

console.log(g);

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

app.listen(port, (): void => {
  console.log(`Connected successfully on port ${port}`);
});
