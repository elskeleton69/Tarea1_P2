import { Injectable } from '@nestjs/common';
import { InterfazProveedor } from '../interfaz-proveedor/interfaz-proveedor.interface';
import { ProveedorDTO } from '../proveedor.dto';
import{v4 as uuidv4} from 'uuid';

@Injectable()
export class ServiceProveedorService {
    proveedores: InterfazProveedor[]=[];


    todos(){
        return this.proveedores;
    }

    uno(id:string){
        return this.proveedores.find((proveedor)=>{
            proveedor.id == id
        });
    }

    insertar(proveedor: ProveedorDTO){
        const pro ={
            id:uuidv4(),
            ...proveedor
        };
        this.proveedores.push(pro);
        return this.proveedores;
    }

    actualizar( id:string , proveedorActualizar:ProveedorDTO){
        const nuevopro = {
            id,...proveedorActualizar
        };
        this.proveedores.map((proveedor)=>(proveedor.id == id ? nuevopro : proveedor));

        return nuevopro;
    }

    eliminar(id:string) {
        this.proveedores = this.proveedores.filter((proveedor)=> proveedor.id !==id);
        return "proveedor Eliminado";
    }
}
