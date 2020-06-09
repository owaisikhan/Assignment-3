import React from 'react'
import Form from './Form'
function App(){
    return(
        <div>
            <h1>Developer Form</h1>
            <Form account="Facebook ID" name="facebook email"/>
            <br/>
            <Form account="Github ID" name="github email"/>
            <br/>
            <Form account="Fiverr" name="fiverr email"/>
        </div>

    )
}

export default App;