import React, { useState } from 'react';
import { Table, Button, Tooltip, Modal } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import { IUsuario } from '../../model/models'

interface TableFuncionarioProps {
  data?: IUsuario[];
  onDelete: (value: any) => void
  onAlter: (value: any) => void
}

const UsuarioTable: React.FC<TableFuncionarioProps> = ({
  data,
  onDelete,
  onAlter
}) => {

  const [visible, setVisible] = useState(false);
  const [modalText, setModalText] = useState('Deseja Excluir o usuário?');
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [key, setKey] = useState<number>(0);

  const handleOk = () => {
    setModalText('Excluindo...');
    setConfirmLoading(true);
    onDelete(key)
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

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
        return (
          <>
            <Tooltip placement="top" title="Editar">
              <Button type="primary" style={{ marginRight: 10 }} onClick={() => onAlter(record.id!)} ><EditOutlined /></Button>
            </Tooltip>
            <Tooltip placement="top" title="Excluir" >
              <Button type="primary" onClick={() => { setVisible(true); setKey(record.id!) }} danger ><DeleteOutlined /></Button>
            </Tooltip>
          </>
        )
      }
    },
  ];

  return (
    <>
      <Table
        rowKey={(row: any) => row.id}
        columns={columns}
        dataSource={data}
      />

      <Modal
        title="Excluir Usuário"
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

export default UsuarioTable;