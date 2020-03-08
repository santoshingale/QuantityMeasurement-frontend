import React, { Component } from 'react'
import InputFields from './InputFields';
import getUnitType from '../Configration/UnitTypeConfig';
class UnitSelector extends Component {

    constructor() {
        super()
        this.state = {
            unitGroup: "LENGTH",
            unitTypes: []
        }
        this.firstInput = React.createRef()
    }

    UNSAFE_componentWillMount = () => {
        getUnitType().then((resp) => {
            this.setState({ unitTypes: resp.data })
            this.setState({ unitGroup: resp.data[0] })
        })
    }

    selectUnitGroup = async (event) => {
        await this.setState(({ unitGroup: event.target.value }));
        this.firstInput.current.setDropdownState(this.state.unitGroup)
    }

    render() {
        const unitTypelist = this.state.unitTypes.map((value, index) => {
            return (
                <option key={index}>{value}</option>
            )
        });
        return (
            <div className="subDiv">
                <select className="unitSelector" value={this.state.UnitSelector} onChange={this.selectUnitGroup}>
                    {unitTypelist});
                </select>
                <InputFields ref={this.firstInput} param={this.state.unitGroup} />
            </div>
        )
    }
}

export default UnitSelector
