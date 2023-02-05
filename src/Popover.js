import { Popover, ArrowContainer } from "react-tiny-popover";
import { useState, useRef } from "react";

const Pop = (props) => {
   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
   /* const clickMeButtonRef = useRef<HTMLButtonElement | undefined>(); */
   return (
      <Popover
         isOpen={isPopoverOpen}
         positions={["right", "bottom", "top", "left"]}
         padding={10}
         onClickOutside={() => setIsPopoverOpen(false)}
         /* ref={clickMeButtonRef} // if you'd like a ref to your popover's child, you can grab one here */
         content={({ position, childRect, popoverRect }) => (
            <ArrowContainer // if you'd like an arrow, you can import the ArrowContainer!
               position={position}
               childRect={childRect}
               popoverRect={popoverRect}
               arrowColor={"#7e7e7e"}
               arrowSize={5}
               arrowStyle={{}}
               className="popover-arrow-container"
               arrowClassName="popover-arrow">
               <div className="pop" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                  <h3 style={{ fontSize: "inherit", marginLeft: "1rem" }}>Note</h3>
                  <ul>
                     {props.content.map((item) => (
                        <li>{item}</li>
                     ))}
                  </ul>
               </div>
            </ArrowContainer>
         )}>
         <a className="info" onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
            {" "}
            ⓘ
         </a>
      </Popover>
   );
};

export default Pop;
