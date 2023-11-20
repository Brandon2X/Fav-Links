import { useState } from 'react';
import Table from './Table';
import Form from './Form'

function LinkContainer(){
    const [favLinks, setFavLinks] = useState([]);

    const handleRemove = (index) => {
        setFavLinks(favLinks.filter((_, i) => i !== index));
    }
    
    const handleSubmit = (favLink) => {
        if (favLink.URL !== '') {
            setFavLinks([...favLinks, favLink]);
        }
    }

    return(
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'black' ,
            color: 'white'
          
        }}>
            <h1>My Favorite Links</h1>
            <p>Add a new link with a name and URL to the table! </p>
            <Table linkData={favLinks} removeLink={handleRemove}/>
            <h1>Add New</h1>
            <Form handleSubmit={handleSubmit}/>
        </div>
    )
}

export default LinkContainer
