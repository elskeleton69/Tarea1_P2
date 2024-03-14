import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProveedorDTO{
    @IsNotEmpty()
    fecha: Date;
    @IsNotEmpty()
    @IsNumber()
    total: number;
    @IsNotEmpty()
    @IsString()
    estado: string;
    @IsNotEmpty()
    @IsString()
    metodo_pago: string;
}