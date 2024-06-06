import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule], // import UserModule to AppModule
  controllers: [AppController],
  providers: [AppService], // provider appservice to appcontroller
})
export class AppModule {}