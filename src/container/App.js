import '../styles/App.css';
// import createRoutes from '../routes';
import BirthdayReminder from '../components/BirthdayReminder';
import Tours from '../components/Tours';
import Reviews from '../components/Reviews/Reviews';

function App() {
  // const routes = createRoutes();
  return (
    <div className="App">
      {/* <BirthdayReminder /> */}
      {/* <Tours /> */}
      <Reviews/>
      {/* {routes} */}
    </div>
  );
}

export default App;
