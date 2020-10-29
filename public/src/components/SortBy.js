import {Component} from 'react';

export default class SortBy extends Component {

    render(){
        return (
            <div className="row header">
                <div className="col-md-12 col-sm-12 header__sort">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="sortBy">
                                Sort by...
                            </label>
                        </div>
                        <select className="custom-select" name="sort-by" id="sortBy">
                            <option value="name">Name</option>
                            <option value="rating">Rating</option>
                            <option value="created">Created</option>
                            <option value="thumbsUp">Thumbs up</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}