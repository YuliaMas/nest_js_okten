import { Module } from '@nestjs/common';

import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, CommentsModule],
})
export class AppModule {}
