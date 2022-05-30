import React, { useEffect, useState } from "react";
import fire from "../fire";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { doc, setDoc, getFirestore,getDocs,collection } from "firebase/firestore";
import { Form, Button } from "react-bootstrap";

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

  return (
    <div>
      <div>
        {/* User connecter? */}
        {user ? (
          <Form>
            <p>{user.email} est connecter</p>
            <p>INFOS</p>
            <p>Nom: {nom} Prenom: {prenom}</p>
            <p>Age: {age}</p>
            <p>Ville: {ville}</p>
            <p>Numero telephone: {tel}</p>
            <br></br>
            <Button variant="danger btn-block" onClick={getdata}>Log OUT</Button>
          </Form>
        ) : (
          <div>
            {/* User a un compte? */}
            {hasaacount ? (
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    autoFocus
                    required
                    placeholder="Adresse email"
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    value={pass}
                    minLength={8}
                    onChange={(e) => {
                      setpass(e.target.value);
                    }}
                    required
                    placeholder="Mot de passe"
                  />
                </Form.Group>
                {errormsg}
                <Button  onClick={Login}>
                  Se connecter
                </Button>
                <b onClick={noaccount}>
                  <small className="reset">
                    Vous n'avez pas de compte ? Clické ici
                  </small>
                </b>
              </Form>
            ) : (
              <Form>
                <Form.Control
                  type="text"
                  value={nom}
                  onChange={(e) => {
                    setnom(e.target.value);
                  }}
                  required
                  placeholder="Nom"
                ></Form.Control>
                <Form.Control
                  type="text"
                  value={prenom}
                  onChange={(e) => {
                    setprenom(e.target.value);
                  }}
                  required
                  placeholder="Prenom"
                ></Form.Control>
                <Form.Control
                  type="number "
                  value={age}
                  onChange={(e) => {
                    setage(e.target.value);
                  }}
                  required
                  placeholder="Age"
                ></Form.Control>
                <Form.Control
                  type="text "
                  value={ville}
                  onChange={(e) => {
                    setville(e.target.value);
                  }}
                  required
                  placeholder="Ville"
                ></Form.Control>
                <Form.Control
                  type="text"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  required
                  placeholder="Email"
                ></Form.Control>
                <Form.Control
                  type="password"
                  value={pass}
                  minLength={8}
                  onChange={(e) => {
                    setpass(e.target.value);
                  }}
                  required
                  placeholder="Password"
                ></Form.Control>
                <Form.Control
                  type="number"
                  value={tel}
                  onChange={(e) => {
                    settel(e.target.value);
                  }}
                  required
                  placeholder="Telephone"
                ></Form.Control>
                {errormsg}
                <Button variant="danger btn-block" onClick={Register}>
                  Creer le Compte
                </Button>
                <b onClick={noaccount}>
                  <small className="reset">
                    Vous avez deja un compte ? Clické ici
                  </small>
                </b>
              </Form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
