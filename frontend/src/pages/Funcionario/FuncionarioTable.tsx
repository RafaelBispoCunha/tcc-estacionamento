import React from 'react';

import { Table } from 'antd';



 interface TableFuncionarioProps{
   data: any[];
   onDelete: (value: any) => void
   onAlter: (value: any) => void
 }

const FuncionarioTable: React.FC<TableFuncionarioProps> = ({ data, 
  onDelete,
  onAlter
}) =>{

   const columns = [
        {
          title: 'Nome',
          dataIndex: 'nome',
          key: 'nome',
          width: '30%',
        },
        {
          title: 'CPF',
          dataIndex: 'cpf',
          key: 'cpf',
          width: '20%',
        },
        {
          title: 'E-mail',
          dataIndex: 'email',
          key: 'email',         
        },
        {
          title: 'Telefone',
          dataIndex: 'telefone',
          key: 'telefone',         
        },
        {
         title: 'Action',
         dataIndex: '',
         key: 'x',
         render: (record: any) => {
           return(
             <>
              <a onClick={() => onDelete(record.id)} style={{marginRight: 5}}>Delete</a>
              <a onClick={() => onAlter(record)}>Alter</a>
            </>
           )
         }
       },
   ];

   return (<Table columns={columns} dataSource={data} />)
}

export default FuncionarioTable;