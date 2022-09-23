import React from 'react';

function Home() {
  return (
    <div>
      <SignInButton />
    </div>
    );
}
  

export default Home;

//Googleボタンでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    //firebaseを使ってGoogleでログインする
  };
  
  return (
    <button onClick = {signInWithGoogle}>
      <p>グーグルでサインイン</p>
    </button>
  );
}