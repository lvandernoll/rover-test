import React, { useEffect, useState } from 'react';
import useFetch from 'api/api';
import Box from 'components/bulma/elements/Box';
import Field from 'components/bulma/elements/Field';

interface Login {
  email: string;
}

const Login: React.FC = () => {
  const [user, setUser] = useState({
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const [{ response, isLoading, error }, doFetch] = useFetch<Login[]>(
    'api/login',
  );
  useEffect(() => {
    doFetch({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        email: user.email,
      },
    });
  }, [doFetch]);

  return (
    <React.Fragment>
      <div className="column is-half is-narrow">
        <Box>
          <div className="column has-text-centered ">
            <Field isCentered>
              <h1 className="title is-1">Code Heroes</h1>
              <div className="columns is-centered">
                <div className="field has-addons">
                  <p className="control ">
                    <input className="input" onChange={handleChange}></input>
                  </p>
                  <div className="control">
                    <span className="button is-static">
                      <p className="has-text-black">@competa.com</p>
                    </span>
                  </div>
                </div>
              </div>
            </Field>
            <button className="button" name="email">
              Login
            </button>
          </div>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Login;
