import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ScheduleScreen from './screens/ScheduleScreen';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 bg-gray-100">
        <ScheduleScreen />
      </main>
      <Footer />
    </div>
  );
};


export default App;
