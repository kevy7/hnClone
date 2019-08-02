import React from 'react';
import Axios from 'axios';


import '../styles/Body.css';
import ListItemComponent from './ListItemComponent';

// class Body extends React.Component {
    
//     state = { 
        
//         searchResults: []
        
//     };
    


    
    
//     //We can access our list of articles with the following code
    
//     //var app = this.state.listOfArticles;
    
    
//     //We have a body, and we want to display up to ten "list" components 
    
//     render() {
//         return (
//                 <div className="Body">
//                     <ListItemComponent />
//                     <ListItemComponent />
                    
                    
                    
                    
//                 </div>
//             );
//     }
// }


const Body = (props) => {
    
    //Weird, I had to create this constant first and call it later for my code to work
    const articlesFound = props.articles.map((article) => {
        
        return <ListItemComponent 
                title={article.title}
                points={article.points}
                author={article.author}
                numOfComments={article.num_comments}
                url={article.url}
            />
        
    });
    
    
    return (
            <div className="Body">
                {articlesFound}
            </div>
        );
};


export default Body;
