import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { App, DatePicker, Divider, Form, Input, InputNumber, Select, Space, Switch } from "antd";
import dayjs from 'dayjs'

export default function usePaymentPanel({title}){

    const {modal} = App.useApp();
    const [form] = Form.useForm();
    const content = (
        <Form
            size='middle'
            preserve={false}
            form={form}            
        >

          {title && <Divider>{title}</Divider>}
          <Form.Item
            label="类别"
            name="title"
          >
            <Select
              
              options={[
                {value: '1', label: '订金'},
                {value: '2', label: '期款'},
                {value: '3', label: '尾款'}
                
              ]}
            />
          </Form.Item>

          <Space >
          <Form.Item name="date" label="支付日期" rules={[{type: 'object'}]} >
            <DatePicker inputReadOnly  />
          </Form.Item>
      
          <Form.Item name="amount" label="支付金额"  >
            <InputNumber />
          </Form.Item>
          </Space>  
      
          <Form.Item name="paid" label="支付状态" valuePropName="checked"  >
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