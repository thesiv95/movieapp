import {Component, Fragment} from 'react';
import Movie from './Movie';
import SortBy from './SortBy';

export default class MainPage extends Component {
    
    render(){
        return (
            <Fragment>
                <SortBy />
                <div className="content">
                    {
                        this.props.data.map(item => 
                        // key - is the React attribute, not a component one!
                        <Movie 
                        key={item.id} 
                        name={item.name}
                        imdbUrl={item.imdb_url}
                        ratingAdmin={item.rating_admin}
                        ratingUser={item.rating_user}
                        userStatus={item.user_likes}
                        timestamp={item.timestamp} />)
                    }
                
                </div>
            </Fragment>

        )
    }
}