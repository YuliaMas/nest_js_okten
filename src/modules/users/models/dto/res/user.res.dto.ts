import { PickType } from '@nestjs/swagger';

import { UserBaseResDto } from './user-base.res.dto';

export class UserResDto extends PickType(UserBaseResDto, [
  'id',
  'name',
  'age',
  'email',
  'role',
]) {
  // id: string;
  // @ApiProperty({ example: 'John Doe' })
  // name: string;
  // age?: number;
  // email: string;
  // role: string;
  // created_at: Date;
  // updated_at: Date;
}
