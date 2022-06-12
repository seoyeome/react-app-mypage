import ProfileCSS from './ProfileCSS.module.css';
import profileImg from './profile.jpg';

function ProfileImg() {
  return(
    <div>
      <img src={ profileImg } width="150"/>
    </div>
  )
};
function ProfileInfo() {

  const profileInfo = {
    name: '김서영',
    education: '고려대 세종'
  };

  return(
    <div className={ProfileCSS.profileInfo}>
      <span className={ProfileCSS.profileComponent}>Name : {profileInfo.name}</span><br/>
      <span className={ProfileCSS.profileComponent}>Education : {profileInfo.education}</span>
    </div>
  )
};

export default function Profile() {

  return (

    <>
    <div>
      <h2>Profile</h2>
      <hr/>
    </div>
    <div className={ProfileCSS.profile}>
      <ProfileImg/>
      <ProfileInfo/>
    </div>
    </>
  )
}