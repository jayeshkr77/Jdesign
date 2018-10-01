import React,{Component} from 'react';
import '../css/caraousal.css';

class Carousal extends Component {

    componentDidMount(){
        
    }

    render(){
        var count=0;
        var n=this.props.items.length;

        return(
            <div className="caraousal-wrapper" style={this.props.style}>
                {this.props.items.map(item=><div className={n===3?'caraousal-items car3':'caraousal-items car4'} style={{position:'absolute',marginLeft:`${((count++)*100)}%`}}>{item}</div>)}
            </div>
        );
    }
}

export default Carousal;