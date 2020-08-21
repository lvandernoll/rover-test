import React from 'react';
import { useForm } from 'react-hook-form';
import { Size, TextColor, Grid } from 'components/bulma/options';
import { Title, Label, Box, Field } from 'components/bulma/elements';
import { Link, useHistory } from 'react-router-dom';
import { Form, Control } from 'components/bulma/form';
import { Column } from 'components/bulma/columns';
import { getAdminPath } from 'App';
import { useDispatch, useSelector } from 'react-redux';
import { postAssignment } from 'redux/actions/assignments/actions';
import { Assignment } from 'interfaces';
import {
  selectPostAssignmentSuccess,
  selectAssignmentErrorState,
  selectAssignmentLoadingState,
} from 'redux/selectors';
import Input from 'components/bulma/elements/Input';
import Error from 'components/bulma/elements/Error';
import classnames from 'classnames';

type AssignmentRequest = Omit<Assignment, 'id'>;

type CreateAssignmentProps = {
  size?: Size;
  color?: TextColor;
  grid?: Grid;
};

const CreateAssignment: React.FC<CreateAssignmentProps> = () => {
  const { register, errors, handleSubmit } = useForm<AssignmentRequest>();
  const history = useHistory();
  const dispatch = useDispatch();
  const success = useSelector(selectPostAssignmentSuccess);
  const error = useSelector(selectAssignmentErrorState);
  const isLoading = useSelector(selectAssignmentLoadingState);

  const handleCreateAssignmentRequest = async (formData: AssignmentRequest) => {
    await dispatch(postAssignment(formData));
    if (success) {
      history.push(getAdminPath('/'));
    }
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
                <Input
                  error={errors.title}
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Read a book"
                  ref={register({ required: true })}
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
                    required: true,
                    pattern: /^\d+$/,
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
          {error && <p className="help">Something went wrong...</p>}
        </Box>
      </Column>
    </>
  );
};

export default CreateAssignment;
