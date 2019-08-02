import React from 'react';
import Axios from 'axios';

import '../styles/App.css';
import Body from './Body'


//We're going to import a bunch of React Components below
import SearchBar from './SearchBar';


class App extends React.Component {
    state = {
        Articles: []
    }
    
    
    searchForArticles = async (SearchTerm) => {
        //https://hn.algolia.com/api/v1/search?query=foo&tags=story
        /*
            The following url above is what we're using to make api requests to Axios
        
        */
            
            const Response = await Axios.get('https://hn.algolia.com/api/v1/search', {
                //Paramaters are passed down in here
                //Parameters and header information is passed down in here
                params: {
                    query: SearchTerm,
                    tags: 'story'
                }
            });
            
            
            //Response can now be used down here
           // Response.data.results this will give us our results
           
           this.setState({
               Articles: Response.data.hits
           });
           
           
           console.log(Response.data.hits);
    }
    
    
    
    
    render() {
        
        const articlesData = this.state.Articles;
        
        return (
                <div className="Container">
                    <SearchBar onSubmit={this.searchForArticles}/>
                    
                    <Body articles={articlesData} />
                
                
                </div>
            );
    }
}

export default App;




/*
    
    What to do next: Our api actually works. We can take what the user wrote in our searchbar and then run an api based on their search term and return
        a list of articles from the hn website. The list of articles will be stored and is succesfully stored in our 'Articles' variable

*/