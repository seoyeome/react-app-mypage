import ExperienceCSS from './ExperienceCSS.module.css';

function ExperienceInfo() {

  const experienceInfo = {
    term: 'Intern - 07/2019 to 08/2019',
    company: 'Hyorim Industry Corp'
  };

  return(
    <div>
      <span>{experienceInfo.term}</span><br/>
      <strong>{experienceInfo.company}</strong>
    </div>
  )
};

export default function Experience() {


  return(
    <div className={ExperienceCSS.experience}>
      <h2>Experience</h2>
      <hr/>
      <ExperienceInfo/>
    </div>
  )
};