import React from 'react';
import './SignUp.css'
import joker from './images/joker.jpg'



class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className='container'>
                    
                       <img className='joker1' src={joker}></img>
                       <img className='joker2' src={joker}></img>

                    
               
                    <h1 className='signTitle'>SignUp</h1>
                    <form>
                        <label className='labelTitle'>NICKNAME:</label><br/>
                        <input type='text' className='input'></input><br/><br/>
                        <label className='labelTitle'>PASSWORD:</label><br/>
                        <input type='password' className='input'></input><br/><br/>
                        <div className='signIn'>
                            <div>
                                <p>Already member?</p>
                                <a href='#'>Sign in</a>
                            </div>
                            <input className='button' type="submit" value="Submit" />
                        </div>
                    </form>
            </div>

            
        )
    }


}




export default SignUp