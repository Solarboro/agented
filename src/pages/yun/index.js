import { PlusCircleOutlined, UploadOutlined, FilterOutlined, DeleteOutlined, UndoOutlined,FileExcelOutlined, FileDoneOutlined,FileSyncOutlined } from '@ant-design/icons';
import { Badge, Button, Card, DatePicker, Descriptions, Divider, Drawer, Segmented, Select, Space, Statistic, Switch, Table, Tag, Typography, Upload } from "antd";
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

        const {segmentValue, setSegmentValue} = yunStore;
        const {newProduct, updateProduct, filterProducts, allProducts} = yunStore;
        const [selectedRowKeys, setselectedRowKeys] = useState([]);


        //
        const [drawerSwitch, setdrawerSwitch] = useState(false);
        //
        useEffect(()=> allProducts(),[]);

        // excel parse
        const onExcel = file => {


            // const {files} = file.target;

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
                    let obj = data[0];
                    console.log(data[0].__rowNum__)
                    console.log(data[0].ID)
                    console.log(data[0]['名字'])
                    console.log(data[0].备注)
                    console.log(data[0].完成)
                    console.log(data[0].款式)
                    console.log(data[0].码数)
                    console.log(data[0].订单号)
                    console.log(data[0].退或换)
                    console.log(data[0].颜色)
                    console.log(data[0].__EMPTY)
                
                    console.log(data);

                
                } catch (error) {
                    console.log(error)
                }
            }

            //
            // fileReader.readAsBinaryString(files[0])
            fileReader.readAsBinaryString(file.file)
        }

        // product new one
        const productNew = () =>{
            newProduct({})
        }
        // product update
        const productPanel = useProductPanel({title:'客件详情'})
        const submitDetail = (data, callback) =>{
            updateProduct(data, callback);
        }   
        const onClickProductRow = record =>{

            return({
                // onClick: console.log,
                onDoubleClick: ()=> productPanel(record, submitDetail)
            }) 
        }

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
                        
                        {record.yunBOrder.orderNo && <Tag > {record.yunBOrder.orderNo} </Tag>}
                        {record.yunBOrder.platform && <Tag> {record.yunBOrder.platform} </Tag>}
                        {record.switch && <Tag> {record.platformId} </Tag>}

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
            title: <Space.Compact>
                        <Button onClick={productNew} icon={<UploadOutlined style={{color: '#006564'}} />}>批</Button>
                        <Button onClick={productNew} icon={<PlusCircleOutlined style={{color: '#006564'}} />}>单</Button>
                    </Space.Compact>,
            // width:'70px',
            render: (_, record) => 
                <Space direction="vertical" style={{display: 'flex'}}>
                   
                    <Tag color="success"> {record.pullOprt ? record.pullOprt : '-' } </Tag>
                    <Space>
                        <Tag>{dayjs(record.cdate).format('MM.DD')}</Tag>
                        {/* <Switch checkedChildren='完' unCheckedChildren="进"/> */}
                    </Space>
                    {/* <Space.Compact size='middle'>
                        <Button icon={<FileSyncOutlined style={{color: 'blue'}} />} />
                        <Button icon={<FileExcelOutlined style={{color: 'red'}} />} />
                        <Button  icon={<DeleteOutlined  style={{color: 'red'}}/>} />
                    </Space.Compact> */}
    
                </Space>
          },
        //   {
        //     title: 'firstname',
        //     dataIndex: 'firstname'
        //   },
        //   {
        //     title: 'age',
        //     dataIndex: 'age'
        //   }
        ];


    
     

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
                                value={5800}
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
                    // rowSelection={
                    //     {
                    //         selectedRowKeys,
                    //         onChange: setselectedRowKeys
                    //     }
                    // }
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
                   <Descriptions column={4}>

                        <Descriptions.Item label='abd'>
                            <Typography.Text>abd</Typography.Text>
                        </Descriptions.Item>

                        
                   </Descriptions>
                </Drawer>
            </div>
        )
    }
)