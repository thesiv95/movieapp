import {Component} from 'react';
import axios from 'axios';

export default class Movie extends Component {

    vote(id){
      axios.post(`http://localhost:9000/updateUserStatus?id=${id}&status=1`)
        .then(() => {
            let msgBox = document.querySelector('#thanksMessage');
            msgBox.classList.remove('hidden');
            setTimeout(() => {
                msgBox.classList.add('hidden');
            }, 3000);
            document.querySelector('.thumbsup').classList.add('hidden');
            document.querySelector('.tick').classList.remove('hidden');
        })
        .catch(() => {global.alert('Sorry, there was an error in voting.')});

        axios.post(`http://localhost:9000/updateUserRating?id=${id}`)
        .catch(() => {global.alert('Sorry, there was an error in voting (again).')});
    }

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
                    <p onClick={this.vote && this.props.id ? this.vote(this.props.id) : ''}>
                        <span className={`thumbsup ${this.props.userStatus ? 'hidden' : ''}`}>👍</span>
                        <span className={`tick ${this.props.userStatus ? '' : 'hidden'}`}>✔️</span>
                    </p>
                    <p id="thanksMessage" className="content__thanks hidden">Thanks! We got your vote.</p>
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                    <h4>
                        <a href={`https://www.imdb.com/title/${this.props.imdbUrl}`} target="_blank" rel="noopener noreferrer">Visit IMDb page</a>
                    </h4>
                </div>
            </div>
        )
    }
}

