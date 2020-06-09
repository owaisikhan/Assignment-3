import React from 'react'
import Form from './Form'
function App(){
    return(
        <div>
            <Form account="Facebook ID" name="facebook email"/>
            <Form account="Github ID" name="github email"/>
            <Form account="Fiverr" name="fiverr email"/>
        </div>

    )
}

export default App;