import RenderSteps from "./RenderSteps"
import IMGE from "../../../../assets/Images/aboutus1.png"

export default function AddCourse() {
  return (
      <div className="flex flex-row w-full items-start gap-x-7">
        <div className="flex flex-1 flex-col">
          <h1 className="mb-14 text-3xl font-semibold text-tblue2">
            Add Course
          </h1>
          <div className="flex-1">
            <RenderSteps />
          </div>
        </div>

        {/* <div className="flex sticky items-center justify-center">
          <img src={IMGE} alt="" className="flex rounded-lg translate-x-10"/>
        </div> */}

      </div>
  )
}
