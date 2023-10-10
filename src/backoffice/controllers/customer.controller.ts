import { Controller, Get, Post, Put, Delete, Param, Body, UseInterceptors } from '@nestjs/common';
import { Result } from '../models/result.model';
import { ValidatorInteceptor } from 'src/interceptors/validator.interceptor';
import { CreateCustomerContract } from '../contracts/customer.contracts';
import { CreateCustomerDto } from '../dtos/create-customer-dto';

// localhost:3000/v1/customer
@Controller('v1/customers')
export class CustumerController {
    @Get()
    get() {
        return new Result(null, true, [], null);
    }

    @Get(':document')
    getById(@Param('document') document: string) {
        return new Result(null, true, {}, null);
    }

    @Post()
    @UseInterceptors(new ValidatorInteceptor(new CreateCustomerContract()))
    post(@Body() body: CreateCustomerDto) {
        return new Result('Cliente criado com sucesso!', true, body, null);
    }

    @Put(':document')
    put(@Param('document') document, @Body() body) {
        return new Result('Cliente alterado com sucesso!', true, body, null);
    }

    @Delete(':document')
    delete(@Param('document') document,) {
        return 'Remover um cliente';
    }
}


