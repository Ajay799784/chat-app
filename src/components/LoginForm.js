import React from "react";
import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "e9203466-d23d-40d0-a240-ee9c68994632",
      "User-Name": userName,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch {}
  };
  return (
    <div className="wraper">
      <div className="form">
        <h1 className="title">chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>start chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
