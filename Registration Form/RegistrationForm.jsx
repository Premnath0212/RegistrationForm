import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import "./RegistrationForm.css";
import UserTable from "./UserTable";

function RegistrationForm() {
  const initialUserState = {
    username: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    educationalBackground: "",
    codingLanguages: "",
    experienceLevel: "",
    reasonForParticipating: "",
    additionalInfo: "",
  };
  const [user, setUser] = useState(initialUserState);
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function store_data(event) {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedList = list.map((item,index)=> index === editIndex ? user:item);
      setList(updatedList);
      setEditIndex(null);
    } else {
      setList([...list, user]);
    }
    setUser(initialUserState);
  }
  function handleEdit(index) {
    setUser(list[index]);
    setEditIndex(index);
  }
  function handleDelete(index) {
    const updatedList = list.filter((_,i) => i !== index);
    setList(updatedList);
  }
  return (
    <>
      <h3>Registration Form</h3>
      <Form onSubmit={store_data}>
        <Form.Group>
          <Form.Label htmlFor="username">Username:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, username: event.target.value })}
            value={user.username}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="fullName">Full Name:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, fullName: event.target.value })}
            value={user.fullName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="address">Address:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, address: event.target.value })}
            value={user.address}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="phoneNumber">Phone Number:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, phoneNumber: event.target.value })}
            value={user.phoneNumber}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address:</Form.Label>
          <Form.Control
            type="email"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, email: event.target.value })}
            value={user.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="educationalBackground">Educational Background:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, educationalBackground: event.target.value })}
            value={user.educationalBackground}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="codingLanguages">Preferred Coding Language(s):</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, codingLanguages: event.target.value })}
            value={user.codingLanguages}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="experienceLevel">Experience Level:</Form.Label>
          <Form.Control
            as="select"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, experienceLevel: event.target.value })}
            value={user.experienceLevel}
          >
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="reasonForParticipating">Reason for Participating:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, reasonForParticipating: event.target.value })}
            value={user.reasonForParticipating}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="additionalInfo">Additional Information:</Form.Label>
          <Form.Control
            type="text"
            style={{ width: "300px" }}
            onChange={(event) => setUser({ ...user, additionalInfo: event.target.value })}
            value={user.additionalInfo}
          />
        </Form.Group>
        <br />
        <Form.Group>
          <Button variant="primary" type="submit">
            {editIndex !== null ? "Update" : "Submit"}
          </Button>
        </Form.Group>
      </Form>
      <br />
    
      <UserTable list={list} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

export default RegistrationForm;
