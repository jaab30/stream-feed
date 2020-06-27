import React from 'react'
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import history from "../history";
import { connect } from "react-redux";
import { getStream, deleteStream } from "../actions";

class StreamDelete extends React.Component {

    componentDidMount() {

        this.props.getStream(this.props.match.params.id)

    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => this.props.deleteStream(id)} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    render() {
        console.log(this.props);

        return (
            <Modal
                title="Delete Stream"
                content={!this.props.stream ? `Are you sure you want to delete the stream with title:` : `Are you sure you want to delete the stream with title: ${this.props.stream.title}`}
                actions={this.renderActions()}
                onDismiss={() => history.push("/")}
            />
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { getStream, deleteStream })(StreamDelete);
