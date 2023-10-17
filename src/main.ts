import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from '@/app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  if (globalThis.ENABLE_SWAGGER) {
    const document = SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle('Nest API')
        .setVersion(globalThis.VERSION)
        .build(),
    )
    SwaggerModule.setup('docs', app, document)
  }

  await app.listen(process.env.PORT || 3000)
}
bootstrap()
