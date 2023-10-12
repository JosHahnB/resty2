
const History = ({ history }) => {
  return (
    <ul>
      {history.map((entry, index) => (
        <li key={index}>
          {entry.method}:{entry.url}
        </li>
      ))}
    </ul>
  );
};
export default History;
