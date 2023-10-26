import './App.css';
import CounterView from './features/counter/CounterView';
import PostsView from './features/posts/PostsView';

function App() {
  return (
    <div className="App">
      Counter App
      <CounterView></CounterView>
      <PostsView></PostsView>
    </div>
  );
}

export default App;
