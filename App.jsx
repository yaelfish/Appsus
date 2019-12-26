import EmailsPage from './pages/EmailsPage.jsx';
import EmailDetails from "./pages/EmailDetails.jsx";
import SideNav from "./cmps/SideNav.jsx";
import EmailAdd from "./pages/EmailAdd.jsx";

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const { createBrowserHistory } = History
const history = createBrowserHistory()


class App extends React.Component {

    render() {
        return (
            <main>
                <Router history={history}>
                    <SideNav></SideNav>
                    <Switch>
                        <Route component={EmailsPage} path="/" exact></Route>
                        <Route component={EmailDetails} path="/email/:id" exact></Route>
                        <Route component={EmailAdd} path="/add" exact></Route>
                    </Switch>
                </Router>
            </main>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)