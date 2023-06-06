import { LoadingOutlined, ScissorOutlined, FormOutlined, SmileOutlined, SolutionOutlined, CheckCircleOutlined, UserOutlined, SendOutlined, CopyOutlined} from '@ant-design/icons';
import { App, Button, Col, DatePicker, Divider, Drawer,  Image,  Row,  Space, Steps, Table, Tag } from "antd";
import { useState } from "react";
import useAPIKey from "../../hooks/useAPIKey";
import { userStore } from '../../store/userStore';
import useLogin from '../../comp/login';




 export default function Home (){

    // login panael
    const login = useLogin();
    const [value, setValue] = useAPIKey();
    const loginTo = (values, callbk) => {

      userStore.login(values, accessToken =>{ setValue(accessToken); callbk();}, message)
  }


    // API Hooke
    const [api, setAPI] = useAPIKey();

    // Drawer
    const [openDrawer, setOpenDrawer] = useState(false);

    // message moal
    const {message, modal} = App.useApp();
    

    // status Step
    const [currentStep, setCurrentStep] = useState(0);
    //
    const showMsg = ()=>{

        modal.info({title:'useAPP title', content:'useApp content'});        
    }

    //
    const columns = [
        {
          title: '物料',
          dataIndex: 'name',
          ellipsis: true,
          width: 80
        },
        {
          title: '供应商',
          dataIndex: 'provider',
          ellipsis: true
        },
        {
          title: '规格',
          dataIndex: 'spc',
          ellipsis: true,
          width: 60
        },
        {
          title: '数量',
          dataIndex: 'count',
          ellipsis: true,
          width: 45
        },
        {
          title: '单价',
          dataIndex: 'price',
          ellipsis: true,
          width: 45
        },
        {
          title: '操作',
          ellipsis: true,
          width: 45,
          render: (item)=><Space>
            <a> 编辑 </a>
          </Space>
        },
      ];
      const data = [
        {
          key: '1',
          name: '花边布料',
          provider: '中大市场 xx xx xx',
          spc: 32,
          count: 2,
          price: 300
        },
        {
          key: '2',
          name: '纽扣',
          provider: '中大市场 xx xx xx',
          spc: 32,
          count: 2,
          price: 300
        },
        {
          key: '3',
          name: '拉链',
          provider: '本地工厂 xx xx xx',
          spc: 32,
          count: 2,
          price: 300
        },
      ];
    return (
        <>

                <Button onClick={()=>login(loginTo)}>called</Button>
                {userStore.isAgent ? 'yes' : 'no'}
                <Row 
                    // justify='space-between' 
                    align='middle'>

                    <Col span={14}>
                        <Image 
                            
                            width={'200px'}
                            height={'300px'}
                            src="error"
                            fallback="data:image/png;base64,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"
                        />
                    </Col>
                    <Col span={10}>
                        <Steps
                            
                            current={currentStep}
                            direction='vertical'
                            // responsive={false}
                            items={[
                            {
                                title: '订单需求',
                                // subTitle:'subtitle',
                                description: '2023.05.05',
                                icon: <FormOutlined />
                            },
                            {
                                title: '打板 / 样板',
                                description: 'xxx 2023.05.07',
                                icon: <ScissorOutlined />,
                            },
                            {
                                title: '用户确认',
                                description: 'xxx 2023.05.07',
                                icon: <> <SolutionOutlined /> </>,
                            },
                            {
                                title: '投产生产',
                                description: 'xxx 2023.05.07',
                                icon: <CopyOutlined />,
                            },
                            {
                                title: '交付',
                                description: 'xxx 2023.05.07',
                                icon: <SendOutlined />,
                            },
                            {
                                title: 'Done',
                                description: 'xxx 2023.05.07',
                                icon: <CheckCircleOutlined />,
                            },
                            ]}
                        />
                    </Col>
                </Row>

            


            {/* <Divider orientation='left'>物料 & 清单</Divider> */}
            <Table columns={columns} dataSource={data} scroll={{y:100}} pagination={{position:['none','none']}}/>

            <Divider/>
            <Table columns={columns} dataSource={data} scroll={{y:100}} pagination={{position:['none','none']}}/>

            <Divider/>
            <Space.Compact block>
                {currentStep>0 && <Button block onClick={()=>setCurrentStep(currentStep-1)}>上一步</Button>}
                {
                    currentStep < 5 ?
                    <Button block type='primary' onClick={()=>setCurrentStep(currentStep+1)}>下一步</Button>
                    :
                    <Button block type='primary' onClick={()=>message.info('Done')}>完成</Button>
                
                }
            </Space.Compact>
            <Drawer
                title='title'
                // size="large"
                placement="bottom"
                // maskClosable={false}
                open={openDrawer}
                closable={false}
                onClose={()=>setOpenDrawer(false)}
            >


                <Steps 
                    direction="vertical"
                    // type="inline"
                    
                    // type="navigation"
                    // percent={10}
                    current={currentStep}
                    // onChange={(e)=>console.log(e)}
                    labelPlacement='horizontal'
                    items={[
                        {
                            title: "Finished",
                            description: "desc",
                            icon: <FormOutlined />
                            
                        },
                        {
                            title: "In Progress",
                            description: "desc",
                            subTitle: 'Left 00:00:08',
                        },
                        {
                            title: "Finished",
                            description: "desc",
                            
                        },
                    ]}
                />
            </Drawer>


            

         

            
        </>
    )
}


