"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function AllMovies({ popularRes }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  const [search, setSearch] = useState(""); // initialize the search state variable

  function handleSearchChange(e) {
    const searchInputValue = e.target.value;
    setSearch(searchInputValue);
  }
  console.log(search);

  return (
    <>
      <input
        type="search"
        className="inputt"
        onChange={handleSearchChange}
        placeholder="Search for movies ..."
      />
      <ul className="movies-list">
        {popularRes.results
          .filter(
            (movie) =>
              movie.title.toLowerCase().includes(search.trim().toLowerCase()) // added trim() to remove leading/trailing spaces
          )
          .map((movie) => (
            <li key={movie.id}>
              <div className="movie-card">
                <Link href={`/${movie.id}`}>
                  <figure className="card-banner">
                    <Image
                      src={imagePath + movie.poster_path}
                      alt={movie.title}
                      width={400}
                      height={300}
                    />
                  </figure>
                </Link>
                <div className="title-wrapper">
                  <Link href={`/${movie.id}`}>
                    {/* use Link for better navigation */}
                    <h3 className="card-title">{movie.title}</h3>
                  </Link>
                  <time dateTime={movie.release_date}>
                    {new Date(movie.release_date).getFullYear()}
                  </time>
                </div>
                <div className="card-meta">
                  <div className="badge badge-outline">{movie.popularity}</div>{" "}
                  {/* use popularity instead of hardcoded value */}
                  <div className="rating">
                    <ion-icon name="star" />
                    <data>{movie.vote_average}</data>{" "}
                    {/* use vote_average instead of hardcoded value */}
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}
