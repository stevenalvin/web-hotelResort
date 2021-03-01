import React from "react";
import { Link, useParams } from "react-router-dom";
import { useRoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import defaultBcg from "../images/room-1.jpeg";

const SingleRoom = () => {
  const { slug } = useParams();
  const { rooms, getRoom } = useRoomContext();
  const room = getRoom(slug);

  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }
  let {
    name,
    images,
    price,
    description,
    size,
    capacity,
    pets: isPets,
    breakfast: isBreakfast,
    extras,
  } = room;
  const [mainImg, ...restImg] = images;

  return (
    <>
      <StyledHero img={mainImg || defaultBcg}>
        <Banner title={name}>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </StyledHero>
      <section className="single-room">
        <div className="single-room-images">
          {restImg.map((image, index) => {
            return <img src={image} alt={name} key={index} />;
          })}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price : ${price}</h6>
            <h6>size : {size} SQFT</h6>
            <h6>
              max capacity :{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{isPets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{isBreakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};

export default SingleRoom;
