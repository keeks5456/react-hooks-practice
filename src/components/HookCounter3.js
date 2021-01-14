import React, {useState} from 'react';

function HookCounter3() {
    const [name, setName] = useState({firstName: '', lastName: ''})
    const [words, setWords] = useState({value: ''})
    return (
        <div>
            <form>
                <input type="file"/> 
                {/* file input remember that for later usage */}
                <input type="text" 
                value={name.firstName} 
                onChange={e => setName({ ... name, firstName: e.target.value})}
                />
                <input type="text" 
                value={name.lastName} 
                onChange={e => setName({ ... name, lastName: e.target.value})}
                />
                <textarea 
                input='text'
                value={words.value} 
                onChange={e => setWords({ ... words, value: e.target.value})}/>
                <h2>Your first name is: {name.firstName}</h2>
                <h2>Your first name is: {name.lastName}</h2>
                <h2>What you said was: {words.value}</h2>

                <h2>{JSON.stringify(name)}</h2>
            </form>
        </div>
    );
}

export default HookCounter3;