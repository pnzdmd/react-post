import './App.css';

import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import PostStatusFilter from './components/PostStatusFilter';
import PostList from './components/PostList';
import PostAddForm from './components/PostAddForm';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='search-panel d-flex'>
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList/>
      <PostAddForm/>
    </div>
  );
}

export default App;
