import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotIn,
  IsOptional,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';

import { TransformHelper } from '../../../../../common/helpers/transform.helper';
import { GenderEnum } from '../../enums/gender.enum';

export class CarBaseReqDto {
  // @Transform(({value}) => value.trim())
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(3, 50)
  producer: string;

  // @Transform(({value}) => value.trim())
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @IsString()
  @Length(3, 50)
  model: string;

  @ApiProperty({ example: 2021 })
  @Type(() => Number)
  @IsInt()
  @Min(1990)
  year: number;
}

export class UserBaseReqDto {
  // @Transform(({value}) => value.trim())
  @Transform(TransformHelper.trim)
  @IsString()
  @Length(3, 50)
  name: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(150)
  @IsOptional()
  age?: number;

  @ApiProperty({ example: 'yulia@gmail.com' })
  // @Transform(({value}) => value.toLowerCase().trim())
  @Transform(TransformHelper.trim)
  @Transform(TransformHelper.toLowerCase)
  @ValidateIf((obj) => !obj.phone)
  @IsString()
  @IsEmail()
  email: string;

  // @Transform(({value}) => value.trim())
  @Transform(TransformHelper.trim)
  @ValidateIf((obj) => !obj.email)
  @IsOptional()
  @IsString()
  phone: string;

  @Transform(TransformHelper.trim)
  @IsOptional()
  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsBoolean()
  @IsOptional()
  isStudent: boolean = false;

  @ApiProperty({ example: '123Liesdhjl' })
  // @Transform(({value}) => value.trim())
  @Transform(TransformHelper.trim)
  @IsNotIn(['password', '123456', 'qwerty'])
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
    message:
      'Password must contain at least 1 letter, 1 number, and be at least 8 characters long',
  })
  password: string;

  @ValidateNested({ each: true })
  @IsArray()
  @Type(() => CarBaseReqDto)
  cars: CarBaseReqDto[];
}
