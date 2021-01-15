import React from "react";
import Avatar from "./Avatar";
import "./Profile.css";
import Navbar from "../components/Layout/Navbar";
import TextField from "@material-ui/core/TextField";
import Footer from "../components/Layout/Footer";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.localStorage = window.localStorage;
    const nickNameOk = this.localStorage.getItem("newNickName");
    const descriptionOK = this.localStorage.getItem("newDescription");
    this.state = {
      nickname: nickNameOk || "",
      description: descriptionOK || "",
    };
    this.changeNickName = this.changeNickName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }

  changeNickName(event) {
    const newNickName = event.target.value;
    this.localStorage.setItem("newNickName", newNickName);
    this.setState({
      nickname: newNickName,
    });
  }

  changeDescription(event) {
    const newDescription = event.target.value;
    this.localStorage.setItem("newDescription", newDescription);
    this.setState({
      description: newDescription,
    });
  }

  render() {
    const { nickname, description } = this.state;
    return (
      <div className="mainprofil">
        <Navbar />
        <h1>Profile</h1>
        <Avatar />
        <h2> {nickname} </h2>
        <p>{description}</p>

        <TextField
          for="nickname"
          id="outlined-basic-name"
          label="Pseudo"
          variant="outlined"
          color="default"
          onChange={this.changeNickName}
          className="pseudo"
        />
        <br></br>
        <br></br>

        <TextField
          for="description"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          color="default"
          onChange={this.changeDescription}
          className="description"
        />
        <p>“L’alcool est notre pire ennemi, fuir serait lâche !”</p>
        <Footer />
      </div>
    );
  }
}
export default Profile;
