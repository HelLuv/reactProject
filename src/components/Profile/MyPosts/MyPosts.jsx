import Post from './Post/Post';
const MyPosts = () => {
	return (
		<div> My Posts
			<div>new post</div>
			<div>
				<Post message='Hi!' />
				<Post message='How are you?' />
				<Post message='Are you OK?' />
				<Post message="I can't connect with you!" />
			</div>
		</div>
	)
}

export default MyPosts;
