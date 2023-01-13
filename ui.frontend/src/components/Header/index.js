import './style.css';

var notfound;

const Header = ({ text }) => {
  if(!text){
    notfound = '404 not found'
  }else{
    notfound = text
  }
  return <h6>{notfound}</h6>;
};

export default Header;
