import nameCard from "../assets/4089547.jpg";
import { useSelector } from "react-redux";

function Movie({ movieData }) {
  const searchKeyword = useSelector((state) => state.keyword);
  return (
    <div class="container">
      {searchKeyword ? (
        <h1 class="my-3 text-primary">Show result for {searchKeyword}</h1>
      ) : (
        <h1 class="my-3 text-primary">
          Show your favorite movie! {searchKeyword}
        </h1>
      )}
      <div class="row">
        {movieData ? (
          movieData.map((item) => (
            <div class="col-3 p-3" key={item.imdbID}>
              <div class="card">
                <img
                  src={item.Poster !== "N/A" ? item.Poster : nameCard}
                  class="card-img-top"
                  style={
                    item.Poster !== "N/A"
                      ? { height: "200px", objectFit: "none" }
                      : { height: "200px" }
                  }
                  alt="..."
                />
                <div class="card-body">
                  <p class="card-text text-center">{item.Title}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <p>
              Oops! Something's not right with {searchKeyword}. Wanna try
              another one?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;
