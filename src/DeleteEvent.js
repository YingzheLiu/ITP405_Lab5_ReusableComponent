import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Collapse, CardBody, Card } from "reactstrap";

export default function DeleteEvent({ filledColor, size }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }
  function hideCollapse() {
    setIsOpen(false);
  }
  function deleteThis() {}
  return (
    <>
      <DeleteIcon toggle={toggle} filledColor={filledColor} size={size} />
      <Collapse className="delete-message" isOpen={isOpen}>
        <Card>
          <CardBody>
            <div className="row">
              <div className="col-9 mt-2">
                Do you really want to delete this element?
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={hideCollapse}
                >
                  Cancle
                </button>
              </div>
              <div className="col-auto">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={deleteThis}
                >
                  Delete
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Collapse>
    </>
  );
}
function DeleteIcon({ toggle, filledColor, size }) {
  return (
    <button type="button" className="btn btn-link" onClick={toggle}>
      <FontAwesomeIcon
        icon={faTrash}
        color={filledColor}
        size={size}
      ></FontAwesomeIcon>
    </button>
  );
}
