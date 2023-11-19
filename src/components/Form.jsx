import { useState } from 'react';

function Form({ handleSubmit }) {
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit({ name, URL: url });
        setName('');
        setUrl('');
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="linkName">Link Name:</label>
            <input type="text" id="linkName" name="linkName" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <label htmlFor="URL">Link URL:</label>
            <input type="text" id="linkURL" name="linkURL" value={url} onChange={e => setUrl(e.target.value)}/>
            <br/>
            <br />
            <input type="submit" value="Submit" style={{backgroundColor: 'blue', color: 'white'}} />

        </form>
    )
}

export default Form




