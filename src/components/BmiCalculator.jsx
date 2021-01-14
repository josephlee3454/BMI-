import React, {useState} from 'react'
import FormInput from './FormInput'

const BmiCalculator = () => {
    const [heightUnit, setHeightUnit] = useState("")//state varible that will allow us to set the hieght 
    const [weightUnit, setweightUnit] = useState("")// state var for the wieght
    const [unit, setUnits] = useState("") //state for unit 

    const onChangeInput = e =>{

    }
    const onSelectTag = (e) => {
        setUnits(e.target.value);// sets value of of the option value 
        if (e.target.value === "Metric"){
            setHeightUnit('cm');
            setweightUnit('kg')
        }else {
            setHeightUnit('in')
            setweightUnit('lbs')
        }

    }
    return (
        <>
        <div className="bmi-inputs">
            <div className="input-fields">
                <div>
                    <span className="label-unit">unit</span>
                    <div className="unit">
                        <select
                        name="unit"
                        value={unit}
                        onChange={onSelectTag}
                        className="form-control form-control-sm"
                        >
                            <option value="Metric">Metric</option>
                            <option value="Imperial">Imperial</option>
                        </select>
                    </div>
                </div>
                <FormInput 
                    type="text"
                    name="heightCount"
                    title={`Height (${heightUnit})`}
                    value=""
                    onChange = {onChangeInput}
                />
                {
                unit === 'Imperial' ?
                  <FormInput 
                type="text"
                name="inchesCount"
                title={`inches (in)`}
                value=""
                onChange = {onChangeInput}
                /> :''
                }

                  <FormInput 
                type="text"
                name="weightCount"
                title={`wieght (${weightUnit})`}
                value=""
                onChange = {onChangeInput}

                />
            </div>
            <button className="button" type="submit">reset</button>
            
        </div>
        
        </>
    )
}

export default BmiCalculator
