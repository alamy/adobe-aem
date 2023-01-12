import './style.css'

var description;
const Description = ({ text }) => {
  console.log(text)
  if(!text){
    description = 'The page you are looking for might be removed or is temporarily unavailable'
  }else {
    description = text
  }
  
  return <div class='decription'><p>{description}</p></div>;
};

export default Description;
