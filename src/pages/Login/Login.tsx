import React, { useEffect } from 'react';
import classnames from 'classnames';
import useFetch from 'api/api';
import Box from 'components/bulma/elements/Box';
import Field from 'components/bulma/elements/Field';
import { useForm } from 'react-hook-form';
import { Form, Control, Title } from 'components/bulma/elements';
import {
  textColorMap,
  gridMap,
  textAlignmentMap,
} from 'components/bulma/options';
import { useHistory } from 'react-router-dom';

interface LoginResponse {
  token: string;
}

interface loginFormInfo {
  email: string;
}

const Login: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<loginFormInfo>();
  const [{ response, isLoading, error }, doFetch] = useFetch<LoginResponse>(
    'api/login',
  );

  const history = useHistory();
  useEffect(() => {
    if (response?.token) {
      localStorage.setItem('token', response.token);
      history.push('/');
    }
  }, [response, history]);

  const handleLoginRequest = (loginData: loginFormInfo) => {
    doFetch({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        ...loginData,
        email: loginData.email + '@competa.com',
      },
    });
  };

  return (
    <React.Fragment>
      <div
        style={{ alignItems: 'center', height: '100vh' }}
        className={classnames(gridMap.gridCentered)}
      >
        <Box>
          <Form onSubmit={handleSubmit(handleLoginRequest)}>
            <div className="has-text-centered px-5">
              <Field isCentered>
                <Title as="h1" styledAs="h1">
                  Code Heroes
                </Title>
                <div className={classnames(gridMap.gridCentered, 'my-5')}>
                  <Field hasAddons>
                    <Control>
                      <input
                        className="input"
                        name="email"
                        placeholder="email.."
                        ref={register({ required: true })}
                      />
                      {errors.email && errors.email.type === 'required' && (
                        <p
                          className={classnames(
                            textColorMap.danger,
                            textAlignmentMap.left,
                          )}
                        >
                          Field is required.
                        </p>
                      )}
                    </Control>
                    <Control>
                      <span className="button is-static">
                        <p className={classnames(textColorMap.black)}>
                          @competa.com
                        </p>
                      </span>
                    </Control>
                  </Field>
                </div>
              </Field>
              <Field>
                <button className="button" name="email">
                  Login
                </button>
              </Field>
              {error && <div>Something went wrong...</div>}
              {isLoading && <div>Loading ...</div>}
            </div>
          </Form>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Login;
