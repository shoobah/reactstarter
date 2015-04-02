var React    = require('react'),
    Dummy = require('./components/dummy.jsx'),
    Router = require('react-router'),
    DummyData = require('./data/dummydata'),
    BS = require('react-bootstrap'),
    RBS = require('react-router-bootstrap');


require('./styles/bootstrap.min.css');
require('./styles/font-awesome.min.css');
require('./styles/style.scss');

var DefaultRoute = Router.DefaultRoute;
// var NotFoundRoute = Router.NotFoundRoute;
// var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;
    // <Route name="about" handler={About} />
    // <Route name="users" handler={Users}>
    //   <Route name="recent-users" path="recent" handler={RecentUsers} />
    //   <Route name="user" path="/user/:userId" handler={User} />
    //   <NotFoundRoute handler={UserRouteNotFound}/>
    // </Route>

var routes = (
  <Route handler={App} path="/">
    <Route name="dummy" handler={Dummy} />
    <DefaultRoute handler={Dummy}/>
    <Redirect from="home" to="/" />
  </Route>
);
    // <NotFoundRoute handler={App}/>

class App extends React.Component {
    constructor(){
        this.state= this.getState();
    }
    getState(){
        return{
            items: DummyData.getItems()
        };
    }
    getCartHeader(){
        var d = this.state.itemsInCart;
        if(d && d.length > 0){
            return(
                <div>Du har {d.length} saker i varukorgen</div>
            );
        }
        return null;
    }

    onStoreChange(){
        this.setState(this.getState());
    }

    componentDidMount(){
        DummyData.addChangeListener(this.onStoreChange.bind(this));
    }

    componentWillUnmount(){
        DummyData.removeChangeListener(this.onStoreChange.bind(this));
    }

    render() {
        return (
            <div>
                <BS.Nav navbar bsStyle="pills" className="navbar-inverse navbar-fixed-top">
                        <RBS.ButtonLink to="/"><i className="fa fa-home" /> Hem</RBS.ButtonLink>
                </BS.Nav>
               	<div className="BS.container" style={{paddingTop:'65px'}}>
                    <RouteHandler />
                </div>
            </div>
        );
    }
}

Router.run(routes, Router.HistoryLocation, function(Handler){
    React.render(<Handler />, document.getElementById('app'));
});

