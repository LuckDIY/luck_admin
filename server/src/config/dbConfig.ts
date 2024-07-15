// 数据库配置
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql', // 数据库类型
  host: '192.168.1.13', // 数据库地址
  port: 3306, // 端口
  username: 'root', // 用户名
  password: '123456', // 密码
  database: 'luck', // 数据库名
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // 实体类
  synchronize: true, // 自动创建表
  autoLoadEntities: true, // 自动加载实体类
};
