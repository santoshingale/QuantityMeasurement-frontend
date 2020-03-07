import React, { Component } from 'react'
import FirstInput from './InputFields';
import { unitGroup } from './UnitArray';
class UnitSelector extends Component {

    constructor() {
        super()
        this.state = {
            unitGroup: "LENGTH"
        }

        this.firstInput = React.createRef()
    }

    selectUnitGroup = async (event) => {
        await this.setState(({ unitGroup: event.target.value }));
        this.firstInput.current.setDropdownState(this.state.unitGroup)
    }

    render() {
        const key = Object.keys(unitGroup[0])
        const listItems = key.map((value, index) => {
            return (
                <option key={index}>{value}</option>
            )
        });
        return (
            <div className="subDiv">
                <select className="unitSelector" value={this.state.UnitSelector} onChange={this.selectUnitGroup}>
                    {listItems});
                </select>
                <FirstInput ref={this.firstInput} param={this.state.unitGroup} />
            </div>
        )
    }
}

export default UnitSelector
