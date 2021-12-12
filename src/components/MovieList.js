import React, {useState} from 'react';
import styled from "styled-components";
import {useStoreState} from "easy-peasy";
import MovieListItem from "./MovieListItem";
import MoreInfoDrawer from "./MoreInfoDrawer";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
`;

const MovieList = () => {
    const searchResults = useStoreState((state) => state.searchResults);
    const [showMoreInfo, setShowMoreInfo] = useState(false);

    return (
        <ListContainer>
            <MoreInfoDrawer show={showMoreInfo} onHide={() => setShowMoreInfo(false)}/>
            {searchResults?.length === 0 && <p>no flicks found</p>}
            {searchResults?.map(movie => <MovieListItem key={movie.imdbID} movieData={movie}/>)}
        </ListContainer>
    );
};

export default MovieList;
