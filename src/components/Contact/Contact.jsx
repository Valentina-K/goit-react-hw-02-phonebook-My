const Contact = ({ id, name, number, children }) => {
  return (
    <li>
      {name}: {number}
      {children}
    </li>
  );
};
export default Contact;
