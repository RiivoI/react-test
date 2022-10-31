import './style.css'

const HetkeIlm = (props) => (
    <div className='klass'>
        <div className='pealkiri'><b>Hetke ilm</b></div>
        <div className='temp'><b>Temp:</b> {props.temp}</div>
        <div className='tuul'><b>Tuule kiirus:</b> {props.tuul}</div>
        <div className='kirjeldus'>{props.kirjeldus}</div>
    </div>
)

export default HetkeIlm