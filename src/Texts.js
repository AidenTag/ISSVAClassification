import { Row, Col, Popover } from "antd";

import PIK3CAModal from "./PIK3CAModal";
import { InfoCircleOutlined } from "@ant-design/icons";

const combinedAnomaliesList = [
   {
      combo: "CM + VM",
      name: "capillary-venous malformation",
      abbr: "CVM",
   },
   {
      combo: "CM + LM",
      name: "capillary-lymphatic malformation",
      abbr: "CLM",
   },
   {
      combo: "CM + AVM",
      name: "capillary-arteriovenous malformation",
      abbr: "CAVM",
   },
   {
      combo: "LM + VM",
      name: "lymphatic-venous malformation",
      abbr: "LVM",
   },
   {
      combo: "CM + LM + VM",
      name: "capillary-lymphatic-venous malformation",
      abbr: "CLVM",
   },
   {
      combo: "CM + LM + AVM",
      name: "capillary-lymphatic-arteriovenous malformation",
      abbr: "CLAVM",
   },
   {
      combo: "CM + VM + AVM",
      name: "capillary-venous-arteriovenous malformation",
      abbr: "CVAVM",
   },
   {
      combo: "CM + LM + VM + AVM",
      name: "capillary-lymphatic-venous-arteriovenous malformation",
      abbr: "CLVAVM",
   },
];

export const combinedVascMalformationText = (
   <div>
      <h4 style={{ textAlign: "center" }}>
         Combined vascular malformations{" "}
         <Popover content={"Defined as two or more vascular malformatiosn found in one lesion"}>
            <InfoCircleOutlined />
         </Popover>
      </h4>
      <div className="three-col-grid">
         {combinedAnomaliesList.map((anomaly) => (
            <>
               <div>{anomaly.combo}</div>
               <div>{anomaly.name}</div>
               <div>{anomaly.abbr}</div>
            </>
         ))}
      </div>
      <p>
         <strong>Definitions</strong>: CM (capillary malformation), VM (venous malformation), AVM (arteriovenous malformation), LM (lymphatic
         malformation)
      </p>
   </div>
);

export const anomaliesOfMajorVessels = (
   <div style={{ fontSize: "smaller" }}>
      <p>Affect</p>
      <ul>
         <li>lymphatics</li>
         <li>veins</li>
         <li>arteries</li>
      </ul>
      <p>Anomalies of</p>
      <ul>
         <li>origin</li>
         <li>course</li>
         <li>number</li>
         <li>length</li>
         <li>diameter (aplasia, hypoplasia, stenosis, ectasia / aneurysm)</li>
         <li>valves</li>
         <li>communication (AVF)</li>
         <li>persistence (of embryonal vessel)</li>
      </ul>
   </div>
);

const associatedWithOtherAnomaliesList = [
   {
      name: "Klippel-Trenaunay syndrome",
      assoc: "CM + VM ± LM + limb overgrowth",
      gene: <PIK3CAModal />,
   },
   {
      name: "Parkes Weber syndrome",
      assoc: "CM + AVF + limb overgrowth",
      gene: "RASA1",
   },
   {
      name: "Servelle-Martorell syndrome",
      assoc: "limb VM + bone undergrowth",
   },
   {
      name: "Sturge-Weber syndrome",
      assoc: "facial + leptomeningeal CM + eye anomalies ± bone and/or soft tissue overgrowth",
      gene: "CNAQ",
   },
   {
      name: "Limb CM + congenital non-progressive limb overgrowth",
      gene: "GNA11",
   },
   {
      name: "Maffucci syndrome",
      assoc: "VM ± spindle-cell hemangioma + enchondroma ± chondrosarcoma",
      gene: "IDH1 / IDH2",
   },
   {
      name: "Macrocephay - CM (M-CM / MCAP)",
      gene: <PIK3CAModal />,
   },
   {
      name: "Microcephaly - CM (MICCAP)",
      gene: "STAMBP",
   },
   {
      name: "CLOVES syndrome",
      assoc: "LM + VM + CM ± AVM + lipomatous overgrowth",
      gene: <PIK3CAModal />,
   },
   {
      name: "Proteus syndrome",
      assoc: "CM, VM and/or LM + asymmetrical somatic overgrowth",
      gene: "AKT1",
   },
   {
      name: "Bannayan-Riley-Ruvalcaba syndrome",
      assoc: "AVM + VM + macrocephay, lipomatous overgrowth",
      gene: "PTEN",
   },
   {
      name: "CLAPO syndrome",
      assoc: "lower lip CM + face and neck LM + asymmmetry and partial/generalized overgrowth",
      gene: <PIK3CAModal />,
   },
];

export const associatedWithOtherAnomalies = (
   <div className="three-col-grid">
      {associatedWithOtherAnomaliesList.map((anomaly) => (
         <>
            <div>{anomaly.name}</div>
            <div>{anomaly?.assoc}</div>
            <div>{anomaly?.gene}</div>
         </>
      ))}
   </div>
);
