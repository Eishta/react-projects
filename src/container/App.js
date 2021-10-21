import '../styles/App.css';
// import createRoutes from '../routes';
import BirthdayReminder from '../components/BirthdayReminder';
import Tours from '../components/Tours';

function App() {
  // const routes = createRoutes();
  return (
    <div className="App">
      {/* <BirthdayReminder /> */}
      <Tours />
      {/* {routes} */}
    </div>
  );
}

export default App;
