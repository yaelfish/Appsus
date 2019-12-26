const { Link } = ReactRouterDOM

export default class EmailPreview extends React.Component {

    state = {
        isUnread: ''
    }

    componentDidMount() {
        this.MarkUnread();
    }

    MarkUnread = () => {
        this.props.unread.forEach(mail => {
            if (mail.id == this.props.email.id) {
                this.setState({ isUnread: 'black' })
            }
        })
    }

    onDeleteMail = () => {
        // console.log(this.props.unread);
        this.props.onDeleteMail(this.props.email.id);
    }

    render() {
        // console.log(this.props.email);
        
        return (
            <li className="email-preview">
                <h2 className={this.state.isUnread}>{this.props.email.subject}</h2>
                <p>{this.props.email.body}</p>
                <div className="preview-btns-container">
                    <Link to={`/email/${this.props.email.id}`}><button onClick={this.onMarkAsRead}>Details</button></Link>
                    <button onClick={this.onDeleteMail}>🗑️</button>
                    <h4>{new Date(this.props.email.sentAt).toLocaleDateString()}</h4>
                </div>
            </li>
        )
    }
}
