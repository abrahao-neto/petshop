import { Adress } from './adress.model';
import { CreditCard } from './credit-card.model';
import { Pet } from './pet.model';
import { User } from './user.model';

export class Customer {
    constructor(
        public name: string,
        public document: string,
        public email: string,
        public pets: Pet[],
        public billingAdress: Adress,
        public shippingAdress: Adress,
        public creditCard: CreditCard,
        public user: User
    ) { }
}
