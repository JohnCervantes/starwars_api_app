import React from "react";
import { Container, Button } from "react-bootstrap";
import User from "./user";
import axios from "axios";

class Users extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userList: [],
      currentPage: 1
    };
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people/?page=1").then(data => {
      const parsed = JSON.parse(JSON.stringify(data.data.results));
      console.log(parsed);
      this.setState({ userList: parsed });
    });
  }

  getNewData(dir) {
    let { currentPage } = this.state;
    if (dir === "next") {
      currentPage++;
    } else if (dir === "prev" && currentPage > 1) {
      currentPage--;
    }
    axios.get("https://swapi.co/api/people/?page=" + currentPage).then(data => {
      const parsed = JSON.parse(JSON.stringify(data.data.results));
      this.setState({ userList: parsed, currentPage: currentPage });
    });
  }

  render() {
    return (
      <div>
        <Container
          style={{
            display: "flex",
            width: "75%",
            justifyContent: "flex-start",
            flexWrap: "wrap"
          }}
        >
          {this.state.userList &&
            this.state.userList.map(user => {
              return <User user={user} />;
            })}
        </Container>
        <br />
        <Button onClick={() => this.getNewData("prev")}> Previous </Button>
        <Button onClick={() => this.getNewData("next")}> Next </Button>
      </div>
    );
  }
}

export default Users;
