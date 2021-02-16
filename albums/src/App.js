import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Album from './pages/Album'
import AlbumDetail from './pages/AlbumDetail'
// import Picture from './pages/Picture'


export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Album}></Route>
          <Route path="/album/:id" component={AlbumDetail}></Route>
          {/* <Route path="/images/:id" component={Picture}></Route> */}
        </Switch>
      </div>
    </Router>
  );
}
