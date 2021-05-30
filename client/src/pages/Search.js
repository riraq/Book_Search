import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState({})
  const [formObject, setFormObject] = useState({})

  // // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadBooks()
  // }, [])

  // // Loads all books and sets them to books
  // function loadBooks() {
  //   API.getBooks()
  //     .then(res =>
  //       setBooks(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };

  // // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then(res => loadBooks())
  //     .catch(err => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title) {
      API.searchBooks(formObject.title)
        .then(res => {
          setBooks(res.data.items.map(book => (
            {
              "id": book.id,
              "title": book.volumeInfo.title,
              "author": book.volumeInfo.authors,
              "description": book.volumeInfo.description || "",
              "image": book.volumeInfo.imageLinks.thumbnail,
              "link": book.volumeInfo.infoLink
            }
          )))
        })
        .catch(err => console.log(err));
    }
  };

  function handleBookSave(event) {
    event.preventDefault();
    const bookValues = event.target.attributes
    console.log("bookValues: ", bookValues)
    API.saveBook({
      id: bookValues.id.value,
      title: bookValues.title.value,
      author: bookValues.author.value,
      description: bookValues.description.value,
      image: bookValues.image.value,
      link: bookValues.link.value
    })
    .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Books Search (React)</h1>
            <h3>Search for and Save books</h3>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Search for a Book"
            />
            <FormBtn
              disabled={!(formObject.title)}
              onClick={handleFormSubmit}
            >
              Search
            </FormBtn>
          </form>
          {books.length ?
            (<List>
            {books.map(book => (
              <ListItem
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
                image={book.image}
                link={book.link}
                onClick={handleBookSave}
                >Save</ListItem>
                ))}
          </List>
          ) : (
            <div></div>
          )
        }
        </Col>
      </Row>
    </Container>
  );
}


export default Search;
