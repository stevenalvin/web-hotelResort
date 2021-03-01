import React from "react";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import { useRoomContext } from "../context";

function FeaturedRooms() {
  const { featuredRooms, loading } = useRoomContext();

  return (
    <section className="featured-rooms">
      <Title title="feature rooms" />
      <div className="featured-rooms-center">
        {loading ? (
          <Loading />
        ) : (
          featuredRooms.map((room, index) => {
            return <Room key={index} room={room} />;
          })
        )}
      </div>
    </section>
  );
}

export default FeaturedRooms;
