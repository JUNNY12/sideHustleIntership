import './App.css';
import GenerallInfo from './component/GeneralInfomation';
import EducationalExperience from './component/EducationalExperience';
import ProfessionalSummary from './component/ProfessionalSummary';
import Experience from './component/Experience';
import Header from './component/Header';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='template'>
      <GenerallInfo />
      <ProfessionalSummary />
      <EducationalExperience />
      <Experience />
      </div>

    </div>
  )
}

export default App;
