import React from 'react';

const HelloWorld = () => {
    const [value, setValue] = React.useState('');
    const [visible, setVisible] = React.useState(false);

    const toggele  = ()=>value === 'hello'&&setVisible((prev)=>!prev);
    const onChange = e => setValue(e.target.value);
    return(
        <div>
            <input id={'search'} type='text' placeholder={'Search...'} onChange={onChange} value={value} />
            <button onClick={toggele} id={"toggle"}>
                Hello World!
            </button>
            {visible&&<h1 id="hello">Hello World</h1>}
        </div>
    )
}

export default HelloWorld;
