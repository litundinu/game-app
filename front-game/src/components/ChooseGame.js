import React from 'react';
import './ChooseGame.css';
import cards from './images/game.png'

const ChooseGame = () => {

    return(
        <div className='gamesContainer'>
            <div className='gameTitles'>
                <h2 className='amount'>You&nbsp;have&nbsp;100$</h2>
               
                <h2 className='signOut'><a href='#'>Sign&nbsp;out</a></h2>
            </div>
            <div className='cardsContainer'>
                <h1 className='chooseTitle'>
                    Player&nbsp;Dinu <br/>
                    Choose&nbsp;your&nbsp;Game:
                </h1>
                <img className='cardsImg' src={cards}></img>
                <div className='priceContainer'>
                    <div className='prices'>
                        <h1 className='gameType'><a href='#'>2&nbsp;from&nbsp;5</a></h1>
                        <h2>Price:&nbsp;15&nbsp;$</h2>
                    </div>
                    <div className='prices'>
                        <h1 className='gameType'><a href='#'>3&nbsp;from&nbsp;5</a></h1>
                        <h2>Price:&nbsp;20&nbsp;$</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseGame