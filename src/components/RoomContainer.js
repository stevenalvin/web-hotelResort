import React, { useState, useEffect } from "react";
import { useRoomContext } from "../context";
import RoomsFilter from "./RoomFilter";
import RoomList from "./RoomList";
import Loading from "./Loading";
function RoomContainer() {
  const { rooms, loading } = useRoomContext();
  const [sortedRooms, setSortedRooms] = useState([]);
  const [filter, setFilter] = useState({
    roomType: "all",
    roomCapacity: 0,
    roomPrice: 0,
    maxPrice: 0,
    roomMinSize: 0,
    roomMaxSize: 0,
    breakfast: false,
    pets: false,
  });

  const handleChange = (e) => {
    let name = e.target.name;
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFilter({ ...filter, [name]: value });
  };

  const getUnique = (items, value) => {
    return [...new Set(items.map((item) => item[value]))];
  };
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  let capacities = getUnique(rooms, "capacity");
  let unique = { types, capacities, maxPrice: filter.maxPrice };

  const filterRooms = () => {
    let tempRooms = [...rooms];
    // console.log("rooms before filter", rooms);
    let {
      roomType,
      roomCapacity,
      roomPrice,
      maxPrice,
      roomMinSize,
      roomMaxSize,
      breakfast,
      pets,
    } = filter;
    roomCapacity = parseInt(roomCapacity);
    roomPrice = parseInt(roomPrice);
    // filter by type
    if (roomType !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === roomType);
    }
    // filter by capcity
    if (roomCapacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= roomCapacity);
    }
    // filter by price
    if (roomPrice !== maxPrice) {
      tempRooms = tempRooms.filter((room) => room.price <= roomPrice);
    }

    //filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= roomMinSize && room.size <= roomMaxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    setSortedRooms(tempRooms);
  };

  useEffect(() => {
    filterRooms();
  }, [filter]);
  useEffect(() => {
    let maxPrice = Math.max(
      ...rooms.map((room) => {
        return room.price;
      })
    );
    // console.log("first render");
    console.log(filter);
    let maxSize = Math.max(...rooms.map((room) => room.size));
    setFilter((filter) => ({
      ...filter,
      roomMaxSize: maxSize,
      maxPrice,
      roomPrice: maxPrice,
    }));
  }, [loading]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter
        rooms={rooms}
        setFilter={setFilter}
        filter={filter}
        unique={unique}
        handleChange={handleChange}
      />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default RoomContainer;
