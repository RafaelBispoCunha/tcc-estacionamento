import React from 'react';
import { Form, Input } from 'antd';
import { Button } from 'antd';
import { IVaga, IVeiculo } from '../../model/models';

interface IEntradaFormProps {
  onSubmit: (data: any) => void;
  data?: IVaga[];
  onSearchVehicle: (data: any) => void;
  veiculo?: IVeiculo;
}

const EntradaForm: React.FC<IEntradaFormProps> = ({
  onSubmit = () => { },
  data,
  onSearchVehicle,
  veiculo

}) => {

  const [form] = Form.useForm();

  const { Search } = Input;

  const onSubmitForm = (values: any)=>{
    onSubmit(values)
    form.resetFields()
  }
 

  return (
    <Form
      form={form}
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmitForm}
    >
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div>
        {veiculo?.anoFabricacao}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
          <Form.Item
            label="Buscar Veículo"
            style={{ marginRight: 20, width: 230 }}
          >
            <Search
              placeholder="Informe a Placa..."
              allowClear
             
              size="middle"
              onSearch={onSearchVehicle}
              style={{ textTransform: 'uppercase' }}
              required
            />
          </Form.Item>
          <Form.Item
            label="Nome do Condutor"
            name="nomeCondutor"
            style={{ width: 480 }}

          >
            
            <Input />
          </Form.Item>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 20 }}>
          <Form.Item
            label="Placa"
            name="placa"
            style={{ width: 230, margin: '0 10px'}}
            initialValue={veiculo?.placa}
          >
            <Input  />
          </Form.Item>
          <Form.Item
            label="Modelo"
            name="modelo"
            style={{ width: 230, margin: '0 10px' }}
            initialValue={veiculo?.modelo}
          >
            <Input  value={veiculo?.modelo} />
          </Form.Item>

          <Form.Item
            label="Marca"
            name="marca"
            style={{ width: 230, margin: '0 10px' }}
            initialValue={veiculo?.marca}
          >
            <Input  />
          </Form.Item>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          <Form.Item
            label="Cor"
            name="cor"
            style={{  width: 230, margin: '0 10px' }}
            initialValue={veiculo?.cor}


          >
            <Input  />
          </Form.Item>
          <Form.Item
            label="Ano do Modelo"
            name="anoFabricacao"
            style={{  width: 230, margin: '0 10px' }}
            initialValue={veiculo?.anoFabricacao}


          >
            <Input  />
          </Form.Item>
          <Form.Item
            label="Situação"
            name="situacao"
            style={{ width: 230, margin: '0 10px' }}
            initialValue={veiculo?.situacao === undefined ? '' : veiculo?.situacao}
          //rules={[{ required: true, message: 'Please input your username!' }]}

          >
            <Input  />
          </Form.Item>



        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Salvar</Button>
  
          </Form.Item>
        </div>
      </div>

    </Form>


  )
}

export default EntradaForm;