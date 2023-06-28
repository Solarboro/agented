import { PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { App, AutoComplete, Button, Col, DatePicker, Divider, Form, Input, InputNumber, Row, Select, Space, Switch } from "antd";
import { useWatch } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import dayjs from 'dayjs'

export default function useProductPanel({title}){

    const areas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'];
    const {modal} = App.useApp();
    const [form] = Form.useForm();
    const mobiler = useWatch(['yunBOrder',"mobile"], form)
    const content = (
        <Form
            labelCol={{span:24}}
            wrapperCol={{span:24}}
            size='middle'
            preserve={false}
            form={form}            
        >

        <Form.Item label='客件详情'>
          <Space>
          <Form.Item name="sku"><Input placeholder="款式"  /></Form.Item>
          <Form.Item  name="color"><Input placeholder="颜色" /></Form.Item>
          <Form.Item  name="size"><Input placeholder="码数" /></Form.Item>
          <Form.Item  name="count"><InputNumber placeholder="数量" /></Form.Item>
          </Space>
       
          <Form.Item name="comment"><TextArea placeholder='备注信息 / 摘要 / 其他' /></Form.Item>
          <Space>
          <Form.Item  name="ls" valuePropName="checked"><Switch checkedChildren="长" unCheckedChildren="短"  /></Form.Item>
          <Form.Item  name='switchOrNot' valuePropName="checked"><Switch checkedChildren="换件" unCheckedChildren="退件"  /></Form.Item>
          <Form.Item name="toSubStoreArea"><Select  placeholder="位置"  options={areas.map(value=>({label:value, value}))}/></Form.Item>
          </Space>
          </Form.Item>
          
          <Form.Item label='平台 / 客户'>
              <Row gutter={8} align='center'>

                <Col  span={8}>
                  <Form.Item name={['yunBOrder',"platform"]}><Select options={[{label:"拼多多",value:"拼多多"}]} placeholder='电商'/></Form.Item>
                </Col>

                <Col  span={16}>
                  <Form.Item  name={['yunBOrder',"orderNo"]}><AutoComplete disabled placeholder='电商订单' /></Form.Item>
                </Col>
                <Col  span={8}>
                  <Form.Item style={{display: 'inline-block', width:'100%'}}  name={['yunBOrder',"name"]} ><AutoComplete placeholder='客户名' /></Form.Item>
                </Col>

                <Col  span={14}>
                  <Form.Item  style={{display: 'inline-block', width:'100%'}}  name={['yunBOrder',"mobile"]}><AutoComplete placeholder='手机号' /></Form.Item>
                </Col>
                <Col span={2}>
                    <PhoneOutlined onClick={()=>window.location.href=`tel:${mobiler}`} />
                </Col>
                <Col span={24}>
                  <Form.Item  style={{display: 'inline-block', width:'100%'}}  name={['yunBOrder',"address"]}><TextArea placeholder='地址' /></Form.Item>
                </Col>
              </Row>
            
          </Form.Item>
    

        </Form>
        
    )

    return (raw, onSubmit)=>{
        form.setFieldsValue(raw);
        modal.confirm({
            icon: true,
            okText: '更新',
            onOk: closeForm => {form.validateFields().then(values=>  onSubmit({...raw, ...values, yunBOrder: {...raw.yunBOrder, ...values.yunBOrder}}, closeForm)).catch(console.info)},
            content
        });
    }

}