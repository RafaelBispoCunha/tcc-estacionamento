import React, { useState, useEffect } from 'react';

import { Table, Input, Tooltip, Modal, Button } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import { IEntrada } from '../../model/models'

interface TableHospedeProps {
  data?: IEntrada[];
  onSelectedRow: (value: string) => void;
  selected?: IEntrada;
  onSubmit: (value: any) => void
  showModal: (value: any) => void
  visible: boolean
}

const SaidaTable: React.FC<TableHospedeProps> = ({
  data,
  onSelectedRow,
  selected,
  onSubmit,
  showModal,
  visible
}) => {

  const [placa, setPlaca] = useState<string>('');
  const [dataSource, setDataSource] = useState<IEntrada[] | undefined>(undefined);

  useEffect(() => {
    setDataSource(data)
  }, [setDataSource, data])

  const handleOk = () => {
    onSubmit(selected)
  };

  const buscarPlaca = (
    <div style={{ display: 'flex', flexDirection: 'row', width: 280, marginRight: -140, marginLeft: -10 }}>
      <label style={{ marginTop: 5 }}>Placa</label>
      <Input
        style={{ width: 170, marginLeft: 20, }}
        placeholder="Buscar placa.."
        value={placa}
        onChange={e => {
          const currValue = e.target.value.toUpperCase();
          setPlaca(currValue);
          const filteredData = data?.filter(entry =>
            entry.veiculo.placa?.includes(currValue)
          );
          setDataSource(filteredData);
        }}

      />
    </div>
  );

  const columns = [
    {
      title: buscarPlaca,
      dataIndex: 'placa',
      render: (text: string, record: IEntrada) => {
        return record.veiculo.placa;

      }
    },

    {
      title: 'Modelo',
      dataIndex: 'modelo',
      render: (text: string, record: IEntrada) => <p>{record.veiculo.modelo}</p>,
    },
    {
      title: 'Marca',
      dataIndex: 'marca',
      render: (text: string, record: IEntrada) => <p>{record.veiculo.marca}</p>,
    },
    {
      title: 'Condutor',
      dataIndex: 'nomeCondutor',
      render: (text: string, record: IEntrada) => <p>{record.nomeCondutor}</p>,
    },
    {
      title: 'Data Hora da Entrada',
      dataIndex: 'dataHoraEntrada',
      with: '15%',
      render: (value: any) => value

    },

    {
      title: 'Usuário',
      dataIndex: 'usuario',
      render: (value: any) => value

    },
    {
      title: 'Saída',
      dataIndex: 'saida',
      render: (valeu: any, record: any) => {
        return (
          <>
            <Tooltip placement="top" title="Saída">
              <Button type="default" style={{ marginRight: 10 }} onClick={() => onSelectedRow(record)} ><CarOutlined /></Button>
            </Tooltip>

          </>
        )
      }
    },
  ];
  return (
    <div>

      <Table
        rowKey={(row: any) => row.id}
        columns={columns}
        dataSource={dataSource}
      />
      <Modal
        title="Confirmar Saída"
        visible={visible}
        onOk={handleOk}
        onCancel={showModal}
      >

        <p>Deseja confirmar saída do veículo?</p>
      </Modal>


    </div >
  );

}
export default SaidaTable;