import Image from "next/image";
import Link from "next/link";

export default async function MovieDetail({ params }) {
  const path = "https://image.tmdb.org/t/p/original";
  const movie = params.movie;
  console.log(movie);
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}
  `
  );
  const res = await data.json();
  console.log(res);
  return (
    <>
      <section className="movie-detail">
        <div className="container">
          <figure className="movie-detail-banner">
            <Image
              alt="loading"
              height={600}
              width={900}
              src={path + res.backdrop_path}
              priority
              style={{ height: "30rem", objectFit: "cover" }}
            />
            <button className="play-btn">
              <ion-icon name="play-circle-outline"></ion-icon>
            </button>
          </figure>

          <div className="movie-detail-content">
            <p className="detail-subtitle">Check out 👇</p>
            <h1 className="h1 detail-title">{res.title}</h1>
            <div className="meta-wrapper">
              <div className="badge-wrapper">
                <div className="badge badge-outline">HD</div>
                <div className="badge badge-fill">{res.status}</div>
              </div>

              <div className="date-time">
                <div>
                  <ion-icon name="calendar-outline" />
                  <time dateTime={2021}>{res.release_date}</time>
                </div>
                <div>
                  <ion-icon name="time-outline" />
                  <time dateTime="PT115M">{res.runtime} minutes </time>
                </div>
              </div>
            </div>
            <p className="storyline">{res.overview}</p>
            <Link href="/" download class="download-btn">
              <span href="/">Back to Home</span>

              <ion-icon name="download-outline"></ion-icon>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
