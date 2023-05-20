

export const About = () => {

    const custf = () =>{
        return process.env.REACT_APP_VAR1 + ' fncion'
    }

    return (
        <div>{custf()}</div>
    )
}

