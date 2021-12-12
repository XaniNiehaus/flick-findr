import {action, createStore} from "easy-peasy";

const store = createStore({
    searchResults: [],
    favoriteList: JSON.parse(localStorage.getItem("favoritesList")) || [],
    // favoriteList: [],
    viewMode: localStorage.getItem("viewMode") || "list",
    showMoreDrawer: false,
    showMoreMovie: {},
    updateSearchResults: action((state, payload) => {
        state.searchResults = (payload);
    }),
    updateFavoriteList: action((state, payload) => {
        localStorage.setItem("favoritesList", JSON.stringify(payload))
        console.log("list to store is");
        console.log(payload);
        console.log("stored fav list is");
        console.log(localStorage.getItem("favoritesList"));
        state.favoriteList = (payload);
    }),
    updateViewMode: action((state, payload) => {
        localStorage.setItem("viewMode", payload)
        state.viewMode = (payload);
    }),
    updateShowMoreDrawer: action((state, payload) => {
        state.showMoreDrawer = (payload);
    }),
    updateShowMoreMovie: action((state, payload) => {
        state.showMoreMovie = (payload);
    }),
});

export default store
