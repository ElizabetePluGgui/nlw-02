import express from "express";

const app = express();

//app.use(cors());
//app.use(express.json());
//app.use(routes);

app.get("/users", (request, response) => {
  return response.send("ACESSOU A ROTA");
});

app.listen(3333);
