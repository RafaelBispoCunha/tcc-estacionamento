export interface IVaga{
   id?: number,
   andar: number,
   numeroVaga: number,
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

export interface IUsuario{
   id?: number;
   nome: string;
   cpf: string;
   email: string;
   telefone: string;
   nivelAcesso: string;
   senha: string;
   dataHoraCadastro: string;
}