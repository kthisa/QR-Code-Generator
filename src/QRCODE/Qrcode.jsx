import { useState } from "react"
export const Qrcode = () => {
const[image,setImage]=useState("./image.png") //default image
const[loading,setLoading]=useState(false)
const[qrdata,setQrData] =useState("")//default text
const[qrSize, setSize] = useState(""); // default size
async function gen(){
    setLoading(true);
    try{
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrdata)}`;    
        setImage(url);
    }
    catch (error)
    {
       console.error("Error generating QR code",error);
    }    
    finally
    {
        setLoading(false);
    }
}
function down(){
    fetch(image).then((response)=>response.blob())
    .then((blob) => {
        const link =document.createElement("a");
        link.href=URL.createObjectURL(blob);
        link.download="qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link)
    });
}
  return (
    
    <div className="app-container">
        <h1>QR Code Generator</h1>
        {loading && <p>Please Wait...</p>}
        {image &&<img src= {image} className="qrimage1" />}

        <div>
        <label htmlFor="dataInput" className="input-label">
        Data for QR Code:   
        </label>
        <input 
            type="text" 
            value= {qrdata} 
            id="input-label" 
            placeholder="Enter data for QR Code"
            onChange={(e)=> setQrData(e.target.value)}>
          </input>

        <label htmlFor="sizeInput" className="size-label">
        Image Size (e.g.,150):
        </label>
        <input 
        type="text" 
        onChange={(e) => setSize(e.target.value)}
        value={qrSize}
        id="size-input" 
        placeholder="Enter Image Size">
        </input>

        <button className="gen-butt" onClick={(gen)}>Generate QR Code</button>
        <button className="down-butt" onClick={down}>Download QR Code</button>
        </div>
        <p className="footer">-Designed by Kthisa.</p>
    </div>
  )
}
