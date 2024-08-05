
const FounderListItem = ({founder}) => {
  const {title, name, credential} = founder
    return (
      <li>
      <h3>Hello, I'm {name}, the {title}</h3>
      <p>{credential}</p>
      </li>
    );
  };
  
  export default FounderListItem;