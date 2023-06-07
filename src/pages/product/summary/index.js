import {  DeleteOutlined, RedoOutlined } from '@ant-design/icons';
import { App,  Button, Divider,   List,  Card, Statistic, Segmented, Typography,  Image, Tag,  Popconfirm, Select } from "antd"
import { observer } from 'mobx-react-lite';
import './index.css';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import usePaymentPanel from '../../../comp/payment';
import { userStore } from '../../../store/userStore';
import { productStore } from '../../../store/productStore';
import useLogin from '../../../comp/login';
import useAPIKey from '../../../hooks/useAPIKey';




 function ProductSummary() {


    useEffect(
        ()=>{
            userStore.isLogin && productStore.index()
        },[]
    );

    //
    const nav = useNavigate();

    // pyament
    const paymentPanel = usePaymentPanel({title: '账单'});
 
    const {message} = App.useApp();
    const login = useLogin();
    const [value, setValue] = useAPIKey();
 
    // login panael
    const loginTo = (values, callbk) => {

        userStore.login(values, accessToken =>{ setValue(accessToken); callbk();}, message)
    }

    // action buton
    const actionList = (item) => {

        let list = [];
        const del = <Popconfirm
                        placement="topRight"
                        title="产品移除"
                        description={`${item.style}-${item.model}`}
                        onConfirm={()=>productStore.del(item.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined  style={{color: 'red'}}/> 移除
                    </Popconfirm>
        const fallb = <Popconfirm
                        placement="topRight"
                        title="回滚状态"
                        description={`${item.style}-${item.model}`}
                        onConfirm={()=>productStore.fallbackStatus(item.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <RedoOutlined  style={{color: 'red'}}/> 回滚
                    </Popconfirm>

        const sampleCost = <Tag color='success'>{item.sampleOrder.studioName} {item.sampleOrder.producerName ? item.sampleOrder.producerName + ' ' + item.sampleOrder.cost + ' 小时' : "排队中"}</Tag>



        switch (item.productStatus) {
            case 'pending':
                list.push(del);
                break;
            case 'studio':
                list.push(sampleCost);
                list.push(fallb)
                break;
        
            case 'factory':
                let factoryCost = 0;
                for (const meterial of item.materials) {
                    factoryCost+=meterial.amount
                }
                const cost = <Tag color='error'>{factoryCost} 元</Tag>
                list.push(cost);
                list.push(fallb);
                break
            default:
                break;
        }
        return list;
        
    }

    const getkanB = () =>{
        
        return productStore.getFilterTemplate.map(item => 
            (
                {
                    label: <Statistic
                                title={item.title}
                                value={item.value}
                                valueStyle={{
                                    color: item.color,
                                }}
                                />,
                    value: item.key
                }
            )
        )
    }

    // get Days ago
    const getDaysAgo = (cdate)=>{
        const cnt = dayjs().diff(dayjs(cdate), 'days');
        switch (true) {
            case (cnt === 0):
                return <Tag color='success'>今天</Tag>
     
            case (cnt < 3):
                return <Tag color='warning'>{cnt} 天前</Tag>

            default:
                return <> <Tag color='error'>请跟进</Tag> {dayjs(cdate).format('YYYY.MM.DD')} </> ;
        }
    }

    return (
  
        <div className='about'>

        <Divider orientation='left'>概要</Divider>
            
        <Segmented
            value={productStore.filter}
            onChange={productStore.updateFilter}
            block
            options={getkanB()}
        />

        <Card
            
        >
        <List 
            size='middle'
            itemLayout="horizontal"
            pagination={{
                
                pageSize:5,
                simple: true,
                position: 'bottom',
                align: 'end'
        
            }}
            dataSource={productStore.getByFilter()}
            renderItem={
                value => 
                <List.Item
                    actions={actionList(value)}
                >
           
                    <List.Item.Meta  
                        onClick={()=>{productStore.product=value; nav(`/product/detail/${productStore.filter}`)}}
                        avatar={<Image
                                    width={30}
                                    height={40}
                                    src="error"
                                    fallback="data:image/png;base64,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"
                                />}
                        title={<>{value.style ? value.style : '-'} {value.model} </>}
                        description={<Typography.Text type='secondary' ellipsis>
                            {getDaysAgo(value.cdate)}
                        </Typography.Text>}
                    />

                
                </List.Item>
            }
        />      
        
        </Card>
        <br />
        <Button onClick={() => productStore.new()} size='large' type='primary' block> 客单添加 </Button>
        </div>
        
    )
}



export default observer(ProductSummary)