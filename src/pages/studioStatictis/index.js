import { useEffect, useState } from "react";
import { productStore } from "../../store/productStore"
import { observer } from "mobx-react-lite";
import { Card, Descriptions, Divider, InputNumber, List, Progress, Select, Space, Typography } from "antd";



function StudioStatictis(){
    //
    const {statistic701Period,statistic701PeriodFilter, statistic701Producer, statistic701ProducerFilter, statistic701, get701Statistic} = productStore;
    const [salary, setSalary] = useState(7500)

    //
    useEffect(
        ()=>{
            get701Statistic();
        },
        []
    );

    const filterList = () =>{
        return statistic701
        .filter(v=>v.period === statistic701PeriodFilter)
        .filter(v=>v.producer === statistic701ProducerFilter);
    }

    const totalCost = () =>{
        let cost = 0;
        let count = 0;

        //
        filterList().forEach(element => {
            cost += element.cost;
            count += element.count;
        });

        return {cost, count};
    }

    

    return (

        <>
        <Divider orientation="left">统计</Divider>


        <Space direction="vertical" style={{display: 'flex'}}> 

        <Card>

        <Space>
        <Typography.Text >板期</Typography.Text>
        <Select  placeholder="请选择"  style={{width:'100px'}}  value={statistic701PeriodFilter} onChange={value => productStore.statistic701PeriodFilter = value} options={statistic701Period?.map(value=>({value, label:value}))} />
  
        <Typography.Text >板师</Typography.Text>
        <Select  placeholder="请选择" style={{width:'100px'}} value={statistic701ProducerFilter} onChange={value => productStore.statistic701ProducerFilter = value} options={statistic701Producer?.map(value=>({value, label:value}))} />

        
       
        </Space>
        </Card>
    
        <Card>
            <Space>
        <Typography.Text >薪资</Typography.Text>
            <InputNumber style={{width:'100px'}} value={salary} onChange={setSalary}/>
            </Space>
        </Card>

        <Card title={<Space>
            {statistic701PeriodFilter} {statistic701ProducerFilter} {totalCost().cost}时 {totalCost().count}件
            </Space>}>
        <List
            
            dataSource={filterList()}
            
            renderItem={
                record=>
                <List.Item>

                    <Descriptions column={2}>

                        <Descriptions.Item label={record.agent}>
                            {Math.round(record.cost / totalCost().cost * salary * 100)/100} 元
                        </Descriptions.Item>
                        <Descriptions.Item label={`${record.cost}时 / ${record.count}件`}>
                            <Progress strokeColor={{'0%':'#006564', '100%':'#87d068'}} percent={Math.round( record.cost / totalCost().cost * 10000)/100}/>
                        </Descriptions.Item>
                    </Descriptions>
                </List.Item>
            }
            
            />
        </Card>
        </Space>
        </>
    )
}


export default observer(StudioStatictis)