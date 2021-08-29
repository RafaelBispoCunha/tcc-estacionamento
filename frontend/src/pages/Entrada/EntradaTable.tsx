import React from 'react';
import { Table, Button, Tooltip } from 'antd';

interface TableHospedeProps {
  data: any[] | undefined;
  //onDelete: (value: any) => void;
  //onAlter: (value: any) => void;
}


const EntradaTable: React.FC<TableHospedeProps> = ({ data/*, onDelete, onAlter*/ }) => {


  const columns = [
    {
      title: 'Placa',
      dataIndex: 'placa',
    },
    {
      title: 'Modelo',
      dataIndex: 'modelo',
    },
    {
      title: 'Marca',
      dataIndex: 'marca',
    },
    {
      title: 'Andar',
      dataIndex: 'andar',
      render: (value: any) => value === 0 ? 'Terreo' : value
    },
    {
      title: 'N° Vaga',
      dataIndex: 'numeroVaga',
    },
    {
      title: 'Action',
      dataIndex: '',
      render: (record: any) => {
        return (
          <Tooltip placement="top" title="Saída">
            <Button type="primary" onClick={() => alert("")} >Saída</Button>
          </Tooltip>
        )
      }
    },
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