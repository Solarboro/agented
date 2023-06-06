import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { App, DatePicker, Divider, Form, Input, InputNumber, Select, Space, Switch } from "antd";
import dayjs from 'dayjs'

export default function useMaterialPanel({title}){

    const {modal} = App.useApp();
    const [form] = Form.useForm();
    const content = (
        <Form
            layout='horizontal'
            wrapperCol={{span:14}}
            size='middle'
            preserve={false}
            form={form}            
        >

          {title && <Divider>{title}</Divider>}
          
          <Space>
            <Form.Item name="label" label="类别"  >
              <Input />
            </Form.Item>
            <Form.Item name="specification" label="规格"  >
              <Input />
            </Form.Item>
            </Space>

            <Space>
            
            <Form.Item name="price" label="单价"  >
              <InputNumber />
            </Form.Item>
            <Form.Item name="count" label="数量"  >
              <InputNumber />
            </Form.Item>
          </Space>

          
          <Form.Item name="factory" label="工厂" valuePropName="checked"  >
              <Switch />
            </Form.Item>
        </Form>
    )

    return (raw, onSubmit)=>{
        form.setFieldsValue(raw);
        modal.confirm({
            icon: true,
            okText: '更新',
            onOk: closeForm => {form.validateFields().then(values=>onSubmit({...raw, ...values, date: dayjs(values.date).unix()*1000}, closeForm)).catch(console.info)},
            content
        });
    }

}