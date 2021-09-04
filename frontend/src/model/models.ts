export interface IVaga{
   id?: number,
   andar: number,
   numero: number,
   status:  boolean,
}

export interface IVeiculo{
   placa: string,
   modelo: string,
   marca:string,
   cor:string,
   anoModelo:number, 
   situacao: string,
}

export interface IEntrada{
   id?: number;
   veiculo: IVeiculo;
   vaga: IVaga;
   usuario: string;
   dataHoraEntrada: string;
}