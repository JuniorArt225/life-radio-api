import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateReplayDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  titre: string;

  @ApiProperty()
  @IsUUID()
  @IsNotEmpty()
  playlistId: string;
}
