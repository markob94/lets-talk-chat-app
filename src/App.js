// Import necessary components and styles
import "./App.css";
import React, { useState, useEffect } from "react";
import Messages from './components/Messages/Messages';
import Input from './components/Input/Input';
import MainHeader from "./components/Header/Header";

// Generate a random username and color
const coolNames = [
  'Maverick',
  'Phoenix',
  'Valkyrie',
  'Siren',
  'Saber',
  'Ghost',
  'Reaper',
  'Shadow',
  'Raven',
  'Onyx',
];

const darkColors = [
  '#f72585',
  '#a51c30',
  '#cc5803',
  '#214e34',
  '#540d6e',
  '#fd151b',
];

function randomName() {
  const adjective = coolNames[Math.floor(Math.random() * coolNames.length)];
  const noun = coolNames[Math.floor(Math.random() * coolNames.length)];
  return `${adjective} ${noun}`;
}

function randomColor() {
  return darkColors[Math.floor(Math.random() * darkColors.length)];
}

// Define the chat room ID
const channelId = "6XqOm4jEndD5yyQ7";

// Define the main app component
function App() {
  // Define state variables for messages, current user, and the chat room connection
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({ username: randomName(), color: randomColor() });
  const [drone, setDrone] = useState();

  // Set up the chat room connection and message subscription when the component mounts
  useEffect(() => {
    const drone = new window.Scaledrone(channelId, { data: member });
    setMember(prevMember => ({ ...prevMember, id: drone.id }));
    setDrone(drone);
    const room = drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      setMessages(prevMessages => [...prevMessages, { text: data, member: member.clientData }]);
    });
  }, []);

  // Define the function for sending a message
  const onSendMessage = message => {
    drone.publish({ room: "observable-room", message });
  };

  // Render the chat room
  return (
    <>
      <header> 
          <MainHeader />
        </header>
      <div className="App">
        <Messages messages={messages} currentMember={member} />
              </div>

              <div className="App-input"><Input onSendMessage={onSendMessage} /></div>
    </>
  );
}

// Export the main app component
export default App;
