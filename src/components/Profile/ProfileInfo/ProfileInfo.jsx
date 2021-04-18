import prof from './ProfileInfo.module.css';
const ProfileInfo = () => {
	return (
		<div>
			<img className={prof.profile_img} src='../profile.png' alt='profile'></img>
			<div className={prof.descriptionBlock}>
				avatar + description
		</div>
		</div >
	)
}

export default ProfileInfo;