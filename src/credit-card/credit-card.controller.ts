import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('api')
export class CreditController {

  @Get('check-credit-history')
  checkCreditHistory() {
    const creditScore = 1000;
    const existingDebt = 20000;

    return { creditScore, existingDebt };
  }

  @Post('approve-application')
  aproveCreditCard() {
    return 'success';
  }

  @Post('cancel-application')
  cancelCreditCard() {
    return 'ccanceled';
  }
}
