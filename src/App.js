import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Start from './routes/Start';
import Loading from './routes/Loading';
import Quiz from './routes/Quiz';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Start}/>
      <Route path="/loading" component={Loading}/>
      <Route path="/quiz" component={Quiz}/>
      <Route path="/result" />
    </HashRouter>
  );
}

export default App;
