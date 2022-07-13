import React, { useState, useEffect, Children, cloneElement } from "react";
import { Button } from "react-bootstrap";
import "./Slider.css";

const PAGE_WIDTH = 300;

export const Slider = ({ children }) => {
  const [pages, setPages] = React.useState([]);
  const [offset, setOffset] = React.useState(0);

  const handleLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;

      return Math.min(newOffset, 0);
    });
  };

  const handleRigthClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;

      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div>
      <div className="main-container">
        <div className="window">
          <div
            className="all-pages-container"
            style={{
              transform: `translateX(${offset}px)`,
            }}
          >
            {pages}
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-3">
        <Button className="w-32" variant="danger" onClick={handleLeftClick}>
          back
        </Button>
        <Button className="w-32" variant="success" onClick={handleRigthClick}>
          next
        </Button>
      </div>
    </div>
  );
};
