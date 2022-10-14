import React from "react";

const UserGreeting = (props) => {
  return (
    <div className=" flex justify-center font-black bg-yellow-300/60 text-black text-center">
      <h1>You're Bored again?! So are we, find your next activity! </h1>
    </div>
  );
};

const GenericGreeting = (props) => {
  return (
    <div className=" flex justify-center font-black bg-yellow-300/60 text-black text-center">
      <h1>We know you're bored! Click the Signup button!</h1>
    </div>
  );
};

const Greeting = (props) => {
  const LoggedIn = props.LoggedIn;
  if (LoggedIn) {
    return <UserGreeting />;
  } else {
    return <GenericGreeting />;
  }
};

export default Greeting;
