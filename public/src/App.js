import './App.css';
import Movie from './components/Movie';
import SortBy from './components/SortBy';

function App() {
  return (
    <div class="container">
        <SortBy />
        <div class="content">
            
            <Movie />
            <Movie />
            <Movie />
        
        </div>
      </div>
  );
}

export default App;
