import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { CreatePostDto } from './dto/createPost.request.dto';

@Controller('api/boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  // 게시물 리스트 첫 요청 시
  @Get('all')
  async getBoardList() {
    return await this.boardsService.getBoardList();
  }

  //이후 요청 시 받은 게시물 리스트의 마지막 게시물 아이디를 파라미터에 담아 요청
  @Get('all/:postId/')
  async getBoardListByCursor(@Param('postId', ParseIntPipe) postId: number) {
    return await this.boardsService.getBoardListByCursor(postId);
  }

  @Get('detail/:postId')
  async getBoardDetails(@Param('postId', ParseIntPipe) postId: number) {
    return await this.boardsService.getBoardDetails(postId);
  }

  @Post(':userId')
  async createPost(
    @Param('userId') userId: number,
    @Body() data: CreatePostDto,
  ) {
    return await this.boardsService.createPost(
      userId,
      data.title,
      data.content,
      data.password,
    );
  }

  @Patch(':postId')
  async updatePost(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() data: CreatePostDto,
  ) {
    return await this.boardsService.updatePost(
      postId,
      data.title,
      data.content,
      data.password,
    );
  }

  @Delete(':postId')
  async deletePost(
    @Param('postId', ParseIntPipe) postId: number,
    @Query('password') password: string,
  ) {
    return await this.boardsService.deletePost(postId, password);
  }
}
