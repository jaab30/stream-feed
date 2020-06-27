import React from "react"
import _ from "lodash";
import { connect } from "react-redux";
import { getStream, editStream } from "../actions";
import StreamForm from "../components/StreamForm";


class StreamEdit extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getStream(id)
    }

    onSubmit = formValues => {

        this.props.editStream(this.props.match.params.id, formValues)
    }

    render() {

        if (!this.props.stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.stream, "title", "description")} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    return {
        stream: state.streams[id]
    }
}


export default connect(mapStateToProps, { getStream, editStream })(StreamEdit)
