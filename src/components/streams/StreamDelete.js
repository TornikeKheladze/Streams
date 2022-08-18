import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useParams } from "react-router-dom";

import { fetchOneStream } from "../../features/stream/streamSlice";
import Modal from "../Modal";
const StreamDelete = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentStream, setCurrentStream] = useState(null);
  useEffect(() => {
    dispatch(fetchOneStream(id)).then(({ payload }) =>
      setCurrentStream(payload)
    );
  }, []);

  return (
    <div>
      <Modal currentStream={currentStream} />
    </div>
  );
};

export default StreamDelete;
