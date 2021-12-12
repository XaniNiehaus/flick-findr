import React, {useState} from 'react';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Button, ButtonGroup, Container, Form, FormControl, Nav, Navbar, ToggleButton} from "react-bootstrap";
import {getMoviesByIdOrTitle} from "../services";
import styled from "styled-components";

const StyledFavoriteButton = styled(Button)`
  margin-right: 14px;
`

const CustomNavbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const viewMode = useStoreState((state) => state.viewMode);
    const favoriteList = useStoreState((state) => state.favoriteList);
    const updateViewMode = useStoreActions((actions) => actions.updateViewMode);
    const updateSearchResults = useStoreActions((actions) => actions.updateSearchResults);

    const doSearch = async (e) => {
        e.preventDefault();
        let movies = await getMoviesByIdOrTitle(searchQuery);
        updateSearchResults(movies);
    }

    return (
        <Navbar bg="dark" variant={"dark"} expand="sm">
            <Container fluid>
                <Navbar.Brand>Flick Findr</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse>
                    <Nav className="me-auto my-2 my-lg-0">
                    </Nav>
                    <StyledFavoriteButton variant="primary" onClick={(e) => {
                        updateSearchResults(favoriteList);
                    }}>
                        Favorites
                    </StyledFavoriteButton>
                    <ButtonGroup>
                        <ToggleButton
                            id={0}
                            type="radio"
                            variant="primary"
                            value={"list"}
                            checked={!viewMode || viewMode === "list"}
                            onChange={(e) => {
                                updateViewMode(e.target.value)
                            }}
                        >
                            List View
                        </ToggleButton>
                        <ToggleButton
                            id={1}
                            type="radio"
                            variant="primary"
                            name="radio"
                            value={"card"}
                            checked={viewMode === "card"}
                            onChange={(e) => {
                                updateViewMode(e.target.value)
                            }}
                        >
                            Card View
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <Form className="d-flex" onSubmit={doSearch}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Button type="submit" variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
