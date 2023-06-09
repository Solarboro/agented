import { AreaChartOutlined, CheckCircleOutlined, DeleteOutlined, MoneyCollectOutlined, PayCircleOutlined,  PlusOutlined, RedoOutlined, RollbackOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Card, Descriptions, Divider,  Image, Popconfirm, Select, Space, Table, Tabs, Typography, Upload } from "antd";
import { observer } from "mobx-react-lite";
import { productStore } from "../../../store/productStore";
import dayjs from 'dayjs';
import usePaymentPanel from '../../../comp/payment';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCustOrderPanel from '../../../comp/custOrder';
import useMaterialPanel from '../../../comp/material';
import { userStore } from '../../../store/userStore';



function ProductDetail () {

    const {productStatus} = useParams()
    const nav = useNavigate();

    const {product, updateProduct, updateStudio, setPaymentDetail} = productStore;
    useEffect(
        ()=>{
            if(!product.id)
                nav("/product")
        },[product]
    );

    
    const getTabsKey = ()=>{

        switch (productStatus) {
            case 'factory':
                return 2;
        
            default:
                return 1;
        }

    }

    const [tabIndex, setTabIndex] = useState(getTabsKey());



    // update product basic
    const updateStyle = (style) => {

        updateProduct({id: product.id, style})
    }
    const updatemodel = (model) => {

        updateProduct({id: product.id, model})
    }
    const updateImage = (image) => {

        updateProduct({id: product.id, image})
    }
    const updateAmount = (amount) => {

        updateProduct({id: product.id, amount})
    }


    // new record
    const newRecord = () => {


        switch (tabIndex) {
            case 1:
                subCustOrder()
                break;
            case 2:
                subMaterial()
                break;
            case 3:
                submit2NewPayment()
                break;
        
            default:
                break;
        }
    }



    // payment 
    const paymentPanel = usePaymentPanel({title:'付款记录'});
    const {newPayment, updatePayment, deletePayment} = productStore;
    const submit2NewPayment = () => {
        console.log('new payment item')
        newPayment(product.id, {})
    }
    const submitPayment = (values, callbk) => {
        updatePayment(productStore.product.id, values, callbk)
    }
    const paymentColumns = [
        {
            title: '类别',
            dataIndex: 'title',
            key: 'title',
            width: '3.5em',
        },{
            title: '支付日期',
            dataIndex: 'date',
            key: 'date',
            render: (_, {date}) => (
                date ? dayjs(date).format("YYYY.MM.DD") : "-"
            )

        },{
            title: '状态',
            dataIndex: 'paid',
            key: 'paid',
            width: '6em',
            render: (_, {paid}) => (
                paid ? <Space><CheckCircleOutlined style={{color: 'green'}} />{'已支付'}</Space> : <>-</> 
            )
        },{
            title: '金额',
            dataIndex: 'amount',
            key: 'amount',
            width: '3.5em',
        },{
            title: <PlusOutlined onClick={newRecord} style={{color: '#006564'}}  />,
            key: 'action',
            width: '100px',
            render: (_, record) => (
                <Space>
                    <Popconfirm
                        placement="topRight"
                        title="产品移除"
                        // description={`${item.style}-${item.model}`}
                        onConfirm={()=>deletePayment(productStore.product.id, record.id)}
                 
                    >
                        <DeleteOutlined  style={{color: 'red'}}/>
                    </Popconfirm>
                     
                   <span onClick={()=>{setPaymentDetail({...product, qr:[userStore?.user?.paymentQR1, userStore?.user?.paymentQR2], amount: record.amount, payments:[record] , custOrders:[...product?.custOrders?.filter(v=>v.batch ===record.batch)]}); nav('/payment')}}> <AreaChartOutlined  style={{color: '#006564'}}  /> 出单</span>
                    {/* <a onClick={()=>paymentPanel({...record, date: dayjs(record.date)}, submitPayment)}>编辑</a> */}
                </Space>
            )
        },
    ]


    // Cust Order
    const custPanel = useCustOrderPanel({title:'规格 & 数量'});
    const {newCustOrder, updateCustOrder, deleteCustOrder} = productStore;
    const subCustOrder = () => {
        console.log('new payment item')
        newCustOrder(product.id, {})
    }
    const putCutOrder = (values, callbk) => {
        updateCustOrder(productStore.product.id, values, callbk)
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
        },{
            title: '批次',
            dataIndex: 'batch',
            key: 'batch',
            width: '3.5em'
        },{
            title: <PlusOutlined onClick={newRecord} style={{color: '#006564'}}  />,
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Popconfirm
                        placement="topRight"
                        title="产品移除"
                        // description={`${item.style}-${item.model}`}
                        onConfirm={()=>deleteCustOrder(productStore.product.id, record.id)}
                 
                    >
                        <DeleteOutlined  style={{color: 'red'}}/>
                    </Popconfirm>
                     
                    {/* <a onClick={()=>custPanel({...record, date: dayjs(record.date)}, putCutOrder)}>编辑</a> */}
                </Space>
            )
        },
    ]



    // Cust Order
    const materialPanel = useMaterialPanel({title:'物料 & 工厂'});
    const {newMaterials, updateMaterials, deleteMaterials} = productStore;
    const subMaterial = () => {
        console.log('new payment item')
        newMaterials(product.id, {})
    }
    const putMaterial = (values, callbk) => {
        updateMaterials(productStore.product.id, values, callbk)
    }
    
    const materialColumns = [
        {
            title: '物料名',
            dataIndex: 'label',
            key: 'label',
        },{
            title: '规格',
            dataIndex: 'specification',
            key: 'specification',
        },{
            title: '单价',
            dataIndex: 'price',
            key: 'price',
        },{
            title: '数量',
            dataIndex: 'count',
            key: 'count',
        },{
            title: '总价',
            dataIndex: 'amount',
            key: 'amount',
        },{
            title: <PlusOutlined onClick={newRecord} style={{color: '#006564'}}  />,
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Popconfirm
                        placement="topRight"
                        title="产品移除"
                        // description={`${item.style}-${item.model}`}
                        onConfirm={()=>deleteMaterials(productStore.product.id, record.id)}
                    
                    >
                        <DeleteOutlined  style={{color: 'red'}}/>
                    </Popconfirm>
                     
                    {/* <a onClick={()=>materialPanel({...record, date: dayjs(record.date)}, putMaterial)}>编辑</a> */}
                </Space>
            )
        },
    ]


    const onClickCustRow = (record) => {

        console.log('onclicek to here')
        return {
            onDoubleClick: (e)=>custPanel({...record, date: dayjs(record.date)}, putCutOrder)
        }
    }
    const onClickMaterialRow = (record) => {
        return {
            onDoubleClick: (e)=>materialPanel({...record, date: dayjs(record.date)}, putMaterial)
        }
    }
    const onClickPaymentRow = (record) => {
        return {

            onDoubleClick: ()=>paymentPanel({...record, date: dayjs(record.date)}, submitPayment)
        }
    }
    
  const items = [
    {
      key: 1,
      label: `规格 & 数量`,
      children:
            <Table pagination={{position:[]}}  showHeader={true} columns={custColumns} dataSource={productStore.product?.custOrders?.map(value=> ({key: `custOrders${value.id}`, ...value }) )} 
            
                scroll={{
                    y: 240
                }}
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
            
                onRow={onClickCustRow}
            />
    },
    {
      key: 2,
      label: `物料 & 工厂`,
      children: 
            <Table pagination={{position:[]}}  showHeader={true} columns={materialColumns} dataSource={productStore.product?.materials?.map(value=> ({key: `materials${value.id}`, ...value }) )} 
                scroll={{
                    y: 240
                }}
                summary={
                    (pageData) => {

                        let total = 0
                        pageData.forEach(
                            ({amount}) => {
                                total += amount;
                            }
                        );

                        return (
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}></Table.Summary.Cell>
                                <Table.Summary.Cell index={1}></Table.Summary.Cell>
                                <Table.Summary.Cell index={2}></Table.Summary.Cell>
                                <Table.Summary.Cell index={3}></Table.Summary.Cell>
                                <Table.Summary.Cell index={4}>{total>0?total:''}</Table.Summary.Cell>
                            </Table.Summary.Row>
                        )
                    }
                }
                onRow={onClickMaterialRow}
        
            />
    },
    {
      key: 3,
      label: `账单 & 记录`,
      children:  
            <Table pagination={{position:[]}}  showHeader={true} columns={paymentColumns} dataSource={productStore.product?.payments?.map(value=> ({key: `payments${value.id}`, ...value }) )} 
            
            scroll={{
                y: 240
            }}
            
            summary={
                (pageData) => {

                    let total = 0
                    pageData.forEach(
                        ({amount}) => {
                            total += amount;
                        }
                    );

                    return (
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0}></Table.Summary.Cell>
                            <Table.Summary.Cell index={1}></Table.Summary.Cell>
                            <Table.Summary.Cell index={2}></Table.Summary.Cell>
                            <Table.Summary.Cell index={3}>{total>0?total:''}</Table.Summary.Cell>
                        </Table.Summary.Row>
                    )
                }
            }
            onRow={onClickPaymentRow}
            />
    },
  ];



 
  

    const productStatusConvert=(stauts)=>{
        switch (stauts) {
            case "pending":
                return '洽谈中'
            case "studio":
                return  <>
                        样板中 
                        <Divider type='vertical'/>
                        <Popconfirm
                            placement="bottomRight"
                            title="回滚状态"
                            description={`回退至 洽谈阶段 ?`}
                            onConfirm={()=>productStore.fallbackStatus(product.id)}
                         
                        >
                            <RollbackOutlined style={{color: '#006564'}}/> 回退
                        </Popconfirm>
                </>
                
            case "factory":
                return <>
                        投产中 
                        <Divider type='vertical'/>
                        <Popconfirm
                            placement="bottomRight"
                            title="回滚状态"
                            description={`回退至 样板阶段 ?`}
                            onConfirm={()=>productStore.fallbackStatus(product.id)}
                         
                        >
                            <RollbackOutlined style={{color: '#006564'}}/> 回退
                        </Popconfirm>
                </>
            case "pending":
                return '待尾款'
            default:
                return '-'
        }
    }
    const getOrderCnt = ()=>{
        
        let cnt = 0;
        product?.custOrders?.forEach(order => {
            cnt+=order.actCount
        });
    

        return cnt 
    }
    const getCostCnt = ()=>{
        let cnt = 0;
        product?.materials?.forEach(order => {
            cnt+=order.amount
        });
    

        return cnt 
    }
    const getPaymentCnt = ()=>{
        let cnt = 0;
        product?.payments?.forEach(order => {
            if(order.paid)
            cnt+=order.amount
        });
    

        return cnt 
        
    }

    // upload
    const uploadProps = {
        name: 'file',
        action: 'http://aruchi.top:1181/api/upload',
        headers: {
          authorization: 'Basic c29sYXI6NjY2NjY2',
        },
        onChange(info) {
          if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (info.file.status === 'done') {
            updateImage( info?.file?.response);
            console.log(`${info.file.name} file uploaded successfully`)
            // message.success(`${info.file.name} file uploaded successfully`);
          } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed`)
            // message.error(`${info.file.name} file upload failed.`);
          }
        },
      };

    return (
        <>

            <Divider orientation='left'>{productStatusConvert(product.productStatus)}</Divider>
            <Space.Compact direction="vertical"  style={{ display: 'flex' }}>
                <Space>

                <Card 
                    
                    style={{width:'140px'}}
                    cover={  <Image
                    
                        // width={'140px'}
                        // height={'268px'}
                        src={`${process.env.REACT_APP_BE_IMAGE_API}${product.image}`}
                        fallback="data:image/png;base64,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"
                    />}
                    
                >
                  <Card.Meta description={  
                    <Upload {...uploadProps} style={{position: ''}}>
                        <UploadOutlined /> 更新图片
                    </Upload>} 
                  /> 
                
                </Card>

                <Card>
                    <Descriptions  column={1}>
             
                        <Descriptions.Item label='客户' ><Typography.Text editable={{onChange: v=>updateProduct({id: product.id, custName:v})}} >{product.custName}</Typography.Text></Descriptions.Item>
                        <Descriptions.Item label='编号' ><Typography.Text editable={{onChange: updatemodel}} >{product.model}</Typography.Text></Descriptions.Item>
                        <Descriptions.Item label='款式' ><Typography.Text editable={{onChange: updateStyle}} >{product.style}</Typography.Text></Descriptions.Item>
                     
                        {/* <Descriptions.Item label='日期'>{dayjs(product.cdate).format('YYYY.MM.DD')}</Descriptions.Item> */}
                        {/* <Descriptions.Item label='状态'>{productStatusConvert(product.productStatus)}</Descriptions.Item> */}
                        <Descriptions.Item label='板间'><Select onChange={updateStudio} style={{width: '100%'}} defaultValue={product.sampleOrder?.studioName} options={[{value: 1, label: 701},{value: 2, label: '其他板间'}]}/></Descriptions.Item>
                        <Descriptions.Item label='板师'>{product.sampleOrder?.producerName ? <>{product.sampleOrder.producerName} ({product.sampleOrder.cost}小时)</> : '-' }</Descriptions.Item>
                        {/* <Descriptions.Item  label='备注'>dsfasfasdfasdfsafsajflasfadskflsjflfjsaaldsjf </Descriptions.Item> */}
                        <Descriptions.Item  label='件数'>
                                <Space>
                                {getOrderCnt()}
                              
                              (
                                <Typography.Text type='success' >
                                {Math.round( product.amount / getOrderCnt() * 100) / 100}
                                </Typography.Text>
                              )
                                </Space>        
                        </Descriptions.Item>
                        <Descriptions.Item  label='费用'>{getCostCnt()} </Descriptions.Item>
                        <Descriptions.Item  label='已收款'>
                            <Typography.Text type='danger'>
                                <Space><MoneyCollectOutlined/>{getPaymentCnt()}</Space>
                            </Typography.Text>
                        </Descriptions.Item>
                        <Descriptions.Item  label='总售价'>  
                            <Typography.Text type='success' editable={{onChange:updateAmount}}>
                            <Space><PayCircleOutlined />{product.amount > 0 ? product.amount : 0}</Space>
                            </Typography.Text>
                        </Descriptions.Item>
                    </Descriptions>
                </Card>
                </Space>

    
              
                
                <Tabs centered  defaultActiveKey={getTabsKey()} onChange={setTabIndex} items={items} /> 

            </Space.Compact>

        </>
    )

}

export default  observer (ProductDetail);
