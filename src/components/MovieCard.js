import React from 'react';
import styled from "styled-components";
import {Button, Card} from "react-bootstrap";
import {useStoreActions, useStoreState} from "easy-peasy";

const StyledCard = styled(Card)`
  margin: 10px 10px 0 10px;
  width: 300px;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.65) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 200ms;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.94) 0px 3px 8px;
  }
`

const StyledPoster = styled(Card.Img)`
  height: 400px;
`

const MovieCard = ({movieData}) => {
    const favoriteList = useStoreState((state) => state.favoriteList);
    const updateFavoriteList = useStoreActions((actions) => actions.updateFavoriteList);
    const updateShowMoreMovie = useStoreActions((actions) => actions.updateShowMoreMovie);
    const updateShowMoreDrawer = useStoreActions((actions) => actions.updateShowMoreDrawer);

    const isFavorite = (favoriteList?.filter(movie => movie.imdbID === movieData.imdbID).length > 0);

    const onFavoriteButtonClicked = (e) => {
        if (isFavorite) {
            updateFavoriteList(favoriteList.filter(movie => movie.imdbID !== movieData.imdbID))
        } else {
            updateFavoriteList([...favoriteList, movieData]);
        }
        e.stopPropagation();
    }

    return (
        <>
            <StyledCard onClick={() => {
                updateShowMoreDrawer(true);
                updateShowMoreMovie(movieData);
            }}>
                <StyledPoster variant="top" src={movieData?.Poster}/>
                <Card.Body>
                    <Card.Title>{movieData?.Title}</Card.Title>
                    <Card.Subtitle>
                        <h6>Year: {movieData?.Year}</h6>
                        <h6>Type: {movieData?.Type}</h6>
                        <Button variant={isFavorite ? "danger" : "primary"} onClick={onFavoriteButtonClicked}>
                            {isFavorite ? "remove from favorites" : "add to favorites"}
                        </Button>
                    </Card.Subtitle>
                </Card.Body>
            </StyledCard>
        </>
    );
};

export default MovieCard;
