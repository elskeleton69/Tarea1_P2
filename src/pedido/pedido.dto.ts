import { IsNotEmpty, IsString } from "class-validator";


export class PedidoDTO {
    @IsNotEmpty()
    @IsString()
    nombre: string;
    @IsNotEmpty()
    @IsString()
    producto_suministrado: string;
    @IsNotEmpty()
    @IsString()
    contacto: string;
    @IsNotEmpty()
    @IsString()
    telefono: string;
}