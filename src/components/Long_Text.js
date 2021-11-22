const Long_Text = (props)=> {
const style = {color :props.text.length >5  ? "red" : "green"};
return (<h2 style={style}> {props.text}</h2>)
}
export default Long_Text;