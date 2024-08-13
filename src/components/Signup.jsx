import { useState } from "react";

function Signup (props)
{
    const[name,setName]=useState("");
    console.log(name);
    return(
        <>
        <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <label>Name:</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value);
            props.setingName(name);
        }}></input>
      
        <button className="btn">Close</button>
      </form>
      
    </div>
  </div>
</dialog>
        </>
    );
}
 export default Signup;