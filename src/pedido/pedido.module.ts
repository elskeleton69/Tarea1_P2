import { Module } from '@nestjs/common';
import { ControllerPedidoController } from './controller-pedido/controller-pedido.controller';
import { ServicePedidoService } from './service-pedido/service-pedido.service';

@Module({
  controllers: [ControllerPedidoController],
  providers: [ServicePedidoService]
})
export class PedidoModule {}
