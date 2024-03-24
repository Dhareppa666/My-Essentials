import Timer from "../Timer/Timer";


const Timers = () => {
    
    return (
      <div>
        <Timer
          startDate={"December, 15, 2023"}
          deadline={"May, 15, 2024"}
          message={"The Goal Deadline Date is: 15th May 2024"}
        />
        <div
          style={{ color: "red", border: "1px solid grey", margin: "2% 10%" }}
        ></div>

        <Timer
          startDate={"February, 9, 2024"}
          deadline={"August, 09, 2024"}
          message={"Microsoft Deadline is: 9th August 2024"}
        />
        <div
          style={{ color: "red", border: "1px solid grey", margin: "2% 10%" }}
        ></div>
      </div>
    );
}

export default Timers;