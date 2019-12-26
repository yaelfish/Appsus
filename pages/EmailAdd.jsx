import EmailsService from "../services/EmailsService.js";

export default class EmailAdd extends React.Component {

    state = {
        // email: {
            subject: '',
            body: ''
        // }
    }

    componentDidMount() {
        this.setState({ subject: '', body: '' });
    }


    onAddEmail = (ev) => { 
        ev.preventDefault()
        const {subject,body} = this.state
        EmailsService.addEmail({subject,body}).then(this.props.history.push('/'));
    }

    // onInputChange = (ev) => {
    //     let fieldName = ev.target.name
    //     console.log('ev.target.name: ', ev.target.name);
    //     console.log('ev.target.value: ', ev.target.value);
    //     this.setState({ email: { subject: ev.target.value}})
    //     console.log(this.state);
        
    // }

    // onTextAreaChange = (ev) => {
    //     let fieldName = ev.target.name
    //     console.log('ev.target.name: ', ev.target.name);
    //     console.log('ev.target.value: ', ev.target.value);
    //     this.setState({ email: { body: ev.target.value } })
    //     console.log(this.state);
    // }

    onInputChange= (ev) =>{
        console.log(ev.target);
        
        let fieldName = ev.target.name
        this.setState({[fieldName]: ev.target.value })
    }


    render() {
        return <React.Fragment>
        <div className="form-container">
            <h2>New Message</h2>
            <div className="inputs">
                    <input type="text" placeholder="subject " value={this.state.subject} name="subject" onChange={this.onInputChange}/>
            <textarea type="text" placeholder="" name="body" rows="15" cols="50" onChange={this.onInputChange} value={this.state.body}></textarea>
                    
                <button type="submit" className="btn btn-send" onClick={this.onAddEmail}>Send</button>
            </div>
            {/* <button onClick={this.onDelete}>Delete</button> */}
        </div>
            </React.Fragment>
    }
} 