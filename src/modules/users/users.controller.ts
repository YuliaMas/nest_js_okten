import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UpdateUserReqDto } from './models/dto/req/update-user.req.dto';
import { UsersService } from './services/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @ApiBearerAuth()
  // @ApiConflictResponse({ description: 'Conflict' })
  // @Post()
  // async create(@Body() createUserDto: CreateUserReqDto): Promise<UserResDto> {
  //   return await this.usersService.create(createUserDto);
  // }

  // @Get()
  // findAll(@Query() query: UserListReqDto) {
  //   return this.usersService.findAll();
  // }

  @Get(':id')
  public async findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserReqDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
