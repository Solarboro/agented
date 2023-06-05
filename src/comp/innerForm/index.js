import { Button, Form, Input } from "antd";
import { useEffect } from "react";



export default function InnerForm (param) {

    const [form] = Form.useForm();



    useEffect(()=>{
        console.info("InnerForm called");

        form.setFieldValue("username", param.username)
        return ()=>console.info("INnerForm exit")
    });

    return (
        <Form
            // layout='inline's
            // layout='horizontal'
            labelCol={{span:1}}
            wrapperCol={{span:10}}
            form={form}
            onFinish={e=>console.log(e)}
        >

            <Form.Item
                label="Username"
            
                name='username'
                >
                <Input placeholder="Username"/>
            </Form.Item>


            <Form.Item>
                <Button htmlType="submit">Submit</Button>
            </Form.Item>
        </Form>
    )
}