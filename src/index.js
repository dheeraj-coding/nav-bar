import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NavBtn extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li ><a href="#" className={this.props.selected ? "nav-btn nav-btn-selected" : "nav-btn" }  onClick={()=>this.props.onClick()}>{this.props.text} </a> </li>
        );
    }
}

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            selected_state:[false,false,false],
        };
        this.btnNames=["Docs","About","Blog"];
        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(btnID){
        const newState=[false,false,false];
        newState[btnID]=true;
        this.setState({selected_state : newState});
    }

    render() {
        return (
            <nav id="nav-bar">
                <div>
                    <h1>McDhee</h1>
                    <ul>
                        <NavBtn selected={this.state.selected_state[0]} text={this.btnNames[0]} onClick={()=>this.handleClick(0)}/>
                        <NavBtn selected={this.state.selected_state[1]} text={this.btnNames[1]} onClick={()=>this.handleClick(1)}/>
                        <NavBtn selected={this.state.selected_state[2]} text={this.btnNames[2]} onClick={()=>this.handleClick(2)}/>
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