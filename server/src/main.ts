import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from "express-session";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(session({
    secret: '密钥', // 用于签名会话 ID 的密钥
    resave: false, // 是否重新保存会话信息
    saveUninitialized: false, // 是否保存未初始化的会话
    name:'session_key'
  }));
  await app.listen(3000);
}
bootstrap();
