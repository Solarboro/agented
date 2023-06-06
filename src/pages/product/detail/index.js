import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Divider, Popconfirm, Space, Table, Tabs } from "antd";
import { observer } from "mobx-react-lite";
import { productStore } from "../../../store/productStore";
import dayjs from 'dayjs';
import usePaymentPanel from '../../../comp/payment';





function ProductDetail () {

    const {id: productId, payments, sampleOrder, custOrders, materials} = productStore.product;

    // payment 
    const paymentPanel = usePaymentPanel({title:'记录编辑'});
    const {newPayment, updatePayment, deletePayment} = productStore;
    const submit2NewPayment = () => {
        newPayment(productId, {})
    }
    const submitPayment = (values, callbk) => {
        updatePayment(productId, values, callbk)
    }
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
                dayjs(date).format("YYYY.MM.DD") ? dayjs(date).format("YYYY.MM.DD") : "-"
            )

        },{
            title: '支付状态',
            dataIndex: 'paid',
            key: 'paid',
            render: (_, {paid}) => (
                paid ? <><CheckCircleOutlined style={{color: 'green'}} />{'已支付'}</> : <>-</> 
            )
        },{
            title: '支付金额',
            dataIndex: 'amount',
            key: 'amount'
        },{
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Popconfirm
                        placement="topRight"
                        title="产品移除"
                        // description={`${item.style}-${item.model}`}
                        onConfirm={()=>deletePayment(productId, record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined  style={{color: 'red'}}/>
                    </Popconfirm>
                     
                    <a onClick={()=>paymentPanel({...record, date: dayjs(record.date)}, submitPayment)}>编辑</a>
                </Space>
            )
        },
    ]


    // Cust Order
    const custColumns = [
        {
            title: '码',
            dataIndex: 'size',
            key: 'size',
            width: '.5em'
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
            title: '操作',
            key: 'action',
            render: (_, record) => (
                <Space>
                    <Popconfirm
                        placement="topRight"
                        title="产品移除"
                        // description={`${item.style}-${item.model}`}
                        onConfirm={()=>deletePayment(productId, record.id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <DeleteOutlined  style={{color: 'red'}}/>
                    </Popconfirm>
                     
                    <a onClick={()=>paymentPanel({...record, date: dayjs(record.date)}, submitPayment)}>编辑</a>
                </Space>
            )
        },
    ]
    //

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `规格 & 数量`,
      children: <> 
            <Button onClick={submit2NewPayment}>new Payment</Button>
            <Table pagination={{position:[]}}  showHeader={true} columns={custColumns} dataSource={custOrders.map(value=> ({key: `custOrders${value.id}`, ...value }) )} 
            
                summary={
                    (pageData) => {

                        let totalPreCount = 0;

                        pageData.forEach(
                            ({preCount, actCount}) => {
                                totalPreCount += preCount;
                            }
                        );

                        return (
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>{'总'}</Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>-</Table.Summary.Cell>
                                <Table.Summary.Cell index={2}>-</Table.Summary.Cell>
                                <Table.Summary.Cell index={3}>-</Table.Summary.Cell>
                                <Table.Summary.Cell index={4}>{totalPreCount}</Table.Summary.Cell>
                                <Table.Summary.Cell index={5}>{totalPreCount}</Table.Summary.Cell>
                            </Table.Summary.Row>
                        )
                    }
                }
            
            />
        </>
    },
    {
      key: '2',
      label: `物料 & 工厂`,
      children: <> 
            <Button onClick={submit2NewPayment}>new Payment</Button>
            <Table pagination={{position:[]}}  showHeader={true} columns={paymentColumns} dataSource={payments.map(value=> ({key: `paymentKey_${value.id}`, ...value }) )} />
        </>
    },
    {
      key: '3',
      label: `付款记录`,
      children:  <> 
            <Button onClick={submit2NewPayment}>new Payment</Button>
            <Table pagination={{position:[]}}  showHeader={true} columns={paymentColumns} dataSource={payments.map(value=> ({key: `paymentKey_${value.id}`, ...value }) )} />
        </>
    },
  ];

    return (
        <>
            

            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />


        </>
    )

}

export default  observer (ProductDetail);
