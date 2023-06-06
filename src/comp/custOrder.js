import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { App, DatePicker, Divider, Form, Input, InputNumber, Select, Space, Switch } from "antd";
import dayjs from 'dayjs'

export default function useCustOrderPanel({title}){

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
            <Form.Item name="size" label="尺码"  >
              <Input />
            </Form.Item>
            <Form.Item name="preCount" label="预定件数"  >
              <InputNumber />
            </Form.Item>
            <Form.Item name="tolerance" label="浮动件数"  >
              <InputNumber />
            </Form.Item>
          </Space>

          <Space>
            <Form.Item name="s1" label="胸围"  >
              <InputNumber />
            </Form.Item>
            <Form.Item name="s2" label="腰围"  >
              <InputNumber />
            </Form.Item>
            <Form.Item name="s3" label="衣长"  >
              <InputNumber />
            </Form.Item>
          </Space>

    
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