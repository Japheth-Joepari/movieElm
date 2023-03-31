import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, release_date, poster_path }) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <li>
        <div className="movie-card">
          <Link href={`/${id}`}>
            <figure className="card-banner">
              <Image
                src={imagePath + poster_path}
                alt={title}
                width={400}
                height={300}
              />
            </figure>
          </Link>
          <div className="title-wrapper">
            <a href="./movie-details.html">
              <h3 className="card-title">{title.substring(0, 10)}</h3>
            </a>
            <time dateTime={2022}>2022</time>
          </div>
          <div className="card-meta">
            <div className="badge badge-outline">HD</div>
            <div className="duration">
              <ion-icon name="time-outline" />
              <time dateTime="PT137M">137 min</time>
            </div>
            <div className="rating">
              <ion-icon name="star" />
              <data>8.5</data>
            </div>
          </div>
        </div>
      </li>
    </div>
  );
}
