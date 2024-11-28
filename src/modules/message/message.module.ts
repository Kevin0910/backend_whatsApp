import { Module } from '@nestjs/common';
import { MessagesGateway } from './message.gateway';
import { MessagesService } from './message.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Message, MessageSchema } from './entities/message.entity';
import { MessagesController } from './message.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Message.name, schema: MessageSchema }]),
  ],
  controllers: [MessagesController],
  providers: [MessagesGateway, MessagesService],
})
export class MessageModule {}
