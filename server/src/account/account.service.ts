import {Injectable} from '@nestjs/common';
import {CreateAccountDto} from './dto/create-account.dto';
import {UpdateAccountDto} from './dto/update-account.dto';
import {LoginAccountDto} from "./dto/LoginAccountDto";
import {ResultVo} from "../vo/ResultVo";
import {Account} from "./entities/account.entity";

@Injectable()
export class AccountService {
    create(createAccountDto: CreateAccountDto) {
        return 'This action adds a new account';
    }

    findAll() {
        return `This action returns all account`;
    }

    findOne(id: number) {
        return `This action returns a #${id} account`;
    }

    update(id: number, updateAccountDto: UpdateAccountDto) {
        return `This action updates a #${id} account`;
    }

    remove(id: number) {
        return `This action removes a #${id} account`;
    }

    login(loginAccountDto: LoginAccountDto): ResultVo<Account> {
        const {password, username, type} = loginAccountDto;
        let result: ResultVo<Account> = {
            code: 200,
            status: 'ok',
            data: {
                name: 'Serati Ma',
                avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
                userid: '00000001',
                email: 'antdesign@alipay.com',
                signature: '海纳百川，有容乃大',
                title: '交互专家',
                group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
                tags: [
                    {
                        key: '0',
                        label: '很有想法的',
                    },
                    {
                        key: '1',
                        label: '专注设计',
                    },
                    {
                        key: '2',
                        label: '辣~',
                    },
                    {
                        key: '3',
                        label: '大长腿',
                    },
                    {
                        key: '4',
                        label: '川妹子',
                    },
                    {
                        key: '5',
                        label: '海纳百川',
                    },
                ],
                notifyCount: 12,
                unreadCount: 11,
                country: 'China',
                access: 'admin',
                geographic: {
                    province: {
                        label: '浙江省',
                        key: '330000',
                    },
                    city: {
                        label: '杭州市',
                        key: '330100',
                    },
                },
                address: '西湖区工专路 77 号',
                phone: '0752-268888888',
                id: 0
            },
        };
        if (password === 'ant.design' && username === 'admin') {
            result.data = {
                ...result.data,
                id: 1,
                access: username
            };
            return result;
        }
        if (password === 'ant.design' && username === 'user') {
            result.data = {
                ...result.data,
                id: 2,
                access: username
            };
            return result;
        }
        if (type === 'mobile') {
            result.data = {
                ...result.data,
                id: 1,
                access: 'admin'
            };
            return result;
        }

        result.code=200;
        result.status='找不到用户';
        return result;
    }
}
