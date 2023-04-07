import React from "react";
import ReactDOM from "react-dom";
import App from './routes/App'

ReactDOM.render(<App />, document.getElementById('app'));

const Button = () => {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}