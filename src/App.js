import Tree from "react-animated-tree-v2";
import "antd/dist/antd.css";
import Icon, { RadiusBottomrightOutlined, InfoCircleFilled, InfoCircleOutlined, PictureOutlined, ConsoleSqlOutlined } from "@ant-design/icons";
import { Popover, Button, Layout, Image, Divider, notification } from "antd";
import { useState } from "react";
import { close } from "./icons";
import "./App.css";
import Select from "react-select";
import { AbbrevSearch, GeneSearch } from "./Sidebar.js";
import tree from "./tree.js";

const StyledIconTree = (props) => <Tree icons={{ /* plusIcon: plus, minusIcon: minus,  */ closeIcon: close }} {...props} />;
const DNASvg = () => (
   <svg width="1em" height="1em" viewBox="0 0 59.806117 67.561546" fill="currentColor">
      <path d="M 10.787109,0.47265625 C 9.0926268,0.45854478 7.6657861,0.93763294 7.1582031,1.4863281 c 0.4371855,1.2254362 1.744476,2.4645351 3.2968749,3.4316407 6.581337,4.1000311 16.421591,7.4485152 22.837891,9.8613282 1.544462,0.55525 3.156157,0.992465 4.552734,1.509765 -0.0079,0.003 -0.0155,0.006 -0.02344,0.0098 C 25.227845,21.034081 25.14958,20.94661 12.759763,25.832065 3.0635167,29.655262 0.48693735,33.291557 0.71679688,39.494141 0.89367873,44.267004 4.2006102,48.023029 11.482422,51.462891 4.1797019,54.645933 0.31481384,58.551313 0.4765625,62.630859 c 0.0546142,1.378583 0.3140772,2.539839 0.8242187,3.580079 1.2380448,0.858025 4.1952707,1.434886 6.0273438,0.02734 C 6.9630326,65.493851 6.7286205,64.555774 6.6035156,63.578125 H 41.896484 c 1.212209,0.831391 2.406352,1.747226 2.992188,2.306641 2.675784,1.293014 6.809099,1.414348 7.822266,-0.07227 -0.9884,-0.943786 -2.562273,-2.328789 -4.0625,-3.375 -6.014639,-4.19452 -15.861041,-7.223944 -22.277344,-9.636719 -1.543839,-0.555061 -3.012114,-1.0864 -4.408203,-1.603515 0.0072,-0.003 0.01273,-0.004 0.01953,-0.0078 C 34.576842,46.454205 34.6551,46.539723 47.044921,41.654306 56.741182,37.8309 59.31775,34.194729 59.087891,27.992188 58.911009,23.219665 55.604931,19.463069 48.324219,16.023438 55.62545,12.840546 59.489866,8.9345614 59.328125,4.8554688 59.273511,3.4768862 59.014048,2.31563 58.503906,1.2753906 56.469489,0.22781909 54.111896,0.30895328 52.476562,1.2109375 l 0.05469,0.390625 c 0.392804,0.8009446 0.601562,1.6188529 0.703125,2.5800781 H 18.328125 C 16.978553,3.2825165 15.57017,2.2261627 14.916016,1.6015625 13.583726,0.79393891 12.105041,0.48363184 10.787109,0.47265625 Z M 22.507812,6.4785156 H 53.123047 C 52.296705,9.3354046 48.612695,11.729211 43.492188,14.001953 41.84693,13.384152 40.064949,12.772276 38.130859,12.162109 32.439676,10.022007 28.244847,9.1842544 22.507812,6.4785156 Z M 42.748047,18.191406 c 6.293014,2.579007 10.338936,4.999527 11.488281,8.34375 H 20.853516 c 11.053921,-4.261285 12.723315,-4.895547 21.894531,-8.34375 z M 15.289062,28.841797 h 39.291016 c -0.03693,3.591751 -2.575893,6.15434 -8.03125,8.859375 H 5.296875 c 0.5009623,-3.500018 3.7138092,-6.037451 9.992187,-8.859375 z M 5.328125,39.96875 h 36.068359 c -0.780209,0.316648 -1.524238,0.627553 -2.378906,0.957031 -11.13913,4.294148 -12.763657,4.911138 -21.960937,8.369141 C 10.165053,46.47064 5.9760922,43.834233 5.328125,39.96875 Z M 16.3125,53.486328 c 1.645209,0.617764 3.429263,1.229677 5.363281,1.839844 5.882037,2.211871 10.160928,3.024898 16.201172,5.955078 H 6.609375 c 0.6631269,-2.97822 4.419927,-5.449939 9.703125,-7.794922 z" />
   </svg>
);
const DNAIcon = (props) => <Icon component={DNASvg} {...props} />;

const App = () => {
   const [expandedIDs, setExpandedIDs] = useState([]);

   const setTreeIDs = (childrenArr, parentID) => {
      childrenArr.forEach((item, index) => {
         if (item.name) {
            item.id = parentID ? parentID + "-" + index : "" + index;
            item.children && setTreeIDs(item.children, item.id);
         }
      });
   };

   setTreeIDs(tree, "");

   const generateTree = (arr, parentIndexes = []) => {
      return arr.map((item, index) =>
         item.name ? (
            <StyledIconTree
               key={item.id}
               onItemToggle={(e, isOpen) => {
                  setExpandedIDs((prevIDs) => prevIDs.filter((id) => !id.includes(item.id)));
                  isOpen && setExpandedIDs((prevIDs) => [...prevIDs, item.id]);
               }}
               open={expandedIDs.includes(item.id)}
               content={
                  <span className={expandedIDs.includes(item.id) ? "open" : ""}>
                     {item.name}
                     {item.gene ? (
                        <Popover placement="right" overlayStyle={{ maxWidth: "30%" }} content={item.gene} trigger="click">
                           <Button className="icon-button">
                              <DNAIcon style={{ color: "purple" }} />
                           </Button>
                        </Popover>
                     ) : (
                        ""
                     )}
                     {item.note ? (
                        <Popover
                           placement="right"
                           overlayStyle={{ maxWidth: "30%" }}
                           content={item.note.map((singleNote, index) => (
                              <>
                                 <p style={{ marginBottom: 0 }}>{singleNote}</p>
                                 {index < item.note.length - 1 && <hr class="line" />}
                              </>
                           ))}
                           trigger="click">
                           <Button className="icon-button">
                              <InfoCircleOutlined style={{ color: "#4287f5" }} />
                           </Button>
                        </Popover>
                     ) : (
                        ""
                     )}
                     {item.picture ? (
                        <Popover
                           placement="right"
                           overlayStyle={{ maxWidth: "30%" }}
                           content={
                              <Image.PreviewGroup>
                                 {item.picture.map((source) => (
                                    <div style={{ padding: "3px" }}>
                                       <Image width={"100%"} src={source} />
                                    </div>
                                 ))}
                              </Image.PreviewGroup>
                           }
                           trigger="click">
                           <Button className="icon-button">
                              <PictureOutlined style={{ color: "#344feb" }} />
                           </Button>
                        </Popover>
                     ) : (
                        ""
                     )}
                  </span>
               }>
               {item.children && generateTree(item.children, [...parentIndexes, index])}
            </StyledIconTree>
         ) : (
            item
         )
      );
   };
   const search = (treebranch, id) => {
      if (id) {
         var dashIndex = id.indexOf("-");
         var index = dashIndex >= 0 ? (index = parseInt(id.substring(0, dashIndex))) : (index = parseInt(id));
         dashIndex >= 0 && search(treebranch[index].children, id.substring(id.indexOf("-") + 1));
         setExpandedIDs((prevIDs) => [...prevIDs, treebranch[index].id]);
      }
   };

   const clear = () => {
      setExpandedIDs([]);
   };

   const openAll = (arr) => {
      arr.forEach((item) => {
         if (item.name) {
            setExpandedIDs((prevIDs) => [...prevIDs, item.id]);
            item.children && openAll(item.children);
         }
      });
   };

   const generateOptions = (treebranch, options) => {
      treebranch.forEach((item) => {
         if (item.name && item.name !== "Others") {
            options.push({ value: item.id, label: item.name });
            item.children && generateOptions(item.children, options);
         }
      });
      return options;
   };

   var options = generateOptions(tree, []);

   const highlightOpen = () => {
      var open = document.getElementsByClassName("open");
      console.log(open);
      Array.from(open).forEach((highlight, index) => {
         highlight.classList.add("highlight");
         setTimeout(() => highlight.classList.remove("highlight"), 2000);
      });
      open[open.length - 1].scrollIntoView({ block: "center", behavior: "smooth" });
   };
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <div style={{ /* For independent --> padding: "3% 8%" */ padding: "2.5%" }}>
         {/* For independent --> <h2 style={{ margin: "2rem auto" }}>ISSVA Classification for Vascular Anomalies</h2> */}
         <div className="controls">
            <div style={{ gridArea: "search" }}>
               <Select
                  isClearable={true}
                  /* value="one" */
                  options={options}
                  placeholder="Search..."
                  onInputChange={(value) => setMenuOpen(value !== "")}
                  menuIsOpen={menuOpen}
                  onChange={(option) => {
                     if (option) {
                        clear();
                        search(tree, option.value);
                        setTimeout(highlightOpen, 2000);
                     }
                  }}
               />
            </div>

            <Button style={{ gridArea: "open" }} onClick={() => openAll(tree)}>
               Open All
            </Button>
            <Button style={{ gridArea: "close" }} onClick={() => clear()}>
               Close All
            </Button>
         </div>
         <div style={{ margin: "1rem auto 8rem auto" }}>{generateTree(tree)}</div>

         <footer className="fixed-btn-group">
            <GeneSearch />
            <AbbrevSearch />
         </footer>
      </div>
   );
};

export default App;
