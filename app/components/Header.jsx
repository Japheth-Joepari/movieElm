import Link from "next/link";

export default async function Header() {
  return (
    <header className="header" data-header>
      <div className="container">
        <div className="overlay" data-overlay />
        <Link href="/">
          <img
            src="https://media.istockphoto.com/id/1269936208/vector/black-film-reel-and-play-video-movie-film-icon-isolated-on-yellow-background-long-shadow.jpg?s=170667a&w=0&k=20&c=_2L236Z6_bGfWSa3T5TdmJYvlpiCwW5vlGmupH8x-1g="
            alt="Filmlane logo"
            className="hlogo"
          />
          <b style={{ color: "white", margintop: "2rem" }}>MovieElm</b>
        </Link>

        <button className="menu-open-btn" data-menu-open-btn>
          <ion-icon name="reorder-two" />
        </button>
        <nav className="navbar" data-navbar>
          <div className="navbar-top">
            <a href="./index.html" className="logo">
              <img src="./assets/images/logo.svg" alt="Filmlane logo" />
            </a>
            <button className="menu-close-btn" data-menu-close-btn>
              <ion-icon name="close-outline" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
