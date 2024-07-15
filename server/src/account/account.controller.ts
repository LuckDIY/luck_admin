import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { LoginAccountDto } from './dto/LoginAccountDto';
import { Request } from 'express';
import { Account } from './entities/account.entity';
import { ResultVo } from '../vo/ResultVo';
import { AccountVo } from './entities/AccountVo';

declare module 'express-session' {
  interface SessionData {
    account: AccountVo;
  }
}

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post('login')
  login(@Body() loginAccountDto: LoginAccountDto, @Req() req: Request) {
    console.log('打印请求参数', loginAccountDto);
    var accountResultVo = this.accountService.login(loginAccountDto);
    req.session.account = accountResultVo.data;
    return accountResultVo;
  }

  /**
   * 获取当前用户
   */
  @Get('currentUser')
  currentUser(@Req() req: Request) {
    console.log(req.session);
    return {
      success: true,
      data: req.session.account,
    };
  }

  /**
   * 获取当前用户
   */
  @Post('outLogin')
  outLogin(@Req() req: Request): ResultVo<null> {
    req.session.account = null;
    return {
      code: 200,
      messages: 'ok',
    };
  }

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(+id);
  }
}
