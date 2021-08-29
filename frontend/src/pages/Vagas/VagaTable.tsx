import React from 'react';
import { Table } from 'antd';

interface TableHospedeProps{
  data?: any[];
  onDelete: (value: any) => void;
  onAlter: (value: any) => void;
}
 
const VagaTable: React.FC<TableHospedeProps>  = ({data, onDelete, onAlter}) =>{

    
    const columns = [
         {
           title: 'Andar',
           dataIndex: 'andar',
           key: 'andar',
           width: '10%',
           render:(value: any) => value === 0 ? 'Terreo' : value + '° Andar'
         },
        {
          title: 'N° Vaga',
          dataIndex: 'numeroVaga',
          key: 'numeroVaga',         
        },
        {
          title: 'Disponibilidade',
          dataIndex: 'disponibilidade',
          key: 'disponibilidade',         
        },
         {
          title: 'Action',
          dataIndex: '',
          key: 'x',
          render: (record: any) => {
            return(
            <>
             <a onClick={() => onDelete(1)} style={{marginRight: 5}}>Delete</a>
             <a onClick={() => onAlter(2)}>Alter</a>
           </>
          )
          }
        },
    ];
 
    return (<Table columns={columns} dataSource={data} />)
   
  }
export default VagaTable;