import React, { useState } from 'react';
import { Table, Button, Tooltip, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

interface TableHospedeProps {
  data?: any[];
  onDelete: (value: any) => void;
  onAlter: (value: any) => void;
}

const VagaTable: React.FC<TableHospedeProps> = ({ data, onDelete, onAlter }) => {

  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('Deseja Excluir a Vaga?');
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [key, setKey] = useState<number>(0);

  const handleOk = () => {
    setModalText('Exccluindo...');
    setConfirmLoading(true);
    onDelete(key)
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };


  const columns = [
    {
      title: 'Andar',
      dataIndex: 'andar',
      key: 'andar',
      width: '10%',
      render: (value: any) => value === 0 ? 'Terreo' : value + '° Andar'
    },
    {
      title: 'N° Vaga',
      dataIndex: 'numeroVaga',
      key: 'numeroVaga',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (record: any) => {
        return (
          <>
            <Tooltip placement="top" title="Editar">
              <Button type="primary" style={{ marginRight: 10 }} onClick={() => onAlter(2)} ><EditOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title="Excluir" >
              <Button type="primary" onClick={() => { setVisible(true); setKey(record.id) }} danger ><DeleteOutlined /></Button>
            </Tooltip>
          </>
        )
      }
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
      />

      <Modal
        title="Excluir Vaga"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setVisible(false)}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  )
}

export default VagaTable;