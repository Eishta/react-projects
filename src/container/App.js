import '../styles/App.css';
// import createRoutes from '../routes';
import BirthdayReminder from '../components/BirthdayReminder';
import Tours from '../components/Tours';
import Reviews from '../components/Reviews/Reviews';
import Questions from '../components/Questions/Questions';
import Main from '../components/Menu/Main';
function App() {
  // const routes = createRoutes();
  return (
    <div className="App">
      {/* <BirthdayReminder /> */}
      {/* <Tours /> */}
      {/* <Reviews/> */}
      {/* <Questions /> */}
      <Main/>
      {/* {routes} */}
    </div>
  );
}

export default App;
