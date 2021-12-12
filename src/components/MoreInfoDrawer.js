import React from 'react';
import {Button, Offcanvas} from "react-bootstrap";
import {useStoreActions, useStoreState} from "easy-peasy";

const MoreInfoDrawer = () => {
    const showMoreDrawer = useStoreState((state) => state.showMoreDrawer);
    const showMoreMovie = useStoreState((state) => state.showMoreMovie);
    const favoriteList = useStoreState((state) => state.favoriteList);
    const updateFavoriteList = useStoreActions((actions) => actions.updateFavoriteList);
    const updateShowMoreDrawer = useStoreActions((actions) => actions.updateShowMoreDrawer);

    const isFavorite = (favoriteList?.filter(movie => movie.imdbID === showMoreMovie.imdbID).length > 0);

    const onFavoriteButtonClicked = (e) => {
        if (isFavorite) {
            updateFavoriteList(favoriteList.filter(movie => movie.imdbID !== showMoreMovie.imdbID))
        } else {
            updateFavoriteList([...favoriteList, showMoreMovie]);
        }
        e.stopPropagation();
    }

    return (
        <Offcanvas show={showMoreDrawer} onHide={() => updateShowMoreDrawer(false)}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    {showMoreMovie?.Title}
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Year: {showMoreMovie?.Year}</p>
                <p>Type: {showMoreMovie?.Type}</p>
                <p>More Info...</p>
                <Button variant={isFavorite ? "danger" : "primary"} onClick={onFavoriteButtonClicked}>
                    {isFavorite ? "remove from favorites" : "add to favorites"}
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default MoreInfoDrawer;
