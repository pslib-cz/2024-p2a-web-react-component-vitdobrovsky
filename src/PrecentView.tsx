import { FC } from "react";


type PercentViewType = {
    value: number,
    maxValue: number,
    makeColor: (percent: number) => string
}


const PercentView: FC<PercentViewType> = ({value, maxValue, makeColor}) => {


    const styles = {
        backgroundColor: makeColor(value / maxValue * 100),
        border: "2px solid black"
    }

    const barStyles = {
        width: value / maxValue * 100
    }

    return (
        <>
        <p style={styles}>{value / maxValue * 100}%</p>
        <div style={barStyles}>

        </div>
        </>
    )
}


export default PercentView;