import Contact from '../Contact/Contact';
const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} onDeleteClick={onDelete}>
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </Contact>
      ))}
    </ul>
  );
};

export default ContactList;
