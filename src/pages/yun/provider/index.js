import { observer } from "mobx-react-lite"
import { useEffect, useState } from "react"
import { yunProviderStore } from "../../../store/yun/yunProvider"
import { Button, Card, Drawer, Space, Tag } from "antd"


export default observer(
    () => {

        useEffect(()=>{
            yunProviderStore.retrieveAll();
        },[])

        const [dopen, setdopen] = useState(false)
        return (
    
            <div>
                {
                    yunProviderStore.data.map(value=> <div key={value.id}>{value.label}</div>)
                }
                <Button onClick={()=> yunProviderStore.data[0].label='9001'}>Change store value</Button>
                <Button onClick={()=>setdopen(true)}>Open</Button>

                <Drawer
                    placement="bottom"
                    closable={false}
                    onClose={()=>setdopen(false)}
                    open={dopen}
                    getContainer={false}
                >

                    content
                </Drawer>


                <Card bordered={false} title="客单处理"
                    extra={<>data &gt;</>}
                >
                    <Space>

                        <Tag color="warning">今日 338</Tag>

                        
                    </Space>
                </Card>

                <Card title="次品库">
                <Space>

                    <Tag color="error">存量 338</Tag>

                    
                    </Space>
                </Card>

                <Card title="工厂信息">
                <Space>

                    <Tag color="green">返厂 338</Tag>

                       
                    </Space>
                </Card>
            </div>
        )
    }
    
)