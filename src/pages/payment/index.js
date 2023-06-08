import { Button, Card, Descriptions, Divider, Image, Space, Table, Typography } from "antd";
import { observer } from "mobx-react-lite";
import { productStore } from "../../store/productStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined, PayCircleOutlined } from "@ant-design/icons";
import './index.scss';
import dayjs from 'dayjs';
import bg from '../../bg.jpg';

function PaymentSummary(){
    //
    const nav = useNavigate();
    const {id, image, style, model, amount, custOrders, payments} = productStore.paymentDetail;
    useEffect(
        ()=>{
            if(!id)
                nav("/product")
        },[id]
    );


    //
    const backto = ()=>{
        window.history.back();
    }


    const custColumns = [
        {
            title: '尺码',
            dataIndex: 'size',
            key: 'size',
            width: '3.5em'
        },{
            title: '胸围',
            dataIndex: 's1',
            key: 's1',
            width: '3.5em'
        },{
            title: '腰围',
            dataIndex: 's2',
            key: 's2',
            width: '3.5em'
        },{
            title: '衣长',
            dataIndex: 's3',
            key: 's3',
            width: '3.5em'
        },{
            title: '预定',
            dataIndex: 'preCount',
            key: 'preCount',
            width: '3.5em'
        },{
            title: '出厂',
            dataIndex: 'actCount',
            key: 'actCount',
            width: '3.5em'
        }
    ]


    //
    const paymentColumns = [
        {
            title: '类别',
            dataIndex: 'title',
            key: 'title',
            width: '3.5em',
            render: (_, {title}) => {
                switch (title) {
                    case '1':
                        return '定金'
                    case '2':
                        return '期金'
                    case '3':
                        return '尾款'
                    default:
                        return '其他'
                }
            }
        },{
            title: '支付日期',
            dataIndex: 'date',
            key: 'date',
            render: (_, {date}) => (
                date ? dayjs(date).format("YYYY.MM.DD") : "-"
            )

        },{
            title: '支付状态',
            dataIndex: 'paid',
            key: 'paid',
            render: (_, {paid}) => (
                paid ? <Space><CheckCircleOutlined style={{color: 'green'}} />{'已支付'}</Space> : <Space><CloseCircleOutlined style={{color: 'red'}}  />{'未支付'}</Space>
            )
        },{
            title: '支付金额',
            dataIndex: 'amount',
            key: 'amount'
        }
    ]

    //
    const getOrderCnt = ()=>{
        
        let cnt = 0;
        custOrders?.forEach(order => {
            cnt+=order.actCount
        });
    

        return cnt 
    }

    return (
        <div className="paymentc" >


            <Divider>订单 & 账单</Divider>
            <Space className="paymentcontent" direction="vertical" style={{display:'flex'}}>
          


                <Space  >
                <Image
                    
                    width={'170px'}
                    height={'255px'}
                    src={`${process.env.REACT_APP_BE_IMAGE_API}${image}`}
                    fallback="data:image/png;base64,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"
                />

                <Card title={style}>
                    <Descriptions  column={1}>
             
                    <Descriptions.Item label='客户' >{'梁 女士/先生'}</Descriptions.Item>
                    <Descriptions.Item label='公司' >{'客订女装有限公司'}</Descriptions.Item>
                
                    
                    

                        <Descriptions.Item label='编号' >{model}</Descriptions.Item>
                        <Descriptions.Item  label='件数'>
                                {getOrderCnt()}
                        </Descriptions.Item>
                        <Descriptions.Item  label='单价'>
                            {Math.round( amount / getOrderCnt() * 100) / 100}     
                        </Descriptions.Item>
                    
                        <Descriptions.Item  label='总价'>  
                            <Typography.Text type='success' >
                            <Space><PayCircleOutlined />{amount}</Space>
                            </Typography.Text>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
                </Space>


                <Table pagination={{position:[]}}  showHeader={true} columns={custColumns} dataSource={productStore.product?.custOrders?.map(value=> ({key: `custOrders${value.id}`, ...value }) )} 
            
                   
                        summary={
                            (pageData) => {

                                let totalPreCount = 0;
                                let totalActCount = 0

                                pageData.forEach(
                                    ({preCount, actCount}) => {
                                        totalPreCount += preCount;
                                        totalActCount+=actCount;
                                    }
                                );

                                return (
                                    <Table.Summary.Row>
                                        <Table.Summary.Cell index={0}></Table.Summary.Cell>
                                        <Table.Summary.Cell index={1}></Table.Summary.Cell>
                                        <Table.Summary.Cell index={2}></Table.Summary.Cell>
                                        <Table.Summary.Cell index={3}></Table.Summary.Cell>
                                        <Table.Summary.Cell index={4}>{totalPreCount > 0 ? totalPreCount : ''}</Table.Summary.Cell>
                                        <Table.Summary.Cell index={5}>{totalActCount > 0 ? totalActCount: ''}</Table.Summary.Cell>
                                    </Table.Summary.Row>
                                )
                            }
                        }
                    
                />


                <Table pagination={{position:[]}}  showHeader={true} columns={paymentColumns} dataSource={payments?.map(value=> ({key: `payments${value.id}`, ...value }) )} 
                />
            </Space>
        </div>
    )
}


export default observer(PaymentSummary)