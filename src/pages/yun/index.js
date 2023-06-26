import { PlusCircleOutlined, UploadOutlined, FilterOutlined, DownloadOutlined,UnorderedListOutlined } from '@ant-design/icons';
import { App, Badge, Button, Card, DatePicker, Descriptions, Divider, Drawer, Input, Popconfirm, Segmented, Select, Space, Statistic, Steps, Switch, Table, Tag, Typography, Upload } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { yunStore } from "../../store/yun/yunStore";
import useProductPanel from "../../comp/yunproductPanel";
import { read, utils } from "xlsx";
import dayjs from 'dayjs';
import './index.scss';
import Search from 'antd/es/transfer/search';

export default observer(

    ()=>{

        // 
        const {message}  = App.useApp();
        const {segmentValue, setSegmentValue, cnt4SubStore} = yunStore;
        const {newProduct, newProducts, updateProduct, delProduct, toSubStore,toPending,toFactory, filterProducts, allProducts} = yunStore;
        const [selectedRowKeys, setselectedRowKeys] = useState([]);


        //
        const [drawerSwitch, setdrawerSwitch] = useState(false);
        //
        useEffect(()=> allProducts(),[]);


        // day ago tag
        const getDayAgo = timestamp =>{

            let cnt = Math.abs(dayjs(timestamp).set('hour', 0).diff(undefined, 'day'))
            switch (true) {
                case cnt === 0:
                    return `今天` 
                case cnt === 1:
                    return `昨天` 
                case cnt < 3:
                    return `${cnt} 天前` 
                default:
                    return dayjs(timestamp).format('YYYY.MM.DD')
            }
        }


        // excel parse with upload
        const excel2Product = data => {
            return ({
                // "id": 37,
                // "version": 0,
                // "mdate": 1687570407397,
                // "cdate": 1687570407397,
                "import": data.录入,
                "sku": data.款式,
                "color": data.颜色,
                "size": data.码数,
                "count": 1,
                "ls": null,
                "switchOrNot": data.退或换 === "1退" ? false : true,
                "comment": data.备注,
                "yunBOrder": {
                    // "id": 70,
                    // "version": 0,
                    // "mdate": 1687570407398,
                    // "cdate": 1687570407398,
                    "platform": "PDD",
                    "orderNo": data.订单号,
                    "switchOrNot": data.退或换 === "1退" ? false : true,
                    "name": data.名字,
                    "mobile": data.号码,
                    "address": data.地址,
                    // "key": 70
                },
                // "yunFOderId": null,
                // "status": "pending",
                // "lastStatus": null,
                // "toStoreDate": null,
                // "toSubStoreArea": null,
                // "toSubStoreDate": null,
                // "toFactoryDate": null,
                // "pullOprt": "li, pengqiang",
                // "key": 37
            })
        }
        const props = {
            showUploadList: false,
            maxCount: 1,
            beforeUpload: (file, files) => {
                console.log(file);
                console.log(files);
                const fileReader = new FileReader();

                fileReader.onload = event => {
                    try {
                        const {result} = event.target;
                        const workbok = read(result, {type:'binary'})
                        let data = [];
                        for (const sheet in workbok.Sheets) {
                            console.log(sheet)
                            if(workbok.Sheets.hasOwnProperty(sheet))
                                data = data.concat(utils.sheet_to_json(workbok.Sheets[sheet]));
                        }                    
                        console.log(data);

                        //
                        newProducts(
                            data.map(excel2Product).filter(v => v.import === '是'), 
                            ()=> message.info("批上传成功", 1.5)
                        )

                    
                    } catch (error) {
                        console.log(error)
                    }
                }

                //
                // fileReader.readAsBinaryString(files[0])
                fileReader.readAsBinaryString(file)
            }
        }
    

        // product new one
        const productNew = () =>{
            newProduct({yunBOrder:{orderNo: '0000', platform: null, switchOrNot: null, name: null, mobile:null, address: null}})
        }
        // product update
        const productPanel = useProductPanel({title:'客件详情'})
        const submitDetail = (data, callback) =>{
            updateProduct(data, callback);
        }   
        // product delete one
        const productDel = id => {
            delProduct(id);
        }
        const onClickProductRow = record =>{

            return({
                // onClick: console.log,
                onDoubleClick: ()=> productPanel(record, submitDetail)
            }) 
        }

        //
        const getSteps = cnt => <Steps
                                    type="inline"
                                    direction='vertical'
                                    current={cnt}
                                    progressDot
                                    items={[
                                        {
                                            title: '录入',
                                            // description: 'This is a Step 1.',
                                        },
                                        {
                                            title: '次品',
                                            // description: 'This is a Step 2.',
                                        },
                                        {
                                            title: '返厂',
                                            // description: 'This is a Step 3.',
                                        },
                                    ]}
                                />
        // get segment extra
        const segmentExtra = record => {


            const svPending = 
            <>
             {getSteps(0)}
            <Space.Compact>
                <Tag>{getDayAgo(record.cdate)}</Tag>
                <Tag color="success"> {record.pullOprt ? record.pullOprt : '-' } </Tag>
            </Space.Compact>
            <Space.Compact>

    
                <Popconfirm
                    title="记录移除"
                    description="是否移除该记录 ?"
                    onConfirm={()=>delProduct(record.id)}
                    
                    >
                    <Button danger type='link'>删除</Button>
                </Popconfirm>
        
                <Popconfirm
                    title="次品库存"
                    description="是否置入 次品库存 ?"
                    onConfirm={()=>toSubStore(record.id)}
                    
                    >
                    <Button type='link'>入库</Button>
                </Popconfirm>
            </Space.Compact>
            </>

            const svSubStore = 
            <>
            {getSteps(1)}
            <Space.Compact>
                <Tag>{getDayAgo(record.toSubStoreDate)}</Tag>
                <Tag color="success"> {record.toSubStoreOprt ? record.toSubStoreOprt : '-' } </Tag>
            </Space.Compact>
            <Space.Compact>
    
                <Button type='text'>库架: {record.toSubStoreArea ? record.toSubStoreArea : '-'}</Button>
            
                <Popconfirm
                    title="次品库存"
                    description="是否由 次品库存 撤出 ?"
                    onConfirm={()=>toPending(record.id)}
             
                >
                    <Button type='link'>撤出</Button>
                </Popconfirm>
            </Space.Compact>
            </>

            const svFactory = 
            <>

           {getSteps(2)}
            
            <Space.Compact>
                <Tag>{getDayAgo(record.toSubStoreDate)}</Tag>
                <Tag color="success"> {record.toSubStoreOprt ? record.toSubStoreOprt : '-' } </Tag>
            </Space.Compact>
            
            <Space.Compact>
                <Popconfirm
                    title="记录移除"
                    description="是否移除该记录 ?"
                    onConfirm={()=>delProduct(record.id)}
                    
                    >
                    <Button danger type='link'>删除</Button>
                </Popconfirm>

                <Popconfirm
                    title="次品库存"
                    description="是否置入 次品库存 ?"
                    onConfirm={()=>toSubStore(record.id)}
                    
                    >
                    <Button type='link'>入库</Button>
                </Popconfirm>
            </Space.Compact>
            </>

            switch(record.status){

                case 'pending':
                    return svPending;
                case 'subStore':
                    return svSubStore;

                case 'toFactory':
                    return svFactory;
                default :
                    return <></>
            }
        }

        // table title
        const colExtraTitle = ()=> {


            const pendingT = 
            
                    <Space.Compact>
                        <Upload {...props}>
                            <Button icon={<DownloadOutlined />}>批</Button>
                        </Upload>
                        
                        <Button onClick={productNew} icon={<PlusCircleOutlined style={{color: '#006564'}} />}>单</Button>
                    </Space.Compact>
           
            const subStoreT = 
           
                    <Space.Compact>
                        
                        <Popconfirm
                            title="返厂清单"
                            description={`是否返厂所选记录 (${selectedRowKeys.length}) ?`}
                            onConfirm={()=>toFactory(selectedRowKeys)}
                            >
                            <Button disabled={!(selectedRowKeys.length > 0) } icon={<UploadOutlined />}>返</Button>
                        </Popconfirm>

                        <Button  icon={<UnorderedListOutlined style={{color: '#006564'}} />}>列</Button>
                    </Space.Compact>
                   

            switch (segmentValue) {
                case 'pending':
                    
                    return pendingT;
            
                case 'subStore':
                    return subStoreT;
                default:
                    return <></>
            }
           
        }
        // table
        const col = [
          {
            title: <Space.Compact>

                    <Search
                        placeholder="选择"
                        allowClear
                        enterButton="Search"
                        onChange={e=>e.target.value && console.log(e.target.value)}
                        onSearch={console.log}
                        />
                    <Badge dot={true}>
                    <Button onClick={()=>setdrawerSwitch(!drawerSwitch)} icon={ <FilterOutlined />} >筛选</Button>
                    </Badge>
                    </Space.Compact>,
            render: (_, record)=>
                <Space direction="vertical" style={{display: 'flex'}}>
                 
                    <Space.Compact>
                        
                        {record.yunBOrder.platform && <Tag> {record.yunBOrder.platform} </Tag>}
                        {record.yunBOrder.orderNo && <Tag > {record.yunBOrder.orderNo} </Tag>}

                    </Space.Compact>
                    
                    <Space.Compact>
                    {record.sku && <Tag> {record.sku} </Tag>}
                    {record.color && <Tag> {record.color} </Tag>}
                    {record.size && <Tag> {record.size} </Tag>}
                    {record.ls && <Tag> {record.ls ? 'long' : 'short'} </Tag>}
                    {record.count && <Tag> {record.count} 件 </Tag>}
                    </Space.Compact>
                    
                    <Space.Compact>

                    {record.switchOrNot ? <Tag color='#cd201f'> 换件 </Tag> : <Tag color='warning'> 退件 </Tag>}
                    <Typography.Text type="secondary" style={{maxWidth:'180px'}} ellipsis={true}>{record.comment ? record.comment : '-' }</Typography.Text>
                    </Space.Compact>
                    
                    
                
                </Space>
            
          },
          {
            title: colExtraTitle(),
            // width:'70px',
            render: (_, record) => 
                <Space direction="vertical" style={{display: 'flex'}}>
                   
                    

                    {segmentExtra(record)}
    
                </Space>
          }
        ];



        // row selection 
        const getRowOption = ()=> {

            if(segmentValue === 'subStore')
                return ({rowSelection:
                    {
                        selectedRowKeys,
                        onChange: setselectedRowKeys
                    }})
            return ({})
        }
    
     

        return(


            <div className="yunProduct">
            
               
                
                <br/>    
                <Space direction="vertical" style={{display: 'flex'}}>
                <Segmented 
                    block
                    options={
                        [
                            {
                                value: 'pending',
                                label: <Statistic
                                title="平台客单"
                                value={'-'}
                                precision={0}
                                valueStyle={{ color: '#cf1322' }}
                              />
                            },
                            {
                                value: 'subStore',
                                label: <Statistic
                                title="次品库存"
                                value={cnt4SubStore}
                                valueStyle={{ color: '#3f8600' }}
                              />
                            }
                        ]
                    }
                    value={segmentValue}
                    onChange={setSegmentValue}
                />


                <Table 
                    onRow={onClickProductRow}
                    {...getRowOption()}
                    pagination={{pageSize:4, simple:true, position: 'bottom', algin: 'end' }}
                    style={{minHeight: '384px'}}
                    columns={col}
                    dataSource={filterProducts}
                />
                </Space>


                <Drawer
                    title="筛选"
                    placement='bottom'
                    closable={false}
                    onClose={()=>setdrawerSwitch(!drawerSwitch)}
                    open={drawerSwitch}
                    // key={placement}
                >
                   <Descriptions column={3}>

                        <Descriptions.Item label='款式'>
                            <Typography.Text>款式</Typography.Text>
                        </Descriptions.Item>

                        <Descriptions.Item label='颜色'>
                            <Typography.Text>颜色</Typography.Text>
                        </Descriptions.Item>

                        <Descriptions.Item label='码数'>
                            <Typography.Text>码数</Typography.Text>
                        </Descriptions.Item>

                        <Descriptions.Item label='数量'>
                            <Typography.Text>数量</Typography.Text>
                        </Descriptions.Item>

                        
                   </Descriptions>
                </Drawer>
            </div>
        )
    }
)