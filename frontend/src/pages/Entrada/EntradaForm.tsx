import React from 'react';
import { Select, Form, Input } from 'antd';
import { Button } from 'antd';
import { useEffect } from 'react';


interface IEntradaFormProps {
  onSubmit: (data: any) => void;
  data?: any[];
  onSearchVehicle: (data: any) => void;
}

const EntradaForm: React.FC<IEntradaFormProps> = ({
  onSubmit = () => { },
  data,
  onSearchVehicle,


}) => {

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();


  const handleChange = (value: any) => {
    console.log(`selected ${value}`);
  }

  useEffect(() => {
  });

  const { Search } = Input;
  const { Option } = Select;

  return (
    <Form
      form={form}
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}

    >
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 20 }}>
          <Search
            placeholder="Informe a Placa..."
            allowClear
            enterButton="Buscar"
            size="middle"
            onSearch={onSearchVehicle}
            style={{ width: 250, marginTop: 30, marginRight: 30, textTransform: 'uppercase' }}
            required
          />

          <Form.Item
            label="Placa"
            name="placa"
            style={{ margin: '0 10px' }}
          // initialValue={veiculo?.placa}


          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Modelo"
            name="modelo"
            style={{ margin: '0 10px' }}




          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Marca"
            name="marca"
            style={{ margin: '0 10px' }}



          >
            <Input disabled />
          </Form.Item>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          <Form.Item
            label="Cor"
            name="cor"
            style={{ margin: '0 10px' }}



          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Ano do Modelo"
            name="anoModelo"
            style={{ margin: '0 10px' }}



          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="Situação"
            name="situacao"
            style={{ margin: '0 10px' }}

          //rules={[{ required: true, message: 'Please input your username!' }]}

          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="Vaga"
            name="vaga"
            style={{ margin: '0 10px' }}
          //initialValue={operation === 'UPDATE' ? defaultValues[0].cpf :''}
          //rules={[{ required: true, message: 'Please input your username!' }]}

          >
            <Select style={{ width: 120 }} onChange={handleChange}>
               <Option value="0">Sem vagas Registradas</Option>
            </Select>
          </Form.Item>

        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Salvar</Button>
            <Button type="primary" style={{ marginLeft: 20 }}>Limpar</Button>
          </Form.Item>
        </div>
      </div>

    </Form>


  )
}

export default EntradaForm;