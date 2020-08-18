import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import classnames from 'classnames';
import { useForm } from 'react-hook-form';
import { Size, TextColor, Grid, textColorMap } from 'components/bulma/options';
import { Label, Box, Field, Title } from 'components/bulma/elements';
import { Link, useHistory } from 'react-router-dom';
import { Assignment } from 'interfaces';
import { Form, Control } from 'components/bulma/form';
import { Column } from 'components/bulma/columns';
import { getAdminPath } from 'App';

type AssignmentForm = Omit<Assignment, 'id'>;

type CreateAssignmentProps = {
  size?: Size;
  color?: TextColor;
  grid?: Grid;
};

const CreateAssignment: React.FC<CreateAssignmentProps> = () => {
  const { register, errors, handleSubmit } = useForm<AssignmentForm>();
  const [{ response, isLoading, error }, doFetch] = useFetch<Assignment[]>(
    '/assignments',
  );
  const history = useHistory();

  useEffect(() => {
    response && history.push(getAdminPath('/'));
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
    <>
      <Title as="h2">Create Assignment</Title>
      <Column sizeTablet={7} sizeDesktop={6} sizeWidescreen={5}>
        <Box>
          <Form onSubmit={handleSubmit(handleCreateAssignmentRequest)}>
            <Field>
              <Label htmlFor="title">Title</Label>
              <Control>
                <input
                  className={classnames('input', { 'is-danger': errors.title })}
                  name="title"
                  type="text"
                  placeholder="Read a book"
                  ref={register({ required: 'This field is required' })}
                />
                {errors.title && (
                  <p className={classnames('help', textColorMap.danger)}>
                    {errors.title.message}
                  </p>
                )}
              </Control>
            </Field>
            <Field>
              <Label htmlFor="pointsMaximum">Points</Label>
              <Control>
                <input
                  className={classnames('input', {
                    'is-danger': errors.pointsMaximum,
                  })}
                  name="pointsMaximum"
                  id="pointsMaximum"
                  type="tel"
                  placeholder="1"
                  defaultValue={1}
                  ref={register({
                    required: 'This field is required',
                    pattern: {
                      value: /^\d+$/,
                      message: 'Value has to be a number',
                    },
                  })}
                />
                {errors.pointsMaximum && (
                  <p className={classnames('help', textColorMap.danger)}>
                    {errors.pointsMaximum.message}
                  </p>
                )}
              </Control>
            </Field>
            <Field>
              <Label htmlFor="desciption">Description</Label>
              <Control>
                <textarea
                  style={{ resize: 'none' }}
                  className={classnames('textarea', {
                    'is-danger': errors.description,
                  })}
                  name="description"
                  id="description"
                  placeholder="Read a book to become more knowledgeable"
                  ref={register({ required: 'This field is required' })}
                />
                {errors.description && (
                  <p className={classnames('help', textColorMap.danger)}>
                    {errors.description.message}
                  </p>
                )}
              </Control>
            </Field>
            <Field isGrouped>
              <Control>
                <button
                  type="submit"
                  className={classnames('button', { 'is-loading': isLoading })}
                >
                  Submit
                </button>
              </Control>
              <Control>
                <Link to="/admin">
                  <button className="button">Cancel</button>
                </Link>
              </Control>
            </Field>
          </Form>
          {error && <div>Something went wrong...</div>}
          {isLoading && <div>Loading ...</div>}
        </Box>
      </Column>
    </>
  );
};

export default CreateAssignment;
