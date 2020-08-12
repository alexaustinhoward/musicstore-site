import React,{ Component} from 'react';
import './signup.style.scss';
import NavBar from '../../compontent/navbar/navbar.component';
import {signInWithGoogle, auth, createUserProfileDocument} from '../../firebase/firebase.util';
import MobileMenuItems from '../../compontent/mobilemenuitems/mobilemenuitems.component';

class SignupPage extends Component{
  constructor(){
    super();
    this.SigninTabClick = this.SigninTabClick.bind(this);
    this.SignupTabClick = this.SignupTabClick.bind(this);
    this.handleChange= this.handleChange.bind(this);
  this.state ={
        isSignupActive:false,
        displayName:'',
        email:'',
        password:'',
        confirmpassword:'',
        signinPassword:'',
        signinEmail:''

  };
}
handleChange(event){
    const {value,name}= event.target;

    this.setState({[name]:value})
}
    SigninTabClick() {
    this.setState({isSignupActive: true});
  }
    SignupTabClick() {
    this.setState({isSignupActive: false});
  }
  handleSubmitSignin =async event=>{
      event.preventDefault();
      const{displayName,email,password,confirmpassword} =this.state;
      if(password !== confirmpassword){
          alert("password dont match");
          return;}
          try{
              const{user}= await auth.createUserWithEmailAndPassword(email,password)
              createUserProfileDocument(user,{displayName});

          }
          catch (error){
              console.error(error);
          }
      };

  handleSubmitSignup =async event=>{
    event.preventDefault();
    const{ signinEmail,signinPassword} =this.state;
    try { 
        await auth.signInWithEmailAndPassword(signinEmail,signinPassword);
    this.setState({signinEmail:'',signinPassword:''});
}
catch (error){
    console.log(error);
}
  };

    render() {
        const isSignupActive= this.state.isSignupActive;
        const{displayName,email,password,confirmpassword,signinEmail,signinPassword} =this.state;
        return(
        <div className='SignupPage'>
                <NavBar/>
                <MobileMenuItems/>
            <div className='signareawrapper'>
            <div className='signarea'>
                    <div className='tabs'>
                     <div className='signintab' onClick={this.SigninTabClick} 
                        style={  isSignupActive ? 
                        {borderBottom: '0.25em solid rgba(139, 197, 214,0.5)'}
                         : {borderBottom: '0.0em solid rgba(139, 197, 214,0.5)'}  
                         }>Sign In</div>
                     <div className='signuptab'onClick={this.SignupTabClick}
                     style={  isSignupActive ? 
                        {borderBottom: '0.0em solid rgba(139, 197, 214,0.5)'}
                         : {borderBottom: '0.25em solid rgba(139, 197, 214,0.5)'}  
                         }
                    >Sign Up</div>
                </div>
                <div className='SignupPageContainer'>
                 <form className='signinarea' onSubmit={this.handleSubmitSignup} style={ { display: isSignupActive ? 'block' : 'none' } }>
                   <div className='emailareasi'>
                        <label>Email:</label>
                         <input type="text" name="signinEmail" value={signinEmail} onChange={this.handleChange}/>
                    </div>
                    <div className='passwordareasi'>
                        <label>Password:</label>
                        <input type="password" name="signinPassword"value={signinPassword} onChange={this.handleChange}/>
                    </div>
                    <div className='buttonsectionsi'>
                        <button className="btn" type="submit" >Login</button>
                        <button className="btn" type="button" onClick={signInWithGoogle}>Login With google</button>
                    </div>
                </form>
                <form className='signuparea' onSubmit={this.handleSubmitSignin} style={ { display: isSignupActive ? 'none' : 'block'  } } >
                    <div className='displayNameArea'>
                        <label>displayName:</label>
                        <input type="text" name="displayName" value={displayName} onChange={this.handleChange}/>
                    </div>
                    <div className='passwordareasu'>
                        <label>Password:</label>
                        <input type="password" name="password" value={password} onChange={this.handleChange}/>
                    </div>
                    <div className='retypepasswordareasu'>
                        <label>Retype Password:</label>
                        <input type="password" name="confirmpassword" value={confirmpassword} onChange={this.handleChange}/>
                    </div>
                    <div className='emailareasu'>
                        <label>Email:</label>
                        <input type="email" name="email" value={email} onChange={this.handleChange}/>
                    </div>
                    <div className='buttonsectionsu'>
                        <button className="btn" type="submit" >submit</button>
                    </div>
                
                </form>
                </div>
            </div>
            </div>
         </div>
            );
 }
}
export default SignupPage;