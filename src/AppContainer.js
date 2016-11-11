// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
import ReactTHREE from 'react-three';
import THREE from 'three';
const Scene = ReactTHREE.Scene;
const Camera = ReactTHREE.PerspectiveCamera;
const Renderer = ReactTHREE.Renderer;


export default class App extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        Scene.init(this.refs.canvas.getDOMNode());
    }
    
    render() {

        return (
            <div>
                <Square/>
            </div>
        )
    }
}

