import './style.css'

var buttomText;
const ButtomTemplate = ({ text }) => {
  if(!text){
    buttomText = 'Back to homepage'
  }else{
    buttomText = text
  }
  
  
  return <div class='buttomTemplate'><a href="http:www.google.com">{buttomText}</a></div>;
};

export default ButtomTemplate;
