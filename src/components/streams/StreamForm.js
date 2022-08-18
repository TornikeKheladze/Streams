import { Form, Field } from "react-final-form";
import { useNavigate } from "react-router-dom";

const StreamForm = ({ formSubmit, formTitle, initialValuesProp }) => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    formSubmit(e);
    navigate("/");
  };

  const validate = (e) => {
    const errors = {};
    if (!e.title) {
      errors.title = "You must enter a title";
    }
    if (!e.description) {
      errors.description = "You must enter a description";
    }
    return errors;
  };

  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui message error  ">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? "error" : null}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  return (
    <Form
      initialValues={initialValuesProp && initialValuesProp}
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => {
        return (
          <form className="ui form error" onSubmit={handleSubmit}>
            <h3>{formTitle}</h3>
            <Field name="title" render={renderInput} label="Enter Title" />
            <Field
              name="description"
              render={renderInput}
              label="Enter Description"
            />
            <button className="primary ui button" type="submit">
              Submit
            </button>
          </form>
        );
      }}
    />
  );
};

export default StreamForm;
