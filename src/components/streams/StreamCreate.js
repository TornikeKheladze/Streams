import { createStream } from "../../features/stream/streamSlice";
import { useDispatch } from "react-redux/es/exports";
import StreamForm from "./StreamForm";

const StreamCreate = () => {
  const dispatch = useDispatch();
  return (
    <StreamForm
      formSubmit={(data) => dispatch(createStream(data))}
      formTitle="Create Stream"
    />
  );
};

export default StreamCreate;
