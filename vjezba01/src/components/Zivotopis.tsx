import Card from 'react-bootstrap/Card';
import './Zivotopis.css';



function Zivotopis(props) {
  return (
    <Card className="thirdPart">
      <Card.Header className="Title">Opći podaci</Card.Header>
      <Card.Body>
        
      <Card.Text className="text">
            <span>Datum:</span> {props.datum}
          </Card.Text>
          <Card.Text className="text">
          <span>Adresa:</span>  {props.adresa}
          </Card.Text>
          <Card.Text className="text">
          <span>Kontakt:</span>  {props.kontakt}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted"><a href="https://linkedin.com/in/emma-veletic-75a358211/m">Više na LinkedIn-u</a></Card.Footer>
    </Card>
   
  );
  }

export default Zivotopis;