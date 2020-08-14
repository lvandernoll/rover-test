import React from 'react';
import classnames from 'classnames';
import Box from 'components/bulma/elements/Box';
import Field from 'components/bulma/elements/Field';
import { useForm } from 'react-hook-form';
import { Form, Control, Title } from 'components/bulma/elements';
import {
  textColorMap,
  gridMap,
  textAlignmentMap,
} from 'components/bulma/options';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user/actions';

interface loginFormInfo {
  email: string;
}

const Login: React.FC = () => {
  const { register, errors, handleSubmit } = useForm<loginFormInfo>();
  const dispatch = useDispatch();

  const handleLoginRequest = (loginData: loginFormInfo) => {
    dispatch(login(loginData));
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
            </div>
          </Form>
        </Box>
      </div>
    </React.Fragment>
  );
};

export default Login;
