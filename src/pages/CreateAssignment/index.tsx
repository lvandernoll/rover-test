import React, { useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import { useForm } from 'react-hook-form';
import { Size, TextColor, Grid } from 'components/bulma/options';
import {
  Title,
  Label,
  Box,
  Field,
  Input,
  Error,
} from 'components/bulma/elements';
import { Link, useHistory } from 'react-router-dom';
import { Assignment } from 'interfaces';
import { Form, Control } from 'components/bulma/form';
import { Column } from 'components/bulma/columns';

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
    <>
      <Column size={4} offset={4}>
        <Title as="h3" styledAs="h2">
          Create Assignment
        </Title>
        <Box>
          <Form onSubmit={handleSubmit(handleCreateAssignmentRequest)}>
            <Field>
              <Label htmlFor="title">Title</Label>
              <Control>
                <Input
                  error={errors.title}
                  name="title"
                  type="text"
                  placeholder="Read a book"
                  ref={register({ required: 'This field is required' })}
                />
                <Error error={errors.title} state={'error'} />
              </Control>
            </Field>
            <Field>
              <Label htmlFor="pointsMaximum">Points</Label>
              <Control>
                <Input
                  error={errors.pointsMaximum}
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
                <Error error={errors.pointsMaximum} state={'error'} />
              </Control>
            </Field>
            <Field>
              <Label htmlFor="desciption">Description</Label>
              <Control>
                <Input
                  as={'textarea'}
                  style={{ resize: 'none' }}
                  error={errors.description}
                  name="description"
                  id="description"
                  placeholder="Read a book to become more knowledgeable"
                  ref={register({ required: 'This field is required' })}
                />
                <Error error={errors.description} state={'error'} />
              </Control>
            </Field>
            <Field isGrouped>
              <Control>
                <button type="submit" className="button">
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
