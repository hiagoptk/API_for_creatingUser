import swaggerUi from "swagger-ui-express";

import { app } from ".";
import swagerFile from "./swagger.json";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagerFile));

app.listen(3333, () => console.log("Server is running!"));
