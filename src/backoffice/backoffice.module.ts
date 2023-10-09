import { Module } from '@nestjs/common';
import { CustumerController } from './controllers/customer.controller';

@Module({
    controllers: [CustumerController],
})
export class BackofficeModule {}
