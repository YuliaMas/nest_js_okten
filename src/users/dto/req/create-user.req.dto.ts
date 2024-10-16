import { ApiProperty } from '@nestjs/swagger';

export class CreateUserReqDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the User' })
  readonly name: string;
  @ApiProperty({
    example: 30,
    description: 'The age of the User',
    minimum: 0,
    maximum: 120,
  })
  readonly age: number;
  @ApiProperty({
    example: 'john_doe@test.com',
    description: 'The email of the User',
    required: false,
  })
  readonly email: string;
  @ApiProperty({ example: 'JohnDoe1', description: 'The password of the User' })
  readonly password?: string;
  @ApiProperty()
  readonly role: string;
}
