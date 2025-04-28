// import Progress from "../../graphics/progress.svg";
// import AiAssitance from "../../graphics/ai_assistance.svg";
// import Templates from "../../graphics/templates.svg";
// import Collaborate from "../../graphics/collaborate.svg";

// const About = () => {
//   return (
//     <div className="pt-24 px-6 sm:px-10 md:px-16 xl:px-32">
//     {/* <div className="pt-36"> */}
//       <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16 leading-snug">
//       {/* <h2 className="text-5xl font-semibold text-center mb-10"> */}
//         Productivity Made <span className="text-indigo-600">Simple</span>,{" "}
//         <span className="text-indigo-600">Powerful</span>, and{" "}
//         <span className="text-indigo-600">Fun</span>
//       </h2>

//       <div className="space-y-24">
//       {/* <div className="mx-32 mt-32"> */}
//         <div className="flex gap-36 items-center mb-32">
//           <img src={Progress} className="w-1/2 pointer-events-none select-none" />
//           <div className="w-1/2">
//             <div className="font-semibold text-3xl">
//               Visualize your Productivity
//             </div>
//             <br></br>
//             <ul className="text-xl text-gray-600 list-disc">
//               <li>
//                 Get a clear picture of your productivity with our Calendar &
//                 Consistency Graph.
//               </li>
//               <li>
//                 See daily task completions at a glance and monitor your streaks
//                 over days, weeks, and months to stay motivated and on track.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex gap-36 items-center mb-32">
//           <div className="w-1/2">
//             <div className="font-semibold text-3xl">
//               AI Assistance at Your Fingertips
//             </div>
//             <div className="text-xl font-semibold my-2 text-gray-600">
//               Ask <span className="text-indigo-600">Jerry</span> Anything
//             </div>
//             <p className="text-gray-600 text-xl">
//               Need a nudge? Jerry is here to assist, offering insights, tips,
//               and guidance to make your task management smoother.
//             </p>
//           </div>
//           <img src={AiAssitance} className="w-1/2 pointer-events-none select-none" />
//         </div>

//         <div className="flex gap-36 items-center mb-32">
//           <img src={Templates} className="w-1/2 pointer-events-none select-none" />
//           <div className="w-1/2">
//             <div className="font-semibold text-3xl">
//               Tailored Templates for Every Workflow
//             </div>
//             <br></br>
//             <ul className="text-xl text-gray-600 list-disc">
//               <li>
//                 Start your projects with ease using our customizable templates.
//               </li>
//               <li>
//                 From Kanban boards to weekly planners, TaskJar provides the
//                 right tools for every task, helping you save time and stay
//                 efficient.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="flex gap-36 items-center mb-32">
//           <div className="w-1/2">
//             <div className="font-semibold text-3xl">Create & Collaborate</div>
//             <br></br>
//             <p className="text-gray-600 text-xl">
//               Collaborate seamlessly by sharing Jars with your team. Assign
//               tasks, monitor progress, and communicate effectively—all within
//               TaskJar.
//             </p>
//           </div>
//           <img src={Collaborate} className="w-1/2 pointer-events-none select-none" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import Progress from "../../assets/graphics/progress.svg";
import AiAssitance from "../../assets/graphics/ai_assistance.svg";
import Templates from "../../assets/graphics/templates.svg";
import Collaborate from "../../assets/graphics/collaborate.svg";

const About = () => {
  return (
    <div className="pt-24 px-6 sm:px-10 md:px-16 xl:px-32">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16 leading-snug">
        Productivity Made <span className="text-indigo-600">Simple</span>,{" "}
        <span className="text-indigo-600">Powerful</span>, and{" "}
        <span className="text-indigo-600">Fun</span>
      </h2>

      <div className="space-y-24">
        {[{
          img: Progress,
          title: "Visualize your Productivity",
          list: [
            "Get a clear picture of your productivity with our Calendar & Consistency Graph.",
            "See daily task completions at a glance and monitor your streaks over days, weeks, and months to stay motivated and on track."
          ],
          reverse: false,
        }, {
          img: AiAssitance,
          title: "AI Assistance at Your Fingertips",
          subTitle: "Ask Jerry Anything",
          text: "Need a nudge? Jerry is here to assist, offering insights, tips, and guidance to make your task management smoother.",
          reverse: true,
        }, {
          img: Templates,
          title: "Tailored Templates for Every Workflow",
          list: [
            "Start your projects with ease using our customizable templates.",
            "From Kanban boards to weekly planners, TaskJar provides the right tools for every task, helping you save time and stay efficient."
          ],
          reverse: false,
        }, {
          img: Collaborate,
          title: "Create & Collaborate",
          text: "Collaborate seamlessly by sharing Jars with your team. Assign tasks, monitor progress, and communicate effectively—all within TaskJar.",
          reverse: true,
        }].map((section, i) => (
          <div
            key={i}
            className={`flex flex-col ${section.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-20`}
          >
            <img
              src={section.img}
              className="w-full lg:w-1/2 pointer-events-none select-none"
              alt="Section"
            />
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3">
                {section.title}
              </h3>
              {section.subTitle && (
                <p className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">
                  {section.subTitle.includes("Jerry") ? (
                    <>Ask <span className="text-indigo-600">Jerry</span> Anything</>
                  ) : section.subTitle}
                </p>
              )}
              {section.list ? (
                <ul className="list-disc text-gray-600 text-lg sm:text-xl space-y-2">
                  {section.list.map((item, idx) => <li key={idx}>{item}</li>)}
                </ul>
              ) : (
                <p className="text-gray-600 text-lg sm:text-xl">{section.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;