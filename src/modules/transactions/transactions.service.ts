import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { School } from '../schools/entities/school.entity';
import { TransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(@InjectRepository(Transaction) private transactionRepository:Repository<Transaction>,
  @InjectRepository(User) private userRepository:Repository<User>,
  @InjectRepository(School) private schoolRepository:Repository<School>,
  ){}

  async makeTransaction(transactionDto:TransactionDto){
    try {
      const maketransaction = new Transaction();
      maketransaction.user = await this.userRepository.findOne({where:{id:transactionDto.user}});
      maketransaction.school = await this.schoolRepository.findOne({where:{id:transactionDto.school}});
      maketransaction.payer = transactionDto.payer
      maketransaction.transaction_name = transactionDto.transaction_name
      maketransaction.gate_way_transaction = transactionDto.gate_way_transaction
      maketransaction.payment_method = transactionDto.payment_method
      maketransaction.price=transactionDto.price
      maketransaction.amount = transactionDto.price
      await this.transactionRepository.save(maketransaction);
      return` Transaction is Created`
    } catch (error) {
      throw new BadRequestException('something is worng!!!')
    }
  }

  async editTransaction(id:number, transactionDto:TransactionDto){
    try {
      const editTransaction = await this.transactionRepository.findOne({where:{id:id}});
      if(!editTransaction) throw new Error('This transaction is not found!!!');
      editTransaction.user = await this.userRepository.findOne({where:{id:transactionDto.user}});
      editTransaction.school = await this.schoolRepository.findOne({where:{id:transactionDto.school}});
      editTransaction.payer = transactionDto.payer
      editTransaction.transaction_name = transactionDto.transaction_name
      editTransaction.gate_way_transaction = transactionDto.gate_way_transaction
      editTransaction.payment_method = transactionDto.payment_method
      editTransaction.price=transactionDto.price
      editTransaction.amount = transactionDto.price

      await this.transactionRepository.save(editTransaction);
      return`The transaction is upadate`;
    } catch (error) {
      throw new HttpException({
        status:HttpStatus.BAD_REQUEST,
        message:('Something is worng!!!')
      }, HttpStatus.BAD_REQUEST)
    }
  }
  
}
