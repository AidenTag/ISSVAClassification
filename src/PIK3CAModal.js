import { useState } from "react";

import { Button, Modal } from "antd";

const PIK3CAModal = (props) => {
   const [modalShow, setModalShow] = useState(false);
   return (
      <>
         <a type="link" onClick={() => setModalShow(true)}>
            PIK3CA
         </a>
         <Modal
            title="PIK3CA-Related Overgrowth Spectrum"
            style={{ zIndex: 1050 }}
            visible={modalShow}
            onOk={() => setModalShow(false)}
            onCancel={() => setModalShow(false)}
            footer={[
               <Button key="Close" onClick={() => setModalShow(false)}>
                  Close
               </Button>,
            ]}>
            <p>
               PIK3CA-related overgrowth spectrum (PROS) groups lesions without heterogenous segmental overgrowth phenotypes--with or without vascular
               anomalies--due to somatic PIK3CA activating mutations.
            </p>
            <br />
            <p>This spectrum includes:</p>
            <ul>
               <li>Fibroadipose hyperplasia or Overgrowth (FAO)</li>
               <li>Hemihyperplasia Multiple Lipomatosis (HHML)</li>
               <li>Congenital Lipomatous Overgrowth, Vascular Malformations, Epidermal Nevi, Scoliosis/Skeletal and Spinal (CLOVES) syndrome</li>
               <li>Macrodactyly</li>
               <li>Fibroadipose Infiltrating Lipomatosis / Facial Infiltrative Lipomatosis</li>
               <li>Megalencephaly-Capillary Malformation (MCAP or M-CM)</li>
               <li>Dysplastic Megalencephay (DMEG)</li>
               <li>Klippel-Trenaunay syndrome</li>
               <li>Generalized lymphatic anomaly (GLA)</li>
            </ul>
         </Modal>
      </>
   );
};

export default PIK3CAModal;
