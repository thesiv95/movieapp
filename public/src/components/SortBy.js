import {Component} from 'react';

export default class SortBy extends Component {

    render(){
        return (
            <div className="row header">
                <div className="col-md-2 col-sm-5">
                    <h3>Sorted by</h3>
                </div>
                <div className="col-md-10 col-sm-5">
                    <select name="sort-by" id="sort-by">
                        <option value="name">Name</option>
                        <option value="rating">Rating</option>
                        <option value="created">Created</option>
                        <option value="thumbsUp">Thumbs up</option>
                    </select>
                </div>
            </div>
        )
    }
}