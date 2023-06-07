import { Button } from "antd";
import { observer } from "mobx-react-lite";
import { useLocation } from "react-router-dom";


function PaymentSummary(){
    const ul = useLocation()

    const back = ()=>{

    }
    return (
        <>
            <Button onClick={back()}>Back</Button>
            here
            here
            here

            here
            here
            here
            here
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            here
        </>
    )
}


export default observer(PaymentSummary)