import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List"

function Saved(props) {
  const [book, setBook] = useState({})

  // When this component mounts, grab the book with the _id of props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getBooks()
      .then(res => setBook(res.data))
      .catch(err => console.log(err));
  }, [])

  function handleBookDelete(id) {
    API.deleteBook(id)
    .then(
      API.getBooks()
      .then(res => setBook(res.data))
      .catch(err => console.log(err))
    )
  }

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Saved Results
              </h1>
            </Jumbotron>
          </Col>
        </Row>
          <Col size="md-12 md-offset-1">
          {book.length ?
            (<List>
            {book.map(book => (
              <ListItem
                key={book._id}
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
                image={book.image}
                link={book.link}
                onClick={() => handleBookDelete(book.id)}
              >Delete</ListItem>
            ))}
          </List>
          ) : (
            <div></div>
          )
        }
          </Col>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Saved;
