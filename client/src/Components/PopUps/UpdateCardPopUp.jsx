import React, { useEffect } from "react";
import { useState } from "react";
import { updateCart } from "../../Services/Buy";
import "../../Assets/css/modal.css";
import { toast } from "react-toastify";

const UpdateCardPopUp = ({ setShowModal, product, counts }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(counts);
  }, []);

  const handleBtn = () => {
    console.log(count);
    try {
      updateCart({ id: product._id, count: count }).then((data) => {
        toast.success(data.data.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setShowModal(false);
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Update Cart</h6>

        <div className="input__item mb-3">
          <h6>Enter Quantity, {product.postBy.count} available</h6>
          <input
            type="number"
            placeholder="Enter quantity"
            value={count}
            // onChange={(e) => {
            // setCount(e.target.value);
            onChange={(e) => {
              if (e.target.value <= 0) {
                toast.warn("Value Cannot Be Less Than Zero", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              } else if (e.target.value > product.postBy.count) {
                toast.warn("Count is more than available", {
                  position: toast.POSITION.BOTTOM_RIGHT,
                });
              } else if (
                !(e.target.value > product.postBy.count) &&
                !(e.target.value < 0)
              ) {
                setCount(e.target.value);
              }
            }}

          />
        </div>

        <button className="place__bid-btn" onClick={handleBtn}>
          Update
        </button>
      </div>
    </div>
  );
};

export default UpdateCardPopUp;
