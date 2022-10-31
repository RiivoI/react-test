const YhePaevaEnnustus = (props) => (
    <div>
        <div><b>Päev: </b>{props.ilm.day}</div>
        <div><b>Temp: </b>{props.ilm.temperature}</div>
        <div><b>Tuule kiirus: </b>{props.ilm.wind}</div>
    </div>
)
export default YhePaevaEnnustus