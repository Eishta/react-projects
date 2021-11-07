import '../styles/App.css';
// import createRoutes from '../routes';
import BirthdayReminder from '../components/BirthdayReminder';
import Tours from '../components/Tours';
import Reviews from '../components/Reviews/Reviews';
import Questions from '../components/Questions/Questions';
function App() {
  // const routes = createRoutes();
  return (
    <div className="App">
      {/* <BirthdayReminder /> */}
      {/* <Tours /> */}
      {/* <Reviews/> */}
      <Questions />
      {/* {routes} */}
    </div>
  );
}

export default App;
