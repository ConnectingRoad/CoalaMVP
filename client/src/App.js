import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Start from './routes/Start';
import Loading from './routes/Loading';
import Quiz from './routes/Quiz';
import Result from './routes/Result';
import Cover from './routes/Cover';
import SharedResult from './routes/SharedResult';

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Cover}/>
      <Route path="/start" component={Start}/>
      <Route path="/loading" component={Loading}/>
      <Route path="/quiz" component={Quiz}/>
      <Route path="/result" exact={true} component={Result}/>
      <Route path="/result/:id" component={SharedResult}/>
    </HashRouter>
  );
}

export default App;
