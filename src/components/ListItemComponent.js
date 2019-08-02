import React from 'react';
import '../styles/ListItemComponent.css';

class ListItemComponent extends React.Component {
    
    
    
    render() {
        return (
                <div key={this.props.objectID} className="ListItemComponent">
                    
                    <div key={this.props.objectID} className="ComponentWrapper">
                        <h3 key={this.props.objectID} className="ComponentTitle">{this.props.title}</h3>
                        <ul key={this.props.objectID} className="ComponentSubHeader">
                            <li key={this.props.objectID} > {this.props.points} points</li>
                            <li key={this.props.objectID} >{this.props.author} </li>
                            <li key={this.props.objectID} >10 months ago</li>
                            <li key={this.props.objectID} >{this.props.numOfComments} comments</li>
                            <li key={this.props.objectID} >
                                <a href={this.props.url}>
                                    {this.props.url}
                                </a>
                            </li>
                        
                        </ul>
                   </div>
                 
                </div>
            );
    }
}

export default ListItemComponent;