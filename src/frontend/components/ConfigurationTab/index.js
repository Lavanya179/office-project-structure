mport React, { Component } from "react";
import { GVPanel } from "grassvalley";
import { ConfigurationContainer, ControlPointsList, ControlPointItem, DeleteImg } from "./style.js";

class ConfigurationTabView extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            newControlPointName: ""
        };
    }

    componentDidMount() {
        this.props.fetchServiceInfo();
        this.props.fetchControlPoints();
    }

    render() {
        return (
            <div>
                <GVPanel title="Ganging Configuration">
                    <ConfigurationContainer>
                        <div>ServiceInfo: {this.props.serviceInfo}</div>
                        <h2>ControlPoints</h2>
                        {this.props.controlPoints && this.props.controlPoints.error && (
                            <span>{"Error: " + this.props.controlPoints.error}</span>
                        )}
                        <ControlPointsList>
                            {_.map(this.props.controlPoints && this.props.controlPoints.controlPoints, controlPoint => {
                                return (
                                    <ControlPointItem key={controlPoint}>
                                        <span>{controlPoint}</span>
                                        <button onClick={() => this.deleteControlPoint(controlPoint)}>Delete</button>
                                    </ControlPointItem>
                                );
                            })}
                        </ControlPointsList>
                        <div>
                            <input
                                type="string"
                                placeholder="Enter new Control Point name"
                                value={this.state.newControlPointName}
                                onChange={e => this.changeNewControlPointName(e)}
                            />
                            <button onClick={() => this.addControlPoint()}>Add</button>
                        </div>
                    </ConfigurationContainer>
                </GVPanel>
            </div>
        );
    }

    changeNewControlPointName(e) {
        this.setState({ newControlPointName: e.target.value });
    }

    addControlPoint() {
        if (this.state.newControlPointName) {
            var newControlPointList = _.union(this.props.controlPoints && this.props.controlPoints.controlPoints, [
                this.state.newControlPointName
            ]);
            this.props.setControlPoints(newControlPointList);
            this.setState({ newControlPointName: "" });
        }
    }

    deleteControlPoint(controlPoint) {
        if (this.props.controlPoints) {
            var newControlPointList = _.without(this.props.controlPoints.controlPoints, controlPoint);
            this.props.setControlPoints(newControlPointList);
            this.setState({ newControlPointName: "" });
        }
    }
}

export default ConfigurationTabView;