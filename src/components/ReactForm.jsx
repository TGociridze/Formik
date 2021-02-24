import React, {
  useState,
  useEffect,
} from "react";

function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = `field is required!`;
  }
  if (!values.email) {
    errors.email = `field is required!`;
  }
  return errors;
}

const ReactForm = props => {
  const [
    submitting,
    setSubmitting,
  ] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(
    "",
  );
  const [errors, setErrors] = useState(
    {},
  );

  useEffect(() => {
    setErrors(
      validate({ name, email }),
    );
  }, [name, email]);

  return (
    <form
      action=''
      onSubmit={event => {
        event.preventDefault();

        if (
          Object.keys(
            validate({ name, email }),
          ).length > 0
        ) {
          return;
        }
        setSubmitting(true);

        setTimeout(() => {
          const values = {
            name,
            email,
          };
          alert(
            JSON.stringify(
              { values },
              null,
              2,
            ),
          );
          setSubmitting(false);
        }, 1500);
      }}
    >
      <div className='form-group'>
        <label
          htmlFor='name'
          className={
            errors.name
              ? "has-error"
              : ""
          }
        >
          Name:
        </label>
        <input
          type='text'
          placeholder='Name'
          id='name'
          name='name'
          value={name}
          onChange={event => {
            setName(event.target.value);
          }}
        />
        {errors.name}
      </div>
      <br />
      <div className='form-group'>
        <label
          htmlFor='email'
          className={
            errors.email
              ? "has-error"
              : ""
          }
        >
          Email:
        </label>
        <input
          type='email'
          placeholder='Email'
          id='email'
          name='email'
          value={email}
          onChange={event => {
            setEmail(
              event.target.value,
            );
          }}
        />
        {errors.email}
      </div>
      <br />
      <div className='form-group'>
        <button
          type='submit'
          disabled={submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ReactForm;
