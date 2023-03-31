"use server";
// Used for clien based stuff, clicks etc

import Movie from "./components/Movie";

import Banner from "./components/Banner";
import { AllMovies } from "./components/AllMovies";
export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&include_video=true&with_genres=28&page=4`,
    { next: { revalidate: 60 } }
  );
  const res = await data.json();

  const popular = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&include_video=true`,
    { next: { revalidate: 60 } }
  );
  const popularRes = await popular.json();
  // const handleScroll = (e) => {
  //   console.log(e);
  // };
  return (
    <div>
      <Banner />
      <main className="mt-20">
        <div className="grid gap-16 grid-cols-fluid">
          <section className="upcoming">
            <div className="container">
              <div className="flex-wrapper" style={{ marginTop: "3rem" }}>
                <div className="title-wrapper">
                  <p className="section-subtitle">Online Streaming</p>
                  <h2 className="h2 section-title">Recent Movies</h2>
                </div>
              </div>
              <ul className="movies-list  has-scrollbar">
                {res.results.map((movie) => (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                  />
                ))}
              </ul>
            </div>
          </section>
          <section className="top-rated">
            <div className="container">
              <div className="flex-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-subtitle">Must watch</h2>
                  <h2 className="h2 section-title">Popular Movies</h2>
                </div>
              </div>

              <div>
                <AllMovies popularRes={popularRes} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
