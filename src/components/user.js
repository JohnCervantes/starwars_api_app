import React from "react";
import { Card } from "react-bootstrap";

function User(props) {
  const { user } = props;
  // const breakEmailDomain = (email) => {
  //     let [name, domain] = email.split("@")
  //     return (
  //         <React.Fragment>
  //             {name}
  //             <br />
  //             {'@' + domain}
  //         </React.Fragment>
  //     )
  // }
  return (
    <Card style={{ width: "200px" }}>
      <Card.Header style={{ fontSize: "22px", fontWeight: "bold" }}>
        {user.name}
      </Card.Header>
      <Card.Body style={{ padding: "20px" }}>
        <Card.Text style={{ fontSize: "16px" }}>
          <span style={{ fontWeight: "bold" }}>Height: </span>
          {user.height}
          <br />
          <span style={{ fontWeight: "bold" }}>Mass: </span>
          {user.mass}
          <br />
          <span style={{ fontWeight: "bold" }}>Hair Color: </span>
          {user.hair_color}
          <br />
          <span style={{ fontWeight: "bold" }}>Skin Color: </span>
          {user.skin_color}
          <br />
          <span style={{ fontWeight: "bold" }}>Eye Color: </span>
          {user.eye_color}
          <br />
          <span style={{ fontWeight: "bold" }}>Birthday: </span>
          {user.birth_year}
          <br />
          <span style={{ fontWeight: "bold" }}>Gender: </span>
          {user.gender}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default User;
