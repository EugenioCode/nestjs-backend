import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const port = 4000;
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'log'],
    // logger: false, // 关闭整个nestjs日志
  });
  app.setGlobalPrefix('api/v1');
  await app.listen(port);
  logger.log(`App running on port: ${port}`);
}

bootstrap();
