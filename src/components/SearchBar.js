import React from 'react';
import '../styles/SearchBar.css';

class SearchBar extends React.Component {
    state = {
        SearchTerm: ''
    }
    
    
    componentDidMount(){
        //This function gets called if our jsx was able to display something to the user
        console.log(this.state.SearchTerm);
    }
    
    
    
    
    
    render(){
        return (
                <div className="SearchBar">
                    <img className="ThumbNail" alt="UA My Hero" src="data:image/jpeg;base64,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" />
                    <h4 className="logoName">Search <br />Your News Here </h4>
                    
                    <div className="InputSearchWrapper">
                        <a className="Link" ref=""></a>
                        <input 
                            className="InputSearch" 
                            type="text" 
                            placeholder="Type in here"
                            onChange = {(e) => {
                                
                                this.setState({SearchTerm: e.target.value });
                                
                                //the key is to use this function here, as the website or your text changes within your searcbar, make an api request to search for an article
                                this.props.onSubmit(e.target.value);
                                
                                    //Why is there a delay here? something you could ask Amber
                                    //When 
                                
                                
                                
                                
                                
                                
                                //Remember to remove this console.log later. The following code works!!
                                console.log(this.state.SearchTerm);
                                
                            }}
                            value={this.state.SearchTerm}
                        />
                        <span>HN Clone</span>
                        
                    </div>
                    
                    <a className="SettingsLink" ref=""></a>
                </div>
            );
    }
}

export default SearchBar;