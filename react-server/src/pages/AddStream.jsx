import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStream } from "../redux/action";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, FormField, Header } from "semantic-ui-react";

const AddStream = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddStream = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addStream({ title, description }));
      navigate(-1);
    }
  };

  return (
    <Container style={{ padding: "3rem" }}>
      <Form>
        <Header>Create Stream </Header>
        <FormField>
          <label>Stream Title</label>
          <input
            placeholder="Stream Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <label>Stream Description</label>
          <input
            placeholder="Stream Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormField>

        <Button type="submit" color="primary" onClick={handleAddStream}>
          Submit
        </Button>
        <Button type="submit" color="grey" onClick={()=>navigate(-1)}>
          Back
        </Button>
      </Form>
    </Container>
  );
};

export default AddStream;
