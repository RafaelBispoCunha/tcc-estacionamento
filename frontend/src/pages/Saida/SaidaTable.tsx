import React, { useState } from 'react';

import { Table} from 'antd';

interface TableHospedeProps{
  data: any[];
}
 
const SaidaTable: React.FC<TableHospedeProps> = ({data}) =>{
 
   const [selectedRowKeys, setSelectedRowKeys] = useState([]);

 

  const onSelectChange = (selectedRowKeys:any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(selectedRowKeys)
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

   const columns = [
    {
      title: 'Placa',
      dataIndex: 'placa',
    },
     {
       title: 'Modelo',
       dataIndex: 'modelo',
       render: (text: string) => <p>{text}</p>,
     },
     {
       title: 'Marca',
       dataIndex: 'marca',
     },
     {
       title: 'Cor',
       dataIndex: 'cor',
     },
     {
      title: 'Ano do Modelo',
      dataIndex: 'anoModelo',
    },
    {
      title: 'Situação',
      dataIndex: 'situacao',
    },
   ];
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowSelection={{
          type: 'radio',
          ...rowSelection
          }} columns={columns} dataSource={data} />
      </div>
    );
  
}
export default SaidaTable;