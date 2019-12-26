import EmailsService from "../services/EmailsService.js";
export default class EmailDetails extends React.Component {

    state = {
        email: null
    }

    componentDidMount() {
        this.loadEmail();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadEmail();
        }
    }

    loadEmail() {
        const { id } = this.props.match.params;
        EmailsService.getEmailById(id).then(email => {
            this.setState({ email })
        })
    }

    onGoBack = () => {
        this.props.history.push('/')
    }


    render() {
        const { email } = this.state;
        if (!this.state.email) return <div className="loading">Loading...</div>
        return (
            <section>
                <button className="btn back-btn" onClick={this.onGoBack}>Back</button>
                <div className="email-details">
                    <h2>Subject: {email.subject}</h2>
                    <p>{email.body}</p>
                    <p>{new Date(email.sentAt).toLocaleDateString()}</p>
                </div>
            </section>
        )
    }
}