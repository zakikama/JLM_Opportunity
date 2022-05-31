
import "../Login/style.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../assets/logo_JLM_op_W.png"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import fire from "../fire";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc, getFirestore,getDocs,collection } from "firebase/firestore";
import App from "../../App";


const auth = getAuth();
const db = getFirestore(fire);
// const user = auth.currentUser;



function Login() {
	const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [age, setage] = useState("");
  const [ville, setville] = useState("");
  const [tel, settel] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [user, setuser] = useState();
  const [errormsg, seterrormsg] = useState("");
  const [hasaacount, sethasaacount] = useState(true);


  onAuthStateChanged(auth, (currentUser) => {
    setuser(currentUser);
  });

  

  function Login() {
	
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        setuser(userCredential.user);

      })
      .catch((error) => {
        const errorCode = error.code;
        seterrormsg(error.message);
      });
  }

  function Logout(){
    signOut(auth);
  }

  function Register() {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        setuser(userCredential.user);
        setDoc(doc(db, "Users", email), {
          Email: email,
          Nom: nom,
          Prenom: prenom,
          Age: age,
          Ville: ville,
          Tel: tel,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        seterrormsg(error.message);
      });
  }

  async function getdata(){
    const querySnapshot = await getDocs(collection(db, "Users"));
    querySnapshot.forEach((doc) => {
    setnom(doc.data().Nom);
    setprenom(doc.data().Prenom);
    setage(doc.data().Age);
    setville(doc.data().Ville);
    settel(doc.data().Tel);
    });
  }

  function noaccount() {
    if (hasaacount) {
      sethasaacount(false);
    } else {
      sethasaacount(true);
    }
  }
  
  useEffect(() => {
    console.log(user);
    getdata();
  }, [user]);
	
     document.addEventListener('readystatechange', function() {
        if (document.readyState === "complete") {
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');
            
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });
            
            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });
        }
    }); 

  return (

<div className='LoginPage' >
<div class="container" id="container" style={{width:'50vw'}}>
	<div class="form-container sign-up-container">
		<form action="#/landing">
			<h1>Create Account</h1>
			<div class="social-container">
				<a href="#" class="social"><FacebookIcon/></a>
				<a href="#" class="social"><GoogleIcon/></a>
				<a href="#" class="social"><LinkedInIcon/></a>
			</div>
			<span>or use your email for registration</span>
			<input type="text" value={prenom}
                  onChange={(e) => {
                    setprenom(e.target.value);
                  }}
                  required
                  placeholder="Prenom" />
			<input  type="number "
                  value={age}
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                  required
                  placeholder="Age"/>
			<input type="text "
                  value={ville}
                  onChange={(e) => {
                    setville(e.target.value);
                  }}
                  required
                  placeholder="Ville" />
			<input type="email" placeholder="Email"  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required />
			<input type="password" placeholder="Password"  value={pass}
                  minLength={8}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                  required/>
			<input  type="number"
                  value={tel}
                  onChange={(e) => {
                    settel(e.target.value);
                  }}
                  required
                  placeholder="Telephone"/>
			<button onClick={Register} >Sign Up</button>
			{errormsg}

		</form>
	</div>
	<div class="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			<div class="social-container">
			<a href="#" class="social"><FacebookIcon/></a>
				<a href="#" class="social"><GoogleIcon/></a>
				<a href="#" class="social"><LinkedInIcon/></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email"   value={email}
                    onChange={(e) => {
                      setemail(e.target.value);}}/>
			<input type="password" placeholder="Password"   value={pass}
                    minLength={8}
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                    required />
			<a onClick={noaccount}>Forgot your password?</a>
			<button onClick={Login}>Sign In</button>
			{errormsg}
		</form>

	</div>
    
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<img className='logo_signup' src={logo} alt="logo JLM opportunity"></img>
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>
</div>


  )
}

export default Login