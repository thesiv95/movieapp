import React from 'react';

class Movie extends React.Component {
    render(){
        return (
            <div class="row">
                <div class="col-md-3 col-sm-3 col-xs-3">
                    <h4>Movie name</h4>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                    <p>Our rating</p>
                    <p><strong>5</strong></p>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                    <p><strong>4</strong></p>
                    <p>people</p>
                    <p>like</p>
                    <p><em>movie name</em></p>
                    <p>
                        <span class="thumbsup">👍</span>
                        <span class="tick">✔️</span>
                    </p>
                    <p class="content__thanks">Thanks! We got your vote.</p>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-3">
                    <h4>
                        <a href="https://www.imdb.com/title/tt0371746/">Visit IMDb page</a>
                    </h4>
                </div>
            </div>
        )
    }
}

export default Movie;