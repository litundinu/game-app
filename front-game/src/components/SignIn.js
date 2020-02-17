import React from 'react';
import './SignIn.css'
import joker from './images/joker.jpg'



class SignIn extends React.Component {
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

                    
               
                    <h1 className='signInTitle'>Sign in</h1>
                    <form>
                        <label className='labelTitle'>NICKNAME:</label><br/>
                        <input type='text' className='input'></input><br/><br/>
                        <label className='labelTitle'>PASSWORD:</label><br/>
                        <input type='password' className='input'></input><br/><br/>
                        <div className='signIn'>
                            <div>
                                <p>Not a member yet?</p>
                                <a href='#'>Sign up</a>
                            </div>
                            <input className='button' type="submit" value="Submit" />
                        </div>
                    </form>
            </div>

            
        )
    }


}




export default SignIn