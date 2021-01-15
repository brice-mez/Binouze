import React, { Component } from 'react';
import './Avatar.css';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const avatar = this.localStorage.getItem('Avatar');
    this.state = {
      picture:
        avatar ||
        'https://prd-cam-website-statics.s3.eu-west-1.amazonaws.com/content/uploads/2019/07/seagull-4143142640-640x422.jpg',
    };
  }

  render() {
    const { picture } = this.state;
    this.localStorage.setItem('Avatar', picture);
    return (
      <div>
        <div>
          <figure
            onClick={(event) => {
              const newImage = prompt("Insère l'url de ton image de profil");
              this.setState({ picture: newImage });
            }}
          >
            <img alt='Avatar' src={picture} className='Circle' />
          </figure>
        </div>
      </div>
    );
  }
}

export default Avatar;
