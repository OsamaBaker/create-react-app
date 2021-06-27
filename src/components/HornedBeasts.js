import React from 'react';
import '../App.css'


class HornedBeasts extends React.Component {
    render() {
        return(
            <div>
                <p className='title'>Title: {this.props.title}</p>
                <img className='beastImage' src={this.props.imageUrl} alt='hello'></img>
                <p className='description'>Description: {this.props.description}</p>
            </div>
        )
    }
}

export default HornedBeasts;