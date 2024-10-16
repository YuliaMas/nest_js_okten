import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { SwaggerHelper } from './common/helpers/swagger.helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS 2024 OktenWeb')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('users')
    .addBasicAuth({
      in: 'header',
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerHelper.setDefaultResponses(document);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      docExpansion: 'list',
      defaultModelsExpandDepth: 7,
      persistAuthorization: true,
    },
  });

  const port = 3000;
  const host = 'localhost';

  await app.listen(3000, () => {
    console.log(`Server is running on http://${host}:${port}`);
    console.log(`Server is running on http://${host}:${port}/api`);
  });
}
void bootstrap();
