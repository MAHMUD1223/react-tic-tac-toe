import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let [clickIndex, setclickIndex] = useState(-1);
  //items = [];
  return (
    <>
      <h1>List of {heading}</h1>
      {/*conditonal*/}
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => {
          return (
            <li
              className={
                clickIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              //onClick={(event) => console.log(item, index, event)}
              onClick={() => {
                setclickIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ListGroup;
