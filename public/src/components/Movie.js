import {Component} from 'react';

export default class Movie extends Component {

    render(){
        return (
            <div className="row">
                <input type="hidden" name='timestamp' value={this.props.timestamp} />
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <h4>{this.props.name}</h4>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <p>Our rating</p>
                    <p><strong>{this.props.ratingAdmin}</strong></p>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <p><strong>4</strong></p>
                    <p>people</p>
                    <p>like</p>
                    <p><em>{this.props.name}</em></p>
                    <p>
                        <span className={`thumbsup ${this.props.userStatus ? 'hide' : ''}`}>👍</span>
                        <span className={`tick ${this.props.userStatus ? 'hide' : ''}`}>✔️</span>
                    </p>
                    <p className="content__thanks">Thanks! We got your vote.</p>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <h4>
                        <a href={`https://www.imdb.com/title/${this.props.imdbUrl}`}>Visit IMDb page</a>
                    </h4>
                </div>
            </div>
        )
    }
}

