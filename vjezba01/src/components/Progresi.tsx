import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


function Progresi(props) {
    const html = props.html;
    const css = props.css;
    const js = props.js;
    const react = props.react;
    return (
        <div className='forthPart'>
          <p>HTML: <ProgressBar variant="success" now={html} label={`${html}%`}/></p>
          <p>CSS: <ProgressBar variant="info" now={css} label={`${css}%`}/></p>
          <p>JavaScript: <ProgressBar variant="warning" now={js} label={`${js}%`}/></p>
          <p>React JS: <ProgressBar variant="danger" now={react} label={`${react}%`}/></p>

        </div>
      );
  }

export default Progresi