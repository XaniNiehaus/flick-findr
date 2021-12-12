import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from "./components/CustomNavbar";
import {useStoreState} from "easy-peasy";
import MovieList from "./components/MovieList";
import MovieCardsContainer from "./components/MovieCardsContainer";
import MoreInfoDrawer from "./components/MoreInfoDrawer";


function App() {
    const viewMode = useStoreState((state) => state.viewMode);

    return (
        <div>
            <CustomNavbar/>
            <MoreInfoDrawer/>
            {(viewMode === "list") && <MovieList/>}
            {viewMode === "card" && <MovieCardsContainer/>}
        </div>
    );
}

export default App;
