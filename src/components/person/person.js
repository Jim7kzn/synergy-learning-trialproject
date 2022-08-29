import {Component} from "react";

class Person extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.id,
			name: this.props.name,
			phone: this.props.phone,
			career: this.props.career,
			email: this.props.email,
			meeting: this.props.meeting,
		}
	}

	onChangeMeeting = (e) => {
		this.setState({
			meeting: e.target.value
		})
		this.props.onValueChange(this.props.id, e.target.value)
	}

	render() {
		const {name, phone, career, email, meeting} = this.state
		const clazz = 'active'

		return (
			<tr className={meeting.length > 0 ? clazz : null}>
				<td>{name}</td>
				<td>{phone}</td>
				<td>{career}</td>
				<td>{email}</td>
				<td><input type='text' value={meeting.length > 0 ? meeting : 'не назначено'}
							onChange={e => this.onChangeMeeting(e)}/></td>
			</tr>
		);
	}
}

export default Person;
