import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '테스트 게시물 제목',
    description: '제목',
  })
  public title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '테스트 게시물 내용',
    description: '내용',
  })
  public content: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*\d)[A-Za-z\d!@#$%^&*()](?=.{6,})/)
  @ApiProperty({
    example: 'nestjs123',
    description: '비밀번호',
  })
  public password: string;
}
