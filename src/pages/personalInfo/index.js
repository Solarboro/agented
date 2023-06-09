import { Card, Descriptions, Divider,  Typography} from "antd"
import { observer } from "mobx-react-lite"
import { userStore } from "../../store/userStore"




function PersonalInfo(){

    const {user:{firstname, lastname}, updateUser} = userStore;
    return (
        <>
        <Divider orientation="left">个人信息</Divider>

        {
            // basic info
            <Card>

                <Descriptions size="middle" column={2} >

                        <Descriptions.Item label='姓'> 
                                <Typography.Text 
                                    editable={{onChange: v=>updateUser({lastname: v})}}
                                >{lastname}</Typography.Text>
                        </Descriptions.Item>
                        <Descriptions.Item label='名'>
                                <Typography.Text
                                    editable={{onChange: v=>updateUser({firstname: v})}}
                                >{firstname}</Typography.Text>
                        </Descriptions.Item>
      
                </Descriptions>
            </Card>
            // QR Code
        }
        </>
    )
}


export default observer(PersonalInfo)