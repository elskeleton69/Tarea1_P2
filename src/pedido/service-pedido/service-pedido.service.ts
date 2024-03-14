import { Injectable } from '@nestjs/common';
import { InterfazPedido } from '../interfaz-pedido/interfaz-pedido.interface';
import { PedidoDTO } from '../pedido.dto';
import{v4 as uuidv4} from 'uuid';

@Injectable()
export class ServicePedidoService {
    pedidos:InterfazPedido[]=[];

    todos(){
        return this.pedidos;
    }

    uno(id:string){
        return this.pedidos.find((pedido)=>{
            pedido.id == id
        });
        
    }

    insertar(pedido : PedidoDTO){
        const ped={
            id:uuidv4(),
            ...pedido
        };
        this.pedidos.push(ped);
        return this.pedidos;
    }

    actualizar(id:string , pedidoActualizar:PedidoDTO){
        const nuevoped={
            id,...pedidoActualizar
        };
        this.pedidos.map((pedido)=>(pedido.id == id ? nuevoped:pedido));
        return nuevoped;
    }

    eliminar(id:string){
        this.pedidos = this.pedidos.filter((pedido)=> pedido.id !==id);
        return "pedido eliminado";
    }
}

