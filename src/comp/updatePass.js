import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { App, DatePicker, Divider, Form, Input, InputNumber, Select, Space, Switch } from "antd";
import dayjs from 'dayjs'

export default function useUpdatePass({title}){

    const {message, modal} = App.useApp();
    const [form] = Form.useForm();
    const content = (
        <Form
            layout='vertical'
            // labelCol={{xs:10, s: 10}}
            // wrapperCol={{xs:14, s:14}}
            size='middle'
            preserve={false}
            form={form}            
        >

          {title && <Divider>{title}</Divider>}
          
          <Form.Item
            name='newPassword'
            label="密码"
            hasFeedback
            rules={[
              {
                required: true,
                message: '请输入新密码'
              }
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name='confirm'
            label='确认密码'
            hasFeedback
            dependencies={['newPassword']}
            rules={[
              {
                required: true,
                message: '请输入新密码'
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if(!value || getFieldValue('newPassword') === value)
                    return Promise.resolve();

                  return Promise.reject(new Error('密码不匹配'))
                }
              })
            ]}
          >
            <Input.Password />
          </Form.Item>

    
        </Form>
    )

    return (raw, onSubmit)=>{
        form.setFieldsValue(raw);
        modal.confirm({
            icon: true,
            okText: '更新',
            onOk: closeForm => {form.validateFields().then(values=>onSubmit({...raw, ...values}).then(()=> message.info("更新成功", 1.5).then(closeForm))).catch(console.info)},
            content
        });
    }

}