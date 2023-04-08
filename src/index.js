import React from "react";
import ReactDOM from "react-dom";
import App from './routes/App'

ReactDOM.render(<App />, document.getElementById('app'));


const Button = () => {
    const [name, setName] = useState('Hola Mundo');
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}