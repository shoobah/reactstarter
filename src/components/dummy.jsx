var React    = require('react'),
    _        = require('lodash'),
    BS = require('react-bootstrap'),
    DummyItem = require('./dummyitem.jsx'),
    Store = require('../data/dummydata');

class Dummy extends React.Component {
    constructor(props) {
        this.state = this.getState();
        super(props);
    }

    getState(){
        return{
            items: Store.getItems()
        };
    }

    itemList(){
        var listItems = [];
        _.forEach(this.state.items, function(item){
            listItems.push(
                <BS.ListGroupItem key={item.id}>
                    <DummyItem someprop={item.name} />
                </BS.ListGroupItem>
                );
        });
        return listItems;
    }

    render(){
        return(
        <div>
            <BS.ListGroup>
                {this.itemList()}
            </BS.ListGroup>
        </div>
        );
    }
}

module.exports = Dummy;