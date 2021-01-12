import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const frontendDirectory = path.join(__dirname, '../../eizenhot-pressure-frontend/dist/eizenhot-pressure-frontend')
  app.useStaticAssets(frontendDirectory);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
