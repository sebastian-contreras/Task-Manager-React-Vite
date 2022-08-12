import express from "express";
import { PORT } from "./config.js";
import cors from "cors";
import indexRoutes from "./routes/index.routes.js";
import taskRoutes from "./routes/tasks.routes.js";
import { dirname , join} from "path";
import { fileURLToPath } from "url";

const app = express();
const _dirname = dirname(fileURLToPath(import.meta.url))

//Para recibir los datos provinientes del cliente ¡¡MUY IMPORTANTE!!
app.use(express.json());
app.use(cors());
app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(_dirname,'../client/dist')))

app.listen(PORT);

console.log("Server running on port ", PORT);
