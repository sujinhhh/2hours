import Link from "next/link";
import { useState, useEffect } from "react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.artic.edu/api/v1/artworks?page=1&limit=100&fields=id,title,image_id"
  );
  const data = await res.json();
  // return {
  //   props: { gallery: data.data },
  // };
};

const Gallery = ({ gallery }) => {
  const [isLoader, setIsLoader] = useState(false);
  const [activeImage, setActiveImage] = useState(1);

  useEffect(() => {
    getStaticProps().then((result) => {
      console.log(result);
    });
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__title">
        <h1>ArT & Design </h1>
        <p>API from Art Institute of Chicago</p>
      </div>

      <div className="gallery__container">
        <div />
        <div className="gallery__counter">
          <span>{activeImage}</span>
          <span className="divider"></span>
          <span>{gallery.length}</span>
        </div>
        {gallery.map((art) => {
          const imgPath = `https://www.artic.edu/iiif/2/${art.image_id}/full/300,/0/default.jpg`;
          return (
            art.image_id && (
              <Link
                href={"/gallery/" + art.id}
                key={art.id}
                updateActiveImage={(index) => setActiveImage(index + 1)}
              >
                <a>
                  <div
                    className="gallery__img"
                    style={{ backgroundImage: `url(${imgPath})` }}
                  ></div>
                </a>
              </Link>
            )
          );
        })}
      </div>
      <div />
    </div>
  );
};

export default Gallery;
