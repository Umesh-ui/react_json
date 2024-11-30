import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container, Form, FormField, Header } from "semantic-ui-react";
import { editStream } from "../redux/action";

const EditStream = () => {
  const location = useLocation();
  const stream = location?.state.stream;
  const [title, setTitle] = useState(stream.title);
  const [description, setDescription] = useState(stream.description);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditStream = (e) => {
    e.preventDefault();
    dispatch(editStream(stream.id, { title, description }, navigate));
  };

  return (
    <Container style={{ padding: "3rem" }}>
      <Form>
        <Header>Edit Stream </Header>
        <FormField>
          <label>Stream Title</label>
          <input
            placeholder="Stream Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormField>
        <FormField>
          <label>Stream Description</label>
          <input
            placeholder="Stream Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>

        <Button type="submit" color="primary" onClick={handleEditStream}>
          Submit
        </Button>
        <Button type="submit" color="grey" onClick={() => navigate(-1)}>
          Back
        </Button>
      </Form>
    </Container>
  );
};

export default EditStream;
