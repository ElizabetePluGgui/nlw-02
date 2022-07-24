import express from "express";

const app = express();

//app.use(cors());
app.use(express.json());
//app.use(routes);

app.get("/", (request, response) => {
  return response.json("ACESSOU A ROTA");
});

app.listen(3333);
