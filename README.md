<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

## My Project Set Up
```bash
#CLI Install Nest JS
$ nest new project-name
# CLI => install database (Example using Postgresql)
$ npm install --save @nestjs/typeorm typeorm pg

#  Generate Resource(Controllers,Service and Module)
$ nest generate resource ./name diractory

# @nestjs/config
$ npm install --save @nestjs/config
# Example: import { ConfigModule } from '@nestjs/config';

# Hashing Data
$ npm i bcrypt 
$ npm i -D @types/bcrypt
# Example: password is most to be Hashing


#Using the built-in ValidationPipe
$ npm i --save class-validator class-transformer

```
## TypeOrm of this Project 
```bash
#Example One to One
  # This One To One  write this code in Entity 'User'(Noted)
$ @OneToOne(()=>Major , (current_study)=>current_study.user,{cascade:true})
    @JoinColumn()
    current_study:Major;

  # This One To One  write this code in Entity 'Mojor'(Noted)

$ @OneToOne(()=>User , (user)=>user.current_study)
    @JoinColumn()
    user:User;
#Exam Many to one or One to many
  # This Many to one  write this code in Entity 'User'(Noted)
$ @ManyToOne(()=> Attendance ,(attendance)=>attendance.user)
  @JoinColumn({name:'user_id'})
  attendance:Attendance;
  
  
  # This One TO Many write this code in Entity 'Attendance'(Noted)
$ @OneToMany(()=> User, (user)=>user.attendance)
  user:User[];

# Many to Many 
  # This One To Many write this  code In Entity 'User'  
$ @OneToMany(()=>Parents_Users,(parent_user)=>parent_user.user)
    parent_user:Parents_Users[];

 # This One To Many write this  code In Entity 'Parent'  

$ @OneToMany(()=>Parents_Users , (parent_user)=> parent_user.parent)
    parent_user:Parents_Users[];

    # This Many To One write this  code In Entity 'Parent_Users'  
$ @ManyToOne(()=>User,(user)=>user.parent_user)
    user:User;
    # This Many To One write this  code In Entity 'Parent_Users' 
$ @ManyToOne(()=>Parent , (parent)=>parent.parent_user)
    parent:Parent;
 # For this many to many I use  3 entity names. (User and Parent) OneToMany Parent_User,and Parent_User ManyToOne (User and Parent)

```

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
