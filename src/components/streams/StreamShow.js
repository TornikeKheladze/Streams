import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchOneStream } from "../../features/stream/streamSlice";
const StreamShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentStream, setCurrentStream] = useState(null);
  useEffect(() => {
    dispatch(fetchOneStream(id)).then(({ payload }) =>
      setCurrentStream(payload)
    );
  }, []);

  const renderStream = currentStream ? (
    <>
      <h1>{currentStream.title}</h1>
      <h5>{currentStream.description}</h5>
    </>
  ) : (
    <h3>Loading...</h3>
  );

  return <div>{renderStream}</div>;
};

export default StreamShow;
