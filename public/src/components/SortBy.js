import React from 'react';

export default class SortBy extends React.Component {
    render(){
        return (
            <div class="row header">
                <div class="col-md-2 col-sm-5">
                    <h3>Sorted by</h3>
                </div>
                <div class="col-md-10 col-sm-5">
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