import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { LoginAccountDto } from './dto/LoginAccountDto';
import { ResultVo } from '../vo/ResultVo';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccountVo } from './entities/AccountVo';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private usersRepository: Repository<Account>,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  findAll() {
    return this.usersRepository.find({});
  }

  findOne(id: number) {
    return this.usersRepository.findOne({ where: { id: id } });
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }

  login(loginAccountDto: LoginAccountDto): ResultVo<AccountVo> {
    const { password, username, type } = loginAccountDto;
    const result: ResultVo<AccountVo> = {
      code: 200,
      messages: 'ok',
      data: {
        name: 'Serati Ma',
        avatar:
          'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userId: '00000001',
        signature: '海纳百川，有容乃大',
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
        id: 0,
      },
    };
    if (password === 'ant.design' && username === 'admin') {
      result.data = {
        ...result.data,
        id: 1,
        access: username,
      };
      return result;
    }
    if (password === 'ant.design' && username === 'user') {
      result.data = {
        ...result.data,
        id: 2,
        access: username,
      };
      return result;
    }
    if (type === 'mobile') {
      result.data = {
        ...result.data,
        id: 1,
        access: 'admin',
      };
      return result;
    }

    result.code = 200;
    result.messages = '找不到用户';
    return result;
  }
}
