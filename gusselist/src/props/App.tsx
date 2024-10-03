import GusetList from '../state/GusetList';
import UserSearch from '../state/UserSearch';


function App() {
  return (
    <div>
      <div className='inline-block w-[400px] border border-black'>
        <GusetList />
      </div>
      <div className='inline-block w-[400px] border border-black'>
        <UserSearch />
      </div>
    </div>
  );
}

export default App;
