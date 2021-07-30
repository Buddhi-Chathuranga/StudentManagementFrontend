import './App.css';
import CounterClass from './components/CounterClass';
import CounterFunction from './components/counterFunction';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import{BrowserRouter as Router, Route} from 'react-router-dom';
import AlllStudents from './components/AllStudents';
import edit from './components/EditStudent';
import Home from './components/Home';
import AddLecturer from './components/AddLecturer';
import AllLecturers from './components/AllLecturer';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route path="/studentList" exact component={AlllStudents}/>
        <Route path="/addStudent" exact component={AddStudent}/>
        <Route path="/editStudent/:id" exact component={edit}/>
        <Route path="/Home" exact component={Home}/>
        <Route path="/lecturerList" exact component={AllLecturers}/>
        <Route path="/addLecturer" exact component={AddLecturer}/>
        <Route path="/editLecturer/:id" exact component={edit}/>
        
      </div>
    </Router>
  );
}

export default App;
