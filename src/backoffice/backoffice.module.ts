import { Module } from '@nestjs/common';
import { CustumerController } from './controllers/customer.controller';
import { CustomerSchema } from './schemas/customer.schema';
import { UserSchema } from './schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([
        {
            name: 'Customer',
            schema: CustomerSchema,
        },
        {
            name: 'User',
            schema: UserSchema,
        }
    ])],
    controllers: [CustumerController],
})
export class BackofficeModule {}
