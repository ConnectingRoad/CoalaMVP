import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Start from './routes/Start';
import Loading from './routes/Loading';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Start}/>
      <Route path="/loading" component={Loading}/>
      <Route path="/quiz" />
      <Route path="/result" />
    </HashRouter>
  );
}

export default App;
