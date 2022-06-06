
import Knowledge from './components/knowledge';
import Users from './components/users';

function App() {
  
  const attributes = ['html', 'css', 'js native'];
  const names = ['Brad', 'Inna', 'John', 'Rocky', 'Rainer Werner Fassbinder', 'Ludwig Josef Johann Wittgenstein', 'Superman' ];
  
  return (
    <div className="app">

      <Knowledge attributes = {attributes}/>
      <Users names = {names}/>

    </div>
  );
}

export default App;
