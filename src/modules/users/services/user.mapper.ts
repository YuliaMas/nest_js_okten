import { UserEntity } from '../../../database/entities/user.entity';
import { UserResDto } from '../models/dto/res/user.res.dto';

export class UserMapper {
  public static toResDto(user: UserEntity): UserResDto {
    return {
      bio: user.bio,
      email: user.email,
      id: user.id,
      image: user.image,
      name: user.name,
    };
  }
}
