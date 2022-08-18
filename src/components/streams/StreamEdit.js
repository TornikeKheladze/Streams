import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StreamForm from "./StreamForm";
import { fetchOneStream, editStream } from "../../features/stream/streamSlice";

const StreamEdit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentStream, setCurrentStream] = useState(null);
  useEffect(() => {
    dispatch(fetchOneStream(id)).then(({ payload }) =>
      setCurrentStream(payload)
    );
  }, []);

  return (
    <StreamForm
      initialValuesProp={currentStream}
      formSubmit={(values) => dispatch(editStream(values))}
      formTitle="Edit Stream"
    />
  );
};

export default StreamEdit;
