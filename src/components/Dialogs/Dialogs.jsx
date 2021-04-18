import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
};

const Message = (props) => {
	return (
		<div className={s.message}>{props.message}</div>
	)
};

const Dialogs = (props) => {

	const dialogsData = [
		{}
	]

	return (
		<div className={s.dialogs}>
			<div className={s.dialogItems}>
				<DialogItem name='Nick' id="1" />
				<DialogItem name='Dimych' id="2" />
				<DialogItem name='Andrey' id="3" />
				<DialogItem name='Sveta' id="4" />
				<DialogItem name='Sasha' id="5" />
				<DialogItem name='Victor' id="6" />
			</div>
			<div className={s.messages}>
				<Message message="Hi!" />
				<Message message="How old are you?" />
				<Message message="Yo! yo-yo!" />
				<Message message="WOW! 0_0" />
			</div>
		</div>
	)
}

export default Dialogs;