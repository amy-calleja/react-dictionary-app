import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <section>
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt={props.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
