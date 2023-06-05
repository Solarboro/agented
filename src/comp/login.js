import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { App, Form, Input } from "antd";


export default function useLogin(){

    const {modal} = App.useApp();
    const [loginForm] = Form.useForm();
    const content = (
        <Form
            size='middle'
            preserve={false}
            form={loginForm}
            initialValues={{username: 'solar', password: 'abcd1234'}}
        >
            
        <Form.Item
        //   label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入账号!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username / 账户 / 手机号" />
        </Form.Item>
        <Form.Item
        //   label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password / 密码"
          />
        </Form.Item>
        </Form>
    )

    return (onLogin)=>{

        modal.confirm({
            icon: true,
            // closeIcon: false,
            title: '用户登录',
            okText: '登录',
            onOk: closeForm => {loginForm.validateFields().then(values=>onLogin(values, closeForm)).catch(console.info)},
            content
        });
    }

}