import { XCircleIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"

export default function AlertModal({ close }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="flex p-2 h-[500px] w-[700px] flex-col items-center justify-center rounded-lg border-2 border-red-700 bg-white">
        <div className="block w-full ">
          <XCircleIcon
            onClick={close}
            className="h-8 w-8 cursor-pointer"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-xl font-semibold">
            The data contained in this web app is not true to reality as I don't have acess to the airbnb api its merely
            for representation using a custom json file to show my abilities as a Frontend developer.
          </p>
        </div>
      </div>
    </div>
  )
}
