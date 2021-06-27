import React from 'react';
import HornedBeasts from './HornedBeasts';
import '../App.css'

class Main extends React.Component {
    render() {
        return (
            <div>
                <HornedBeasts className='beastImage' title='Thor' imageUrl='https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2017/03/20/876286-366818302.jpg?itok=Qfv0UdK_' description='Blue Beast'/>

                <HornedBeasts className='beastImage' title='Goree' imageUrl='https://daily.jstor.org/wp-content/uploads/2021/04/king_kong_mole_rats_and_the_mark_of_the_beast_1050x700.jpg' description='Gorilla Beast'/>

            </div>
        )
    }
}

export default Main;