import { PlusCircleOutlined, UploadOutlined, FilterOutlined, DownloadOutlined,UnorderedListOutlined, ReloadOutlined, RollbackOutlined} from '@ant-design/icons';
import { App,  AutoComplete,  Button,  Card,  Col,  Collapse,  DatePicker,  Descriptions, Drawer, FloatButton, Form, Image, Input, InputNumber, List, Popconfirm, Row, Segmented,  Select,  Space, Statistic, Steps,  Switch,  Table, Tag, Typography, Upload, Watermark } from "antd";
import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { yunStore } from "../../store/yun/yunStore";
import useProductPanel from "../../comp/yunproductPanel";
import { read, utils } from "xlsx";
import dayjs from 'dayjs';
import './index.scss';
import { findDOMNode } from 'react-dom';
import { useForm } from 'antd/es/form/Form';
import CheckableTag from 'antd/es/tag/CheckableTag';
import bg from '../../bg.jpg'
export default observer(

    ()=>{

        // 
        const {message, modal}  = App.useApp();
        const {segmentValue, setSegmentValue, cnt4SubStore, fOrders} = yunStore;
        const {setFilterProduct,filterProduct,filterToday,filterInprogress,filterDone,setfilterToday,setfilterInprogress,setfilterDone} = yunStore;
        const {newProduct, newProducts, updateProduct, delProduct, toSubStore,toPending,toFactory, filterProducts, allProducts} = yunStore;

        const {retrieveAllFOrder, updateFOrder, rollbackFromFactory} = yunStore;
        const [selectedRowKeys, setselectedRowKeys] = useState([]);


        //
        const areas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'];
        const [filteForm] = useForm();
        //
        const [drawerSwitch, setdrawerSwitch] = useState(false);

        // factory
        const [drawerSwitchFactory, setdrawerSwitchFactory] = useState(false);
        //
        useEffect(()=> {allProducts();retrieveAllFOrder();},[]);


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
                    "platform": "拼多多",
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
            newProduct({count:0, yunBOrder:{orderNo: '0000', platform: null, switchOrNot: null, name: null, mobile:null, address: null}})
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
        const getSteps = (cnt,record) => <Steps
                                    type="inline"
                                    direction='vertical'
                                    current={cnt}
                                    progressDot
                                    items={[
                                        {
                                            title: '录入',
                                            description: record.cdate ? <Space>
                                                        {getDayAgo(record.cdate)}
                                                        -
                                                        {record.pullOprt ? record.pullOprt : '-' } 
                                                        </Space>: undefined,
                                        },
                                        {
                                            title: '次品',
                                            description: record.toSubStoreDate ? <Space>
                                            {getDayAgo(record.toSubStoreDate)}
                                            -
                                            {record.toSubStoreOprt ? record.toSubStoreOprt : '-' } 
                                            </Space>: undefined,
                                        },
                                        {
                                            title: '返厂',
                                            description: record.toFactoryDate ? <Space>
                                            {getDayAgo(record.toFactoryDate)}
                                            -
                                            {record.toFactoryOprt ? record.toFactoryOprt : '-' } 
                                            </Space>: undefined,
                                        },
                                    ]}
                                />
        // get segment extra
        const segmentExtra = record => {


            const svPending = 
            <>
             {getSteps(0, record)}

    
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
            {getSteps(1, record)}
    
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

           {getSteps(2, record)}
            
    
            
          
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
            
                    <Space>
                        <Upload {...props}>
                            <Button icon={<DownloadOutlined />}>批量导入</Button>
                        </Upload>

                        <Button onClick={ ()=>
                            modal.info({
                                icon: true,
                                content: <Image src={bg}  />
                            })

                        }>概要</Button>
                        {/* <Button onClick={productNew} icon={<PlusCircleOutlined style={{color: '#006564'}} />}>单</Button> */}
                    </Space>
           
            const subStoreT = 
           
                    <Space>
                        
                        <Popconfirm
                            disabled={!(selectedRowKeys.length > 0) }
                            title="返厂清单"
                            description={`是否返厂所选记录 (${selectedRowKeys.length}) ?`}
                            onConfirm={()=>toFactory(selectedRowKeys).then(()=>setselectedRowKeys([])).catch(console.log)}
                            >
                            <Button disabled={!(selectedRowKeys.length > 0) } icon={<UploadOutlined />}>返厂</Button>
                        </Popconfirm>

                        <Button onClick={()=>setdrawerSwitchFactory(true)} icon={<UnorderedListOutlined style={{color: '#006564'}} />}>清单</Button>
                    </Space>
                   

            switch (segmentValue) {
                case 'pending':
                    
                    return pendingT;
            
                case 'subStore':
                    return subStoreT;
                default:
                    return <></>
            }
           
        }

        // 
        const getWaterMarkContent = record => {

            

            switch (record.status) {
                case 'pending':
                    if(getDayAgo(record.cdate) !== '今天')
                        return  '';
                    return `${getDayAgo(record.cdate)}新增`
                case 'subStore':
                    if(getDayAgo(record.toSubStoreDate) !== '今天')
                        return  '';
                    return `${getDayAgo(record.toSubStoreDate)}入库`
                // case 'toFactory':
                //     return `${getDayAgo(record.cdate)}返厂`
                
                default:
                    return '';
            }
            
        }
        // table
        const col = [
          {
            title: colExtraTitle(),
            render: (_, record)=>
            <Watermark content={getWaterMarkContent(record)} gap={[15,80]} >
                <Space direction="vertical" style={{display: 'flex'}}>
                    <Space>
                        <Typography.Text style={{fontSize: '12px'}} >{record.yunBOrder.platform}</Typography.Text> 
                        <Typography.Text copyable style={{fontSize: '12px'}}>{record.yunBOrder.orderNo}</Typography.Text> 
                    </Space>
                  
                    
                    <Space>            
                    {record.switchOrNot ? <Tag color='red'> 换件 </Tag> : <Tag color='warning'> 退件 </Tag>}
                    {record.sku && <Typography.Text style={{fontSize: '12px'}}>{record.sku} </Typography.Text> }
                    {record.color && <Typography.Text style={{fontSize: '12px'}}>{record.color} </Typography.Text>}
                    {record.size && <Typography.Text style={{fontSize: '12px'}}>{record.size} </Typography.Text>}
                    {record.count && <Typography.Text style={{fontSize: '12px'}}>{record.count}件</Typography.Text>}
                    {record.yunBOrder.name && <Typography.Text style={{fontSize: '12px'}}>{record.yunBOrder.name}</Typography.Text>}

                    </Space>
                    
                    <Space style={{alignItems:'center'}} >
                        {record.lastStatus === '已完成' ? <Tag onClick={()=>updateProduct({...record, lastStatus:'跟进中'})} color='green'> {record.lastStatus} </Tag > : <Tag onClick={()=>updateProduct({...record, lastStatus:'已完成'})} color='#cd201f'> 跟进中</Tag>}
                
                        <Typography.Text type="secondary" style={{maxWidth:'160px',fontSize: '12px'}} ellipsis={true}>{record.comment ? record.comment : '-' }</Typography.Text>
                    </Space>
                    
                    
                
                </Space>
            </Watermark>
            
          },
          {
            title: <></>,
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
    

        // CollapseItems
        const getCollapseItemsLabelCnt = record => {
            let cnt = 0;
            record.yunProducts.forEach(element => {
                cnt += element.count
            });

            return cnt;

        }
        const getCollapseItemsLabel = record => 
        <Space style={{display:'flex', justifyContent: 'space-between'}}>
            <Space>
                        {record.toFactoryDate && <Typography.Text style={{fontSize: '12px'}}>{getDayAgo(record.toFactoryDate)} </Typography.Text> }
                        {record.toFactoryOprt && <Typography.Text style={{fontSize: '12px'}}>{record.toFactoryOprt} </Typography.Text> }
                    <Typography.Text style={{fontSize: '12px'}}>{getCollapseItemsLabelCnt(record)} 件 </Typography.Text> 
                    <Typography.Text type="secondary"  style={{maxWidth:'150px',fontSize: '12px'}} ellipsis={true}>{record.comment ? record.comment : '-' }</Typography.Text>

                    
            </Space>

            <Popconfirm
                title="返厂订单"
                description="是否 撤回返厂订单所有件 ?"
                onConfirm={()=>rollbackFromFactory(record.id)}
            >
                <RollbackOutlined  style={{color: 'red'}}/> 撤
            </Popconfirm>
        </Space>
        const getCollapseItems = ()=> {
         
            return fOrders.map(
                v =>  (
                    {
                        key: v.key,
                        label: getCollapseItemsLabel(v),
                        children: <>
                        备注: <Typography.Text type="secondary"  copyable editable={{onChange: comment=> updateFOrder({...v, comment})}} >{v.comment}</Typography.Text>
                            <List 
                                size='small'
                                dataSource={v.yunProducts}
                                renderItem={
                                    (record, index) => <List.Item>
                                        
                            <Space direction="vertical" style={{display: 'flex'}}>

                                    <Space>    
                                    <Typography.Text style={{fontSize: '12px'}} >{record.yunBOrder.platform}</Typography.Text> 
                                    <Typography.Text copyable style={{fontSize: '12px'}}>{record.yunBOrder.orderNo}</Typography.Text>     
                                    </Space>

                                    <Space>    

                                    {record.sku && <Typography.Text style={{fontSize: '12px'}}>{record.sku} </Typography.Text> }
                                    {record.color && <Typography.Text style={{fontSize: '12px'}}>{record.color} </Typography.Text>}
                                    {record.size && <Typography.Text style={{fontSize: '12px'}}>{record.size} </Typography.Text>}
                                    {record.count && <Typography.Text style={{fontSize: '12px'}}>{record.count}件</Typography.Text>}
                                    {record.yunBOrder.name && <Typography.Text style={{fontSize: '12px'}}>{record.yunBOrder.name}</Typography.Text>}
                                    
                
                                    </Space>
                                    </Space>
                                    </List.Item>
                                    
                                }
                            />
                            
                            </>
                        ,
                    }
                )
            )

        }


       
        return(

            <div className="yunProduct" >
            
               
                
                <br/>    

                <Space direction="vertical" style={{display: 'flex'}}>

                <Segmented 
                    block
                    options={
                        [
                            {
                                value: 'pending',
                                label: <Statistic
                                title="平台售后"
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
                    pagination={{pageSize:4, simple:true, position: ['bottomCenter'] }}
                    style={{minHeight: '384px'}}
                    columns={col}
                    dataSource={filterProducts}
                />


                   
               
                </Space>

                {!drawerSwitch && <FloatButton 
                    badge={{dot: filteForm.isFieldsTouched()}} 
                    icon={<FilterOutlined />} 
                    type="primary" 
                    onClick={()=> {filteForm.setFieldsValue(filterProduct); setdrawerSwitch(!drawerSwitch)}} />
                }
                <Drawer
                    title="筛选"
                    // size='large'
                    extra={
                    <>
                        <Button onClick={()=>{filteForm.resetFields(); setFilterProduct({})}}>重置</Button>
                    </>
                    }
                    placement='left'
                    onClose={()=>setdrawerSwitch(!drawerSwitch)}
                    open={drawerSwitch}
                    getContainer={false}
                    // key={placement}
                >
                   
                <Form
                    labelCol={{span:24}}
                    wrapperCol={{span:24}}
                    size='middle'
                    preserve={false}
                    onFinish={(values)=>{setFilterProduct(values);setdrawerSwitch(!drawerSwitch)}}
                    form={filteForm}            
                >

                    <Form.Item label='客件详情'>
                    <Space>
                    <Form.Item name="sku"><Input placeholder="款式"  /></Form.Item>
                    <Form.Item  name="color"><Input placeholder="颜色" /></Form.Item>
                    <Form.Item  name="size"><Input placeholder="码数" /></Form.Item>
                    <Form.Item  name="count"><InputNumber placeholder="数量" /></Form.Item>
                    </Space>
                    {/* <Form.Item name="comment"><TextArea placeholder='备注信息 / 摘要 / 其他' /></Form.Item> */}
                    <Space>
                    {/* <Form.Item  name="ls" valuePropName="checked"><Switch checkedChildren="长" unCheckedChildren="短"  /></Form.Item> */}
                    {/* <Form.Item  name='switchOrNot' ><Select  placeholder="退/换" defaultValue={undefined} options={[{label:'退件', value:false},{label:'换件', value: true},{label:'退换', value:undefined}]}/></Form.Item> */}
                    <Form.Item name="lastStatus"><Select  placeholder="进度"  options={[{value:'跟进中',label:'跟进中'},{value:'已完成',label:'已完成'}]}/></Form.Item>
                    <Form.Item name="status"><Select  placeholder="状态"  options={[{value:'pending',label:'录入'},{value:'subStore',label:'次品'},{value:'toFactory',label:'返厂'}]}/></Form.Item>
                    </Space>
                    </Form.Item>
                


                    <Form.Item label='变更详情'>
                    
                    <Space>
                        <Form.Item  name="pullOprt"><Input placeholder="录入人员" /></Form.Item>
                        <Form.Item  name="cdate"><DatePicker inputReadOnly placeholder='录入日期' /></Form.Item>
                    </Space>
                    <Space>
                        <Form.Item  name="toSubStoreOprt"><Input placeholder="入库人员" /></Form.Item>
                        <Form.Item name="toSubStoreArea"><Select  placeholder="位置"  options={areas.map(value=>({label:value, value}))}/></Form.Item>
                        <Form.Item name="toSubStoreDate"><DatePicker inputReadOnly placeholder='入库日期' /></Form.Item>
                    </Space>
                    <Space>
                        <Form.Item  name="toFactoryOprt"><Input placeholder="返厂人员" /></Form.Item>
                        <Form.Item  name="toFactoryDate"><DatePicker inputReadOnly placeholder='返厂日期' /></Form.Item>
                    </Space>

                    </Form.Item>

    
                    <Form.Item label='平台 / 客户'>
                        <Row gutter={8} align='center'>

                            <Col  span={8}>
                            <Form.Item name={['yunBOrder',"platform"]}><Select options={[{label:"拼多多",value:"拼多多"}]} placeholder='电商'/></Form.Item>
                            </Col>

                            <Col  span={16}>
                            <Form.Item  name={['yunBOrder',"orderNo"]}><AutoComplete placeholder='电商订单' /></Form.Item>
                            </Col>
                            <Col  span={8}>
                            <Form.Item style={{display: 'inline-block', width:'100%'}}  name={['yunBOrder',"name"]} ><AutoComplete placeholder='客户名' /></Form.Item>
                            </Col>

                            <Col  span={16}>
                            <Form.Item  style={{display: 'inline-block', width:'100%'}}  name={['yunBOrder',"mobile"]}><AutoComplete placeholder='手机号' /></Form.Item>
                            </Col>
                       
                        </Row>
                    
                    </Form.Item>
        
        
                    <Form.Item>
                        <Button block type='primary' htmlType='submit'>查找</Button>
                    </Form.Item>

                </Form>
                

                </Drawer>

                <Drawer
                    title="返厂记录"
                    placement='bottom'
                    
                    extra={<Button icon={<ReloadOutlined />}  onClick={()=>retrieveAllFOrder()}>获取最新记录</Button>}
                    onClose={()=>setdrawerSwitchFactory(!drawerSwitchFactory)}
                    open={drawerSwitchFactory}
                >
                    <Collapse collapsible="icon" items={getCollapseItems()} />
                </Drawer>


            </div>
        )
    }
)