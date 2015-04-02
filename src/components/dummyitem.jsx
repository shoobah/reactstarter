var React    = require('react');

class DummyItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
        <div>
            <span>
                {this.props.someprop}
            </span>
        </div>
        );
    }
}

module.exports = DummyItem;