import { Injectable } from '@nestjs/common';
import { CreateTarefaDto } from './dto/create-tarefa.dto';
import { UpdateTarefaDto } from './dto/update-tarefa.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Injectable()
export class TarefaService {
  
  // Função para criar uma nova tarefa
  async create(createTarefaDto: CreateTarefaDto) {
    return await prisma.tarefa.create({
      data: createTarefaDto, // Criação da tarefa usando os dados do DTO
    });
  }

  // Função para buscar todas as tarefas
  async findAll() {
    return await prisma.tarefa.findMany(); // Retorna todas as tarefas do banco
  }

  // Função para encontrar uma tarefa específica pelo ID
  async findOne(id: number) {
    return await prisma.tarefa.findUnique({
      where: { id }, // Busca uma tarefa específica pelo ID
    });
  }

  // Função para atualizar uma tarefa
  async update(id: number, updateTarefaDto: UpdateTarefaDto) {
    return await prisma.tarefa.update({
      where: { id }, // O ID da tarefa que será atualizada
      data: updateTarefaDto, // Os dados de atualização da tarefa
    });
  }

  // Função para excluir uma tarefa
  async remove(id: number) {
    return await prisma.tarefa.delete({
      where: { id }, // Deleta a tarefa com o ID especificado
    });
  }
}
