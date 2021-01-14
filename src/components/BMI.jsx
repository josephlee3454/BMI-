import React from 'react'
import BmiCalculator from './BmiCalculator'

const BMI =() =>{
    return (
        <>
            <div className="calculator">
                <h3>Bdy Mass Index Calculator</h3>
                <div className="bmi-result-container">
                    <div className="bmi-result">
                        <div className="bmit-result-number">
                                bmi = result
                        </div>
                        <div className={`bmi-category`}>
                            under weight 

                        </div>

                    </div>

                </div>
                <BmiCalculator/>
            </div>
        </>
    )
}

export default BMI
