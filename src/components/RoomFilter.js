import React, { useEffect } from "react";
import useRoomContext from "../context";
import Title from "./Title";

const RoomFilter = ({ rooms, setFilter, filter, unique, handleChange }) => {
  const { types, capacities } = unique;
  // console.log("roomFilter filter: ", filter);

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="roomType"
            id="type"
            className="form-control"
            value={filter.roomType}
            onChange={handleChange}
          >
            {types.map((type, index) => {
              return (
                <option value={type} key={index}>
                  {type}
                </option>
              );
            })}
          </select>
        </div>
        {/* end of select type */}
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="roomCapacity"
            id="capacity"
            className="form-control"
            value={filter.roomCapacity}
            onChange={handleChange}
          >
            {capacities.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        {/* end of select capacity */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${filter.roomPrice}</label>
          <input
            type="range"
            name="roomPrice"
            min={0}
            max={filter.maxPrice}
            id="price"
            value={filter.roomPrice}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="roomMinSize"
              id="size"
              value={filter.roomMinSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="roomMaxSize"
              id="size"
              value={filter.roomMaxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={filter.breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={filter.pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
};

export default RoomFilter;
