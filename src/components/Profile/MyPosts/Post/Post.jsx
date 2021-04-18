import post from './Post.module.css';
const Post = (props) => {
	return (
		<div className={post.item}>
			<img src='https://www.woolha.com/media/2020/03/flutter-circleavatar-radius.jpg' alt='avatar'></img>
			{props.message}
			<span>&hearts; {props.likeCount}</span>
		</div>
	)
}

export default Post;