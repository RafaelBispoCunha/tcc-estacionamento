import React from 'react';
import { Table } from 'antd';
import { IEntrada } from '../../model/models'


interface TableHospedeProps {
  data?: IEntrada[];
  //onDelete: (value: any) => void;
  //onAlter: (value: any) => void;
}


const EntradaTable: React.FC<TableHospedeProps> = ({ data/*, onDelete, onAlter*/ }) => {


  const columns = [
    {
      title: 'Placa',
      dataIndex: 'placa',
      render: (value: any, entrada: IEntrada, index: number) => {
       // return entrada.veiculo?.placa ? entrada.veiculo?.placa : ''
       return value
      }
    },
    {
      title: 'Modelo',
      dataIndex: 'modelo',
      render: (value: any, entrada: IEntrada, index: number) => {
        //return entrada.veiculo?.modelo ? entrada.veiculo?.modelo : ''
        return value
      }
    },
    {
      title: 'Marca',
      dataIndex: 'marca',
      render: (value: any, entrada: IEntrada, index: number) => {
        //return entrada.veiculo?.marca ? entrada.veiculo?.marca : ''
        return value
      }
    },
    {
      title: 'Andar',
      dataIndex: 'andar',
      render: (value: any, entrada: IEntrada, index: number) => {
        //return entrada.vaga?.andar ? entrada.vaga?.andar : ''
        return value
      }
    },
    {
      title: 'N° Vaga',
      dataIndex: 'numeroVaga',
      render: (value: any, entrada: IEntrada, index: number) => {
        //return entrada.vaga?.numeroVaga ? entrada.vaga?.numeroVaga : ''
        return value
      }
    },
    {
      title: 'Data Hora da Entrada',
      dataIndex: 'dataHoraEntrada',
      render: (value: any) => value
       
    },
    {
      title: 'Usuário',
      dataIndex: 'usuario',
      render: (value: any) => value
       
    }
  ];
  return (<div>
    <div style={{ marginBottom: 16 }}>
      <span style={{ marginLeft: 8 }}>

      </span>
    </div>
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
  </div>)
}

export default EntradaTable;