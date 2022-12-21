import swaggerUiExpress from "swagger-ui-express";
import openApi from './openApi.json' assert {type:"json"};

export const swaggerDoc = (app) => {
  app.use('/api/v1/employees/swagger/doc',swaggerUiExpress.serve,swaggerUiExpress.setup(openApi))
}