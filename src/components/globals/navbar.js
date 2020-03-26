import React, { Component } from 'react'
import {Link} from 'gatsby'


export default class navbar extends Component {
    state = {
        navbarOpen:false,
        css: 'collapse navbar-collapse',
        links:[
            {
                id:1,
                path:'/beconfident',
                text: 'beconfident'
            },
            {
                id:2,
                path:'/dentaworks',
                text: 'dentaworks'
            },
            {
                id:3,
                path:'/dentway',
                text: 'dentway'
            },
            {
                id:4,
                path:'/whiteone',
                text: 'White One'
            },
            {
                id:5,
                path:'/om',
                text: 'om'
            },
        ]
    }
    navbarHandler = () =>{
       this.state.navbarOpen?this.setState({navbarOpen:false, css:"collapse navbar-collapse"}):this.setState({navbarOpen:true, 
       css:"collapse navbar-collapse show"});    
    };
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light">
                <Link to="/" className="navbar-brand">
                    <img src="./loanlogos/mjolumba-logo.png" alt="mjölumba" />
                </Link>
                {/* <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={this.state.css}>
                    <ul className="navbar-nav">
                        {
                            this.state.links.map(link => {
                               return (
                                <li key={link.id} className="nav-item">
                                    <Link to={link.path} className="nav-link text-capitalize">
                                        {link.text}
                                    </Link>
                                </li>
                               ) 
                            })
                        }
                    </ul>
                </div> */}
            </nav>
        )
    }
}
