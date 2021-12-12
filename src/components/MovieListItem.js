import React from 'react';
import styled from "styled-components";
import {Button, Image} from "react-bootstrap";
import {useStoreActions, useStoreState} from "easy-peasy";

const StyledContainer = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 700px;

`

const StyledMovieContainer = styled.div`
  margin: 10px 10px 0px 10px;
  border-radius: 5px;
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.65) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: all 200ms;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.94) 0px 3px 8px;
  }
`

const StyledPoster = styled(Image)`
  height: 200px;
  max-width: 130px;
`

const StyledMovieInfo = styled.div`
  padding-top: 10px;
  width: 100%;
  margin-left: 10px;
`

const MovieListItem = ({movieData}) => {
    const favoriteList = useStoreState((state) => state.favoriteList);
    const updateShowMoreMovie = useStoreActions((actions) => actions.updateShowMoreMovie);
    const updateShowMoreDrawer = useStoreActions((actions) => actions.updateShowMoreDrawer);
    const updateFavoriteList = useStoreActions((actions) => actions.updateFavoriteList);

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
            <StyledContainer onClick={() => {
                console.log("movie list item clicked")
                updateShowMoreDrawer(true);
                updateShowMoreMovie(movieData);
            }} fluid>
                <StyledMovieContainer>
                    <StyledPoster src={movieData.Poster} rounded/>
                    <StyledMovieInfo>
                        <h2>{movieData.Title}</h2>
                        <h6>Year: {movieData.Year}</h6>
                        <h6>Type: {movieData.Type}</h6>
                        <Button variant={isFavorite ? "danger" : "primary"} onClick={onFavoriteButtonClicked}>
                            {isFavorite ? "remove from favorites" : "add to favorites"}
                        </Button>
                    </StyledMovieInfo>
                </StyledMovieContainer>
            </StyledContainer>
        </>

    );
};

export default MovieListItem;
