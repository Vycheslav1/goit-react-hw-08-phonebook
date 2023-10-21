import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';

export default function Contacts() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <ContactsForm />
      </div>
    </HelmetProvider>
  );
}
