import { Module } from '@nestjs/common';
import { CreditController } from './credit-card.controller';

@Module({
  controllers: [CreditController]
})
export class CreditCardModule {}
