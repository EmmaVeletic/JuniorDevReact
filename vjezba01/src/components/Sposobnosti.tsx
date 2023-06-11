import Card from 'react-bootstrap/Card';
import './Sposobnosti.css';



function Sposobnosti(props) {
  return (
    <Card className="thirdPart">
      <Card.Header className="Title">Sposobnosti</Card.Header>
      <Card.Body>
        
      {props.children}
        
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
   
  );
  }

export default Sposobnosti;