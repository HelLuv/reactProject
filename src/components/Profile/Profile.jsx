import MyPosts from './MyPosts/MyPosts';
import prof from './Profile.module.css';
const Profile = () => {
	return (
		<div className={prof.profile}>
			<div>
				<img src='../profile.png' alt='profile'></img>
			</div>
			<div>avatar + description</div>
			<MyPosts />
		</div>
	)
}

export default Profile;