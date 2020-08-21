import React from 'react';
import classnames from 'classnames';
import Box from 'components/bulma/elements/Box';
import Field from 'components/bulma/elements/Field';
import { useForm } from 'react-hook-form';
import { Title } from 'components/bulma/elements';
import { Form, Control } from 'components/bulma/form';
import {
  textColorMap,
  gridMap,
  textAlignmentMap,
} from 'components/bulma/options';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/user/actions';
import Section from 'components/bulma/layout/Section';
import Error from 'components/bulma/elements/Error';
import Input from 'components/bulma/elements/Input';

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
    <div
      style={{ alignItems: 'center', height: '100vh' }}
      className={classnames(gridMap.gridCentered)}
    >
      <Box>
        <Section>
          <Form onSubmit={handleSubmit(handleLoginRequest)}>
            <div className="has-text-centered px-5">
              <Field isCentered>
                <Title as="h1" styledAs="h1">
                  Code Heroes
                </Title>
                <div className={classnames(gridMap.gridCentered, 'my-5')}>
                  <Field hasAddons>
                    <Control>
                      <Input
                        name="email"
                        placeholder="email.."
                        ref={register({ required: true })}
                      />
                      <Error
                        state={'error'}
                        error={errors.email}
                        className={textAlignmentMap.left}
                      />
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
        </Section>
      </Box>
    </div>
  );
};

export default Login;
