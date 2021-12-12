// const getMoviesByIdOrTitle = (query) => {
//     return fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${query}&r=json&type=movie`, {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
//             "x-rapidapi-key": "79becb696dmsh4b18b86bb876272p1d62d7jsn943b93db9b66"
//         }
//     }).then(response => {
//         console.log("unfilted response");
//         console.log(response);
//         response.json().then((resJson) => {
//             console.log("data returned from api")
//             console.log(resJson);
//             let filteredList = resJson.results.filter(res => {
//                return res.titleType === "movie";
//             });
//             console.log("filtered list in services");
//             console.log(filteredList);
//         }).catch(err => {
//             console.log(err)
//         });
//     }).catch(err => {
//         console.error(err);
//     });
// }
const getMoviesByIdOrTitle = (query) => {
    return fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?s=${query}&r=json&type=movie`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key": "79becb696dmsh4b18b86bb876272p1d62d7jsn943b93db9b66"
        }
    })
        .then(response => {
            return response.json().then(data => {
                return (data.Search);
            });
        })
        .catch(err => {
            console.error(err);
        });
}
export {getMoviesByIdOrTitle}
