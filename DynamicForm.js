import {React,useState} from 'react'
import './DynamicForm.css';

export default function DynamicForm() {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    
    const[nameMessage,setNameMessage] = useState("");
    const[emailMessage,setEmailMessage] = useState("");
    const[passwordMessage,setPasswordMessage] = useState("");

    const[nameColor,setNameColor] = useState("purple");
    const[emailColor,setEmailColor] = useState("purple");
    const[passwordColor,setPasswordColor] = useState("purple");

    const handleName = (e) => {
        const val = e.target.value;
        setName(val);
        if(val === ""){
            setNameColor("red");
            setNameMessage("Please fill the column");
        }
        else if(val !== ""){
            setNameColor("purple");
            setNameMessage("");
        }
    }
    const handleEmail = (e) => {
        const val = e.target.value;
        setEmail(val);
        if(val === ""){
            setEmailColor("red");
            setEmailMessage("Enter valid email")
        }
        else if(val !== ""){
            setEmailColor("purple");
            setEmailMessage("");
        }
    }
    const handlePassword = (event) => {
        const val = event.target.value;
        setPassword(val);

        if (val === "") {
            setPasswordColor("red");
            setPasswordMessage("Please enter your Password");
        }
        else if (passwordValidate(val) === 1) {
            setPasswordColor("red");
            setPasswordMessage("Weak");
        }
        else if (passwordValidate(val) === 2) {
            setPasswordColor("orange");
            setPasswordMessage("Good");
        }
        else if (passwordValidate(val) === 3) {
            setPasswordColor("lightgreen");
            setPasswordMessage("Strong");
        }
        else if (passwordValidate(val) === 4 && val.length >= 8) {
            setPasswordColor("green");
            setPasswordMessage("Very Strong");
        }

    }
    const passwordValidate = (pass) => {
        let strength = 0;

        if (pass.match(/(?=.*[a-z])/)) {
            strength++;
        }

        if (pass.match(/(?=.*[A-Z])/)) {
            strength++;
        }

        if (pass.match(/(?=.*[0-9])/)) {
            strength++;
        }

        if (pass.match(/(?=.*[!@#\$%\^&\*])/)) {
            strength++;
        }

        return strength;
    }


  return (
    <div className='main'>
    <div className="container">
      <form>
        <label htmlFor="name">Enter your username</label>
        <input
          type="text"
          name="user"
          placeholder="Your Username"
          id="name"
          value={name}
          className={nameColor}
          onChange={handleName}
        />
        <label id="message">{nameMessage}</label>
        <br />
        <br />

        <label htmlFor="email">Enter your email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          id="email"
          value={email}
          className={emailColor}
          onChange={handleEmail}
        />
        <label id="message">{emailMessage}</label>
        <br />
        <br />

        <label htmlFor="password">Enter your password</label>
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          id="password"
          value={password}
          className={passwordColor}
          onChange={handlePassword}
        />
        <label id="message" style={{ color: passwordColor }}>
          {passwordMessage}
        </label>
      </form>
    </div>
    </div>
  );
}



