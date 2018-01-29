import React from "react";
import "./ButtoneGroup.css";

class ButtonGroup extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-1">`
                        <h1>ButtonGroup</h1>
                    </div>
                </div>
                <div className="row">
                        {this.getContent()}
                </div>
            </div>

        );
    }

    getContent() {
        return this.props.data.map((data) => {
            return (
                <div key={data.key} className="col-sm-12 col-md-6 col-lg-4 ">
                    <button type="button"
                            onClick={this.props.onclick.bind(this, data.key)}
                            className="btn btn-shadow btn-primary btn-lg btn-block active mt-2">{data.name}</button>
                </div>
            );
        })
    }
}

export default ButtonGroup;