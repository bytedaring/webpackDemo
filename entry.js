require("./style.css")
document.write(require('./module.js'))

var React = require('react')
var ReactDOM = require('react-dom')
//
// ReactDOM.render(
//     <h1>Hello,world,react</h1>,
//     document.getElementById('example')
// )

class Hello extends React.Component{
    render(){
        return <p> Hello React!!</p>
    }
}

ReactDOM.render(<Hello/>,document.getElementById('example'))
