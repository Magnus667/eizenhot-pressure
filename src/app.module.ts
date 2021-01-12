import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

console.log(process.env.npm_lifecycle_event)

// '..' is used for heroku. '../..' is used for development.
const pathFix = process.env.npm_lifecycle_event !== "start" ? '../..' : '..';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, pathFix, 'eizenhot-pressure-frontend/dist/eizenhot-pressure-frontend')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
