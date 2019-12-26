const { NavLink } = ReactRouterDOM

export default class SideNav extends React.Component {

    render() {
        return <nav>
            <ul>
                <li>
                    <NavLink to='/add'><button className="compose-btn">Compose +</button></NavLink>
                </li>
            </ul>
        </nav>
    }
}