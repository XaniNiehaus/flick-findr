import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {useStoreState} from "easy-peasy";
import styled from "styled-components";
import MovieCard from "./MovieCard";

const StyledCardContainer = styled(Container)`
  max-width: 1500px;
  padding-bottom: 10px;
`
const StyledColumn = styled(Col)`
  display: flex;
  justify-content: center;
`;

const MovieCardsContainer = () => {
    const searchResults = useStoreState((state) => state.searchResults);

    return (
        <StyledCardContainer>
            <Row>
                {searchResults?.map(movie => {
                    return <StyledColumn key={movie.imdbID} xs={12} sm={6} md={6} lg={4} xl={3}>
                        <MovieCard movieData={movie}/>
                    </StyledColumn>
                })}
            </Row>
        </StyledCardContainer>
    );
};

export default MovieCardsContainer;
