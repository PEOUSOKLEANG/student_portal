import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { SchoolsModule } from './modules/schools/schools.module';
import { SubjectsModule } from './modules/subjects/subjects.module';
import { StudentSubjectsModule } from './modules/student_subjects/student_subjects.module';
import { MajorsModule } from './modules/majors/majors.module';
import { TransactionsModule } from './modules/transactions/transactions.module';
import { AttendancesModule } from './modules/attendances/attendances.module';
import { AttendanceDetailsModule } from './modules/attendance_details/attendance_details.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParentsModule } from './modules/parents/parents.module';
import { UserEducatedsModule } from './modules/user_educateds/user_educateds.module';

@Module({
  imports: [ ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username:process.env.POSTGRES_USER,
      password:process.env.POSTGRES_PASSWORD,
      database:process.env.POSTGRES_DATABASE,
      // autoLoadEntities:true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize:true
    }),
    UsersModule,
    SchoolsModule,
    SubjectsModule,
    StudentSubjectsModule,
    MajorsModule,
    TransactionsModule,
    AttendancesModule,
    AttendanceDetailsModule,
    ParentsModule,
    UserEducatedsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
