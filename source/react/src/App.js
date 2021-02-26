import './App.css';
import React from 'react';
import firebase from './FirebaseConfig';
import 'firebase/database';

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			username: localStorage.getItem('username') ?? null,
			inputUsername: '',
			messages: [],
			inputMess: ''
		}

		this.getMess = this.getMess.bind(this)
		this.onMess = this.onMess.bind(this)
		this.renderMess = this.renderMess.bind(this)
		this.renderInputUsername = this.renderInputUsername.bind(this)
		this.submit = this.submit.bind(this)
		this.sendMess = this.sendMess.bind(this)

		this.getMess()
		this.onMess()
	}

	async getMess(){
		await firebase.database().ref('messages').get().then(items => {
				let result = []
				items.forEach(item => {
					result.push({
						key: item.key,
						username: item.val().username,
						content: item.val().content,
					})
				})
				this.setState({
					messages: result
				})
			})
			.catch(() => {
				
			})
	}

	onMess(){
		firebase.database().ref('messages').on("child_added", (snapshot) => {
			this.setState({
				messages: [
					...this.state.messages,
					{
						key: snapshot.key,
						username: snapshot.val().username,
						content: snapshot.val().content,
					}
				]
			})
	 	})
	}

	renderMess(){
		return this.state.messages.map(mess => {
			return <div key={mess.key} className="w-100 d-flex justify-content-start">
			<div className="msg mb-2">
				<span className="msg-user">
					{mess.username}
				</span>
				<span className="msg-body">
					{mess.content}
				</span>
			</div>
		</div>
		})
	}

	renderInputUsername(){
		return this.state.username != null ? "" : <input onChange={e => this.setState({ inputUsername: e.target.value })} value={this.state.inputUsername} type="text" className="form-control"placeholder="Username" />
	}

	submit(e){
		e.preventDefault()
		if(this.state.username != null){
			this.sendMess()
		}else if(this.state.inputUsername.trim().length > 4){
			localStorage.setItem('usernane', this.state.inputUsername)
			this.setState({
				username: this.state.inputUsername,
			})
			this.sendMess()
		}else{
			alert('username is required!.')
		}
	}

	sendMess(){
		if(this.state.inputMess.trim().length > 0){
			firebase.database().ref('messages').push({
				username: this.state.username,
				content: this.state.inputMess,
			})
			this.setState({
				inputMess: '',
			})
		}else{
			alert('Message content is required')
		}
	}

	render(){
		return <div className="container">
			<div className="row justify-content-center min-vh-100">
				<div className="col-10 col-md-8 col-lg-6">
					<div className="card">
						<div className="card-header">
							<h3 className="card-title mb-1">Messages Using ReactJS</h3>
							<span className="card-text">{this.state.messages.length} messages</span>
						</div>
						<div className="card-body ">
							<div className="w-100">
								{this.renderMess()}
							</div>
						</div>
						<div className="card-footer">
						<form onSubmit={this.submit}>
							{this.renderInputUsername()}
							<div className="input-group">
								<input onChange={(e) => this.setState({inputMess: e.target.value })} value={this.state.inputMess} type="text" className="form-control" placeholder="Typing..." />
								<div className="input-group-append">
									<button className="btn btn-primary">send</button>
								</div>
							</div>
						</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	}


}


export default App;
