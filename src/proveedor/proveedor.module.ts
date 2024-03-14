import { Module } from '@nestjs/common';
import { ControllerProveedorController } from './controller-proveedor/controller-proveedor.controller';
import { ServiceProveedorService } from './service-proveedor/service-proveedor.service';

@Module({
  controllers: [ControllerProveedorController],
  providers: [ServiceProveedorService]
})
export class ProveedorModule {}
