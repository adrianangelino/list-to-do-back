import { PartialType } from '@nestjs/mapped-types';
import { CreateTarefaDto } from './create-tarefa.dto';
import { IsString, IsOptional, IsBoolean } from 'class-validator';  // Agora com a importação correta

export class UpdateTarefaDto extends PartialType(CreateTarefaDto) {
  @IsOptional()
  @IsString()
  descricao?: string;

  @IsOptional()
  @IsString()
  observacao?: string;  // Novo campo para a observação

  @IsOptional()
  @IsBoolean()
  realizada?: boolean;  // Novo campo para o status "realizada"
}
