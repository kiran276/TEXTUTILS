import React,{useState} from 'react'
console.log()

export default function Textform(props) {
function  handleUpClick(){
  let newText =text.toUpperCase();
  setText(newText);
  props.alert("Converted to uppercase","info")
}

function  handleclear(){
  let newText ='';
  setText(newText);
}

function  handleOnChange(event){
  setText(event.target.value)

}
const [text,setText] = useState('Enter Text Here ji');
// text= "new text"; //wrong way to set the value instead we use
// setText("New Text");  //correct way of doing this

  return (<>
    <div className='container my-3' style={{color: props.mode===`light`?`black`:`white`}}>
    <h1>{props.heading}</h1>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
        <textarea class="form-control"  value={text} style={{backgroundColor: props.mode === `light`?`black`:`white`,color: props.mode===`light`?`white`:`black`}} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>Clear</button> 

    </div>
  <div className='container' style={{color: props.mode===`light`?`black`:`white`}}>
    <h1>Your Text Summary</h1><br/>
    <p>{text.split(" ").filter(function (e){ return e.length!=0}).length } Words and {text.length} Characters</p>
    <h3>PREVIEW</h3>
    <p>{text}</p>
  </div>
    </>
  )
}

