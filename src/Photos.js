import React from "react";

export default function Photos(props) {
  if (props.data) {
    return (
      <div className="Photos">
        <section>
          <div className="row row-gap-4">
            {props.data.photos.map(function (photo, index) {
              return (
                <div className="col-6" key={index}>
                  <img
                    className="img-fluid"
                    src={photo.src.landscape}
                    alt={photo.alt}
                  />
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
