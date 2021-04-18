import Post from './Post/Post';
import ps from './MyPosts.module.css'
const MyPosts = () => {
	return (
		<div className={ps.postsBlock}>
			<h2>My Posts</h2>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button type="submit">Add new Post</button>
				</div>
			</div>
			<div>
				<Post message='Hi!' likeCount='23' />
				<Post message='How are you?' likeCount='2' />
				<Post message='Are you OK?' likeCount='3' />
				<Post message="I can't connect with you!" likeCount='0' />
			</div>
		</div>
	)
}

export default MyPosts;
