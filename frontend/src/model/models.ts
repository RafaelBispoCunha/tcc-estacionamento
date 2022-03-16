export interface IVeiculo{
   id?: number,
   placa: string,
   modelo: string,
   marca:string,
   cor:string,
   anoFabricacao:number, 
   situacao: string,
}

export interface IEntrada{
   id?: number;
   nomeCondutor: string;
   usuario: string;
   dataHoraEntrada: string;
   veiculo: IVeiculo;
}

export interface ISaida{
   id?: number;
   veiculo: IVeiculo;
   usuario: string;
   dataHoraSaida: string;
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
