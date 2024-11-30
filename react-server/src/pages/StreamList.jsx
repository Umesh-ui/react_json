import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteStream, getStreams } from "../redux/action";
import {
  Button,
  Container,
  Header,
  List,
  ListContent,
  ListDescription,
  ListHeader,
  ListIcon,
  ListItem,
  Loader,
  Segment,
} from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const StreamList = () => {
  const dispatch = useDispatch();
  const { streamList, loading } = useSelector((state) => state.stream);

  const navigate = useNavigate();
  // Fetch streams on component mount
  useEffect(() => {
    dispatch(getStreams());
  }, [dispatch]);

  // Handle deleting a stream
  const handleDelete = (id) => {
    dispatch(deleteStream(id));
  };

  const handleEditStream = (stream) => {
    navigate(`/edit/${stream.id}`, { state: { stream } });
  };
  const handleCreateStream = () => {
    navigate("/add");
  };

  if (loading) return <Loader active size="massive" />;

  return (
    <Container style={{ paddingTop: "3rem" }}>
      <Header size="huge" style={{ textAlign: "center" }}>
        Streams
      </Header>
      <List divided>
        {streamList.length > 0
          ? streamList.map((stream) => (
              <Segment>
                <ListItem key={stream.id}>
                  <ListContent
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <ListIcon
                        name="bookmark outline"
                        size="large"
                        verticalAlign="middle"
                      />
                      <div>
                        <ListHeader>{stream.title}</ListHeader>
                        <ListDescription>{stream.description}</ListDescription>
                      </div>
                    </div>
                    <div>
                      <Button
                        color="primary"
                        onClick={() => handleEditStream(stream)}
                      >
                        {" "}
                        Edit{" "}
                      </Button>
                      <Button
                        color="red"
                        style={{ marginTop: "2rem" }}
                        onClick={() => handleDelete(stream.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </ListContent>
                </ListItem>
              </Segment>
            ))
          : <Header size="small"> No Streams Available </Header>}
      </List>
      <Button onClick={handleCreateStream} color="green">
        Create Steam
      </Button>
    </Container>
  );
};

export default StreamList;
