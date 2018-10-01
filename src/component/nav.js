import React,{Component} from 'react';
import '../css/nav.css';

class Nav extends Component{
    render(){
        return(
            <div className={this.props.pos === undefined ? 'navbar':this.props.pos} style={this.props.menu.style}>
                {this.props.menu.left && this.props.menu.left.map(list => <span className="left">{list}</span>)}
                {this.props.menu.right && this.props.menu.right.map(list => <span className="right">{list}</span>)}
            </div>
        );
    }
}
export default Nav;