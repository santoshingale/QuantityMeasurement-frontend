import React, { Component } from 'react'
import {getConvertedUnit,getUnit} from '../Configration/Configration';
import Styles from '../snackbar.module.css'

class FirstInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            units: [],
            firstUnit: 0.0,
            firstUnitType: '',
            secondUnitType: '',
            secondUnit: 0.0,
            status: "",
            isActive: false
        }
    }

    setUnitValue = async (event) => {
        await this.setState({ firstUnit: event.target.value });
        this.submitData();
    }

    setFirstUnitType = async (event) => {
        await this.setState(({ firstUnitType: event.target.value }));
        this.submitData();
    }

    setDropdownState = async (props) => {
        await getUnit(this.props.param).then((resp) => {
            this.setState({ units: resp.data })
            console.log(this.state.units);
        })
        this.setState(({ firstUnitType: this.state.units[0] }));
        this.setState(({ secondUnitType: this.state.units[0] }));
        this.submitData();
    }

    componentWillMount = () => {
        this.setDropdownState()
    }

    setSecondUnitValue = async (event) => {
        await this.setState({ secondUnit: event.target.value });
        this.submitBySecondUnitValue();
    }

    setSecondUnitType = async (event) => {
        await this.setState(({ secondUnitType: event.target.value }));
        this.submitData();
    }

    submitBySecondUnitValue = () => {
        const unitDTO = {
            "firstUnit": this.state.secondUnit,
            "firstUnitType": this.state.secondUnitType,
            "secondUnitType": this.state.firstUnitType
        }
        this.getResponse(unitDTO, 1)
    }

    submitData = () => {
        const unitDTO = {
            "firstUnit": this.state.firstUnit,
            "firstUnitType": this.state.firstUnitType,
            "secondUnitType": this.state.secondUnitType
        }
        this.getResponse(unitDTO, 2)
    }

    getResponse = (unitDTO, fieldNo) => {
        getConvertedUnit(unitDTO).then((resp) => {
            if (fieldNo === 2) {
                this.setState({
                    secondUnit: resp.data.secondUnit
                })
            }
            else {
                this.setState({
                    firstUnit: resp.data.secondUnit
                })
            }
            this.setState({ status: resp.data.message });

        }).catch((error) => {
            this.setState({ status: error.message });
        })
        this.openSnackBar()
    }

    openSnackBar = () => {
        this.setState({ isActive: true }, () => {
            setTimeout(() => {
                this.setState({ isActive: false });
            }, 6000);
        });
    }

    render() {
        const listItems = this.state.units.map((value, index) => {
            return (
                <option key={value}>{value}</option>
            )
        })

        return (
            <div className="unitDiv">
                <input value={this.state.firstUnit} name="first" className="textBox" onChange={this.setUnitValue} /><br></br>
                <input type="text" id="fname" name="second" className="textBox" style={{ order: 2 }} value={this.state.secondUnit} onChange={this.setSecondUnitValue} /><br></br>
                <select className="dropDown" style={{ order: 3 }} value={this.state.firstUnitType} onChange={this.setFirstUnitType}>
                    {listItems}
                </select>

                <select className="dropDown" style={{ order: 4 }} value={this.state.secondUnitType} onChange={this.setSecondUnitType}>
                    {listItems}
                </select>
                <div className={this.state.isActive ? [Styles.snackbar, Styles.show].join(" ") : Styles.snackbar}>
                    {this.state.status}
                </div>
            </div>
        )
    }
}

export default FirstInput