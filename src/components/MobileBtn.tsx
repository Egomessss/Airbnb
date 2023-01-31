import React from "react"

function MobileBtn(props:any) {
  return (
    <div>
      <button className="w-[342px] h-[48px] border-[1.5px] rounded-lg border-black font-semibold">
        <a href={props.link}> {props.text}</a>
      </button>
    </div>
  )
}

export default MobileBtn
