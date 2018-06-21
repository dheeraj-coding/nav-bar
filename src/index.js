import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <nav id="nav-bar">
                <div>
                    <h1>McDhee</h1>
                    <ul>
                        <li ><a href="#" className="nav-btn">Docs</a></li>
                        <li ><a href="#" className="nav-btn">About</a></li>
                        <li ><a href="#" className="nav-btn">Blog</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

ReactDOM.render(
    <NavBar />,
    document.getElementById('root')
);