

export const Home = () => {


    return (
        <div>
            {process.env.REACT_APP_VAR1}
            <br />
            {process.env.REACT_APP_VAR2}
            <br />
            {process.env.REACT_APP_NODE_ENV}
            <br />
            {process.env.NODE_ENV}
            
        </div>
    )
}

