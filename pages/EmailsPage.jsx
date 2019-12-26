import EmailList from "../cmps/Email/EmailList.jsx";
import EmailsService from "../services/EmailsService.js"

export default class EmailsPage extends React.Component {

    state = {
        emails: [],
        unreadEmails: []
    }

    componentDidMount() {
        this.loadEmails();
        this.loadUnreadEmails();
    }

    onDeleteMail = (emailId) => {
        EmailsService.deleteEmail(emailId);
        this.loadEmails();

    }

    loadUnreadEmails() {
        EmailsService.getUnreadEmails()
            .then(unreadEmails => this.setState({ unreadEmails }))
    }

    loadEmails = () => {
        EmailsService.getEmails()
            .then(emails => this.setState({ emails }))
    }

    render() {
        return (
            <section className="email-list-container">
                <EmailList onDeleteMail={this.onDeleteMail} emails={this.state.emails} unread={this.state.unreadEmails} loadUnread={this.loadUnreadEmails} ></EmailList>
            </section>
        )
    }
}