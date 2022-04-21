import React from 'react';
import "../style/Login.scss";

export default function Login(){


    return (
        <>
          <div className="login-container">
          <form>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" className="field" placeholder="Email"/>
                <label htmlFor="pwd">Mot de passe</label>
                <input id="pwd" type="password" className="field" placeholder="Mot de passe"/>    
                <input type="submit" value="Connexion" className="btn" />  <input type="submit" value="Inscription" className="btn" />
       
            </form>
          </div>

         </>
    );
}