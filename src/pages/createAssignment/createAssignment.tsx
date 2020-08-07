import React, { Fragment, useEffect } from 'react';
import useFetch from 'api/api';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import {
  Size,
  TextColor,
  Grid,
  gridMap,
  sizeMap,
  textColorMap,
} from 'components/bulma/options';
import {
  Title,
  Label,
  Box,
  Form,
  Field,
  Control,
} from 'components/bulma/elements';
import { Link, useHistory } from 'react-router-dom';
import { Assignment } from 'interfaces';

type AssignmentForm = Omit<Assignment, 'id'>;

type CreateAssignmentProps = {
  size?: Size;
  color?: TextColor;
  grid?: Grid;
};

type formInfo = {
  title: string;
  description: string;
  points_maximum: number;
};

const CreateAssignment: React.FC<CreateAssignmentProps> = () => {
  const { register, errors, handleSubmit } = useForm<formInfo>();
  const [{ response, isLoading, error }, doFetch] = useFetch<Assignment[]>(
    'api/assignments',
  );
  const history = useHistory();

  useEffect(() => {
    response && history.push('/');
  }, [response, history]);

  const handleCreateAssignmentRequest = (formData: AssignmentForm) => {
    doFetch({
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        ...formData,
      },
    });
  };

  return (
    <Fragment>
      <div className={classnames('column', gridMap.centeredOneThird)}>
        <Title as="h3" styledAs="h2">
          Create Assignment
        </Title>
        <Box>
          <Form onSubmit={handleSubmit(handleCreateAssignmentRequest)}>
            <Label htmlFor="title">Title</Label>
            <Field>
              <input
                className="input"
                name="title"
                type="text"
                placeholder="read a book"
                ref={register({ required: true })}
              />
              {errors.title && errors.title.type === 'required' && (
                <p className={classnames(textColorMap.danger)}>
                  Field is required.
                </p>
              )}
            </Field>
            <Label htmlFor="points">Points</Label>
            <Field>
              <input
                className="input"
                name="points_maximum"
                type="tel"
                placeholder="1"
                ref={register({
                  required: true,
                  pattern: /\d+/,
                })}
              />
              {errors.points_maximum &&
                errors.points_maximum.type === 'pattern' && (
                  <p className={classnames(textColorMap.danger)}>
                    Please enter a number
                  </p>
                )}
            </Field>
            <Label htmlFor="desciption">Description</Label>
            <Field>
              <textarea
                style={{ resize: 'none' }}
                className="textarea"
                placeholder="Desciption"
                name="description"
                ref={register({ required: true })}
              />
              {errors.description && errors.description.type === 'required' && (
                <p className={classnames(textColorMap.danger)}>
                  Field is required.
                </p>
              )}
            </Field>
            <Field isGrouped>
              <Control>
                <button
                  type="submit"
                  className={classnames(
                    'button',
                    sizeMap.normal,
                    textColorMap.normal,
                  )}
                >
                  Submit
                </button>
              </Control>
              <Control>
                <Link to="/admin">
                  <button
                    className={classnames(
                      'button',
                      sizeMap.normal,
                      textColorMap.normal,
                    )}
                  >
                    Cancel
                  </button>
                </Link>
              </Control>
            </Field>
          </Form>
          {error && <div>Something went wrong...</div>}
          {isLoading && <div>Loading ...</div>}
        </Box>
      </div>
    </Fragment>
  );
};

export default CreateAssignment;
