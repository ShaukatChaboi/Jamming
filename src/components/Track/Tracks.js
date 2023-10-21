import React, { useCallback } from "react";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );

  const render = () => {
    if (props.isRemoval) {
      return (
        <button className="font-bold" onClick={removeTrack}>
          -
        </button>
      );
    }
    return (
      <button className="font-bold" onClick={addTrack}>
        +
      </button>
    );
  };

  return (
    <div className="flex justify-between border-b border-solid text-left">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {render()}
    </div>
  );
};

export default Track;
