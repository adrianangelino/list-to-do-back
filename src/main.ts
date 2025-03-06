import { NestFactory } from '@nestjs/core';
import { TarefaModule } from './tarefa/tarefa.module';  // Importando diretamente o TarefaModule

async function bootstrap() {
  const app = await NestFactory.create(TarefaModule);

  app.enableCors(); // 🔥 Habilita o CORS

  await app.listen(3000);
}
bootstrap();
