import { useDispatch } from 'react-redux';
import { updateContacts } from 'redux/tasks/operations';
import { Form, Label } from './ContactsFormStyles.js';

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      updateContacts({
        name: form.elements.name.value,
        number: form.elements.phone.value,
      })
    );
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <input type="text" name="name" />
      </Label>
      <Label>
        Phone
        <input type="text" name="phone" />
      </Label>
      <button type="submit">Update</button>
    </Form>
  );
};
