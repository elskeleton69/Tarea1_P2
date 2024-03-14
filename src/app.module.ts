import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProveedorModule } from './proveedor/proveedor.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [ProveedorModule, PedidoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
