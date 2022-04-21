import React from 'react';
import "../style/Login.scss";

export default function Login(){


    return (
        <>
          <div className="login-container">
          <form>
                 <h2>Login</h2>
                <input id="email" type="text" className="field" placeholder="Email"/>
                 
                <input id="pwd" type="password" className="field" placeholder="Mot de passe"/>    
                <div className="btn-container">
                <input type="submit" value="Connexion" className="btn" />  
                <input type="submit" value="Inscription" className="btn" />
                </div>
            </form>
          </div>

         </>
    );
}