import Select, { createFilter } from "react-select";
import { useState } from "react";
import PIK3CAModal from "./PIK3CAModal";
import { SearchOutlined } from "@ant-design/icons";
import { Button, notification } from "antd";

const AbbrevSearch = () => {
   const [disabled, setDisabled] = useState(false);

   return (
      <Button
         type="primary"
         shape="round"
         disabled={disabled}
         onClick={() => {
            notification.open({
               key: "abbrev",
               message: <h3>Abbreviation Search</h3>,
               description: <AbbrevSelect />,
               duration: 0,
               onClose: () => setDisabled(false),
            });
            setDisabled(true);
         }}>
         <SearchOutlined />
         Abbreviations
      </Button>
   );
};

const GeneSearch = () => {
   const [disabled, setDisabled] = useState(false);

   return (
      <Button
         type="primary"
         shape="round"
         disabled={disabled}
         onClick={() => {
            notification.open({
               key: "gene",
               message: <h3>Gene Search</h3>,
               description: <GeneSelect />,
               duration: 0,
               onClose: () => setDisabled(false),
               style: { fontSize: "inherit" },
            });
            setDisabled(true);
         }}>
         <SearchOutlined />
         Genes
      </Button>
   );
};

const GeneSelect = () => {
   const [result, setResult] = useState("");
   return (
      <div>
         <Select
            styles={{
               menuList: (styles) => ({
                  ...styles,
                  height: "10em",
               }),
            }}
            isClearable={true}
            isSearchable={true}
            options={genesOptions}
            placeholder="Search genes..."
            filterOptions={createFilter({ matchFrom: "start" })}
            onChange={(option) => setResult(option)}
         />
         <div style={{ margin: "6px 10px", minHeight: "10em" }}>{result && result.value}</div>
      </div>
   );
};

const AbbrevSelect = () => {
   const [result, setResult] = useState("");
   return (
      <div>
         <Select
            styles={{
               menuList: (styles) => ({
                  ...styles,
                  height: "10em",
               }),
            }}
            isClearable={true}
            isSearchable={true}
            options={abbreviationOptions}
            placeholder="Search abbreviations..."
            onChange={(option) => setResult(option)}
         />
         <div style={{ margin: "6px 10px", height: "10em" }}>{result && result.value}</div>
      </div>
   );
};

const genesOptions = [
   {
      label: "ACVRL1",
      value: "Telangiectasia, AVM and AVF of HHT2",
   },
   {
      label: "AKT1",
      value: "Proteus syndrome",
   },
   {
      label: "BRAF",
      value: "Pyogenic granuloma (PG)",
   },
   {
      label: "CAMTA1",
      value: "Epitheliod hemangioendothelioma (EHE)",
   },
   {
      label: "CCBE1",
      value: "Primary generalized lymphatic anomaly (Hennekam lymphangiectasia-lymphedema syndrome)",
   },
   {
      label: "ELMO2",
      value: "Familial intraosseous vascular malformation VMOS",
   },
   {
      label: "ENG",
      value: "Telangiectasia, AVM and AVF of HHT1",
   },
   {
      label: "EPHB4",
      value: "CM-AVM 2",
   },
   {
      label: "FLT4",
      value: "Nonne-Milroy syndrome",
   },
   {
      label: "FOS",
      value: "Epithelioid hemangioma EH",
   },
   {
      label: "FOSB",
      value: "Pseudomyogenic hemangioendothelioma",
   },
   {
      label: "FOXC2",
      value: "Lymphedema-distichiasis",
   },
   {
      label: "GATA2",
      value: "Primary lymphedema with myelodysplasia",
   },
   {
      label: "GJC2",
      value: "Primary hereditary lymphedema",
   },
   {
      label: "Glomulin",
      value: "Glomuvenous malformation",
   },
   {
      label: "GNA11",
      value: (
         <>
            Congenital hemangioma (CH)
            <br />
            CM with bone and/or soft tissue hyperplasia
            <br />
            Diffuse CM with overgrowth (DCMO)
         </>
      ),
   },
   {
      label: "GNA14",
      value: (
         <>
            Tufted amgioma (TA)
            <br />
            Pyogenic granuloma (PG)
            <br />
            Kaposiformm hemangioendothelioma (KHE)
         </>
      ),
   },
   {
      label: "GNAQ",
      value: (
         <>
            Congenital hemangioma (CH)
            <br />
            CM "Port-wine" stain, nonsyndromic CM
            <br />
            CM of Sturge-Weber syndrome
         </>
      ),
   },
   {
      label: "IDH1",
      value: (
         <>
            Maffucci syndrome
            <br />
            Spindle-cell hemangioma
         </>
      ),
   },
   {
      label: "IDH2",
      value: (
         <>
            Maffucci syndrome
            <br />
            Spindle-cell hemangioma
         </>
      ),
   },
   {
      label: "KIF11",
      value: "Microcephay with or without chorioretinopathy, lymphedema, or mental retardation syndrome",
   },
   {
      label: "KRIT1",
      value: "Cerebral cavernous malformation (CCM1)",
   },
   {
      label: "Malcavernin",
      value: "Cerebral cavernous malformation (CCM2)",
   },
   {
      label: "MAP2K1",
      value: (
         <>
            Arteriovenous malformation (AVM, sporadic)
            <br />
            Arteriovenous fistula (AVF, sporadic)
         </>
      ),
   },
   {
      label: "MAP3K3",
      value: "Verrucouse venous malformation (sporadic)",
   },
   {
      label: "MYC",
      value: "Post radiation angiosarcoma",
   },
   {
      label: "NPM11",
      value: "Maffucci syndrome",
   },
   {
      label: "PDCD10",
      value: "Cerebral cavernous malformation (CCM3)",
   },
   {
      label: "PIK3CA",
      value: (
         <>
            Common (cystic) LM (somatic)<sup style={{ color: "red" }}>*</sup>
            <br />
            Common VM (somatic)<sup style={{ color: "red" }}>*</sup>
            <br />
            Klippel-Trenaunay syndrome<sup style={{ color: "red" }}>*</sup>
            <br />
            Megalencephay-capillary malformation-polymicrogyria (MCAP)
            <sup style={{ color: "red" }}>*</sup>
            <br />
            CLOVES syndrome<sup style={{ color: "red" }}>*</sup>
            <br />
            CLAPO syndrome<sup style={{ color: "red" }}>*</sup>
            <br />
            Fibroadipose vascular anomaly (FAVA)
            <br />
            <sup style={{ color: "red" }}>*</sup> Some of these lesions, associated with overgrowth, belong to the PIK3CA related overgrowth spectrum
            PROS
         </>
      ),
   },
   {
      label: "PTEN",
      value: (
         <>
            Bannayan-Riley-Ruvalcaba syndrome
            <br />
            PTEN (type) Hamartoma of soft tissue / "angiomatosis" of soft tissue
         </>
      ),
   },
   {
      label: "PTPN14",
      value: "Lymphedema-choanal atresia",
   },
   {
      label: "RAS",
      value: "Pyogenic granuloma (PG)",
   },
   {
      label: "RASA1",
      value: (
         <>
            CM-AVM1
            <br />
            Parkes Weber syndrome
         </>
      ),
   },
   {
      label: "SMAD4",
      value: "Telangiectasia, AVM and AVF of Juvenile polyposis hemorrhagic telangeiectasia (JPHT)",
   },
   {
      label: "SOX18",
      value: "Hypotrichosis-lymphedema-telangiectasia",
   },
   {
      label: "STAMBP",
      value: "Microcephay-CM (MIC-CAP)",
   },
   {
      label: "TEK",
      value: (
         <>
            Common VM (somatic)
            <br />
            Familial VM cutaneo-mucosal (VMCM)
            <br />
            Blue rubber bleb nevus (Bean) syndrome (somatic)
         </>
      ),
   },
   {
      label: "TIE2",
      value: (
         <>
            Common VM (somatic)
            <br />
            Familial VM cutaneo-mucosal (VMCM)
            <br />
            Blue rubber bleb nevus (Bean) syndrome (somatic)
         </>
      ),
   },
   {
      label: "TFE3",
      value: "Epithelioid hemangioendothelioma (EHE)",
   },
   {
      label: "VEGFC",
      value: "Primary hereditary lymphedema",
   },
   {
      label: "VEGFR3",
      value: "Nonne-Milroy syndrome",
   },
];

const abbreviationOptions = [
   {
      label: "AST",
      value: "Angiomatosis of soft tissue",
   },
   {
      label: "AVF",
      value: "Arteriovenous fistula",
   },
   {
      label: "AVM",
      value: "Arteriovenous malformation",
   },
   {
      label: "CAT",
      value: "Cutaneovisceral angiomatosis with thrombocytopenia",
   },
   {
      label: "CAVM",
      value: "Capillary arteriovenous malformation",
   },
   {
      label: "CCM",
      value: "Cerebral cavernous malformation",
   },
   {
      label: "CLAVM",
      value: "Capillary lymphatic arteriovenous malformation",
   },
   {
      label: "CLAPO",
      value: "Lower lip CM + face and neck LM + asymmetry and partial/generalized overgrowth",
   },
   {
      label: "CLOVES",
      value: "Congenital lipomatous overgrowth, vascular malformations, epidermal nevi, skeletal/scoliosis and spinal abnormalities",
   },
   {
      label: "CLM",
      value: "Capillary lymphatic malformation",
   },
   {
      label: "CLVAVM",
      value: "Capillary lymphatic venous arteriovenous malformation",
   },
   {
      label: "CLVM",
      value: "Capillary lymphatic venous malformation",
   },
   {
      label: "CM",
      value: "Capillary malformation",
   },
   {
      label: "CM-AVM",
      value: "Capillary malformation-arteriovenous malformation",
   },
   {
      label: "CMTC",
      value: "Cutis marmorata telangiectatica congenita",
   },
   {
      label: "CNS",
      value: "Central nervous system",
   },
   {
      label: "CVAVM",
      value: "Capillary venous arteriovenous malformation",
   },
   {
      label: "CVM",
      value: "Capillary venous malformation",
   },
   {
      label: "DCMO",
      value: "Diffuse capillary malformation with overgrowth",
   },
   {
      label: "DIC",
      value: "Disseminated intravascular coagulopathy",
   },
   {
      label: "FAVA",
      value: "Fibroadipose vascular anomaly",
   },
   {
      label: "GLA",
      value: "Generalized lymphatic anomaly",
   },
   {
      label: "GSD",
      value: "Gorham-Stout disease",
   },
   {
      label: "GVM",
      value: "Glomovenous malformation",
   },
   {
      label: "HHT",
      value: "Hereditary hemorrhagic telangiectasia",
   },
   {
      label: "HI",
      value: "Hemangioma of infancy / infantile hemangioma",
   },
   {
      label: "IH",
      value: "Infantile hemangioma / hemangioma of infancy",
   },
   {
      label: "INR",
      value: "International normalized ratio",
   },
   {
      label: "JPHT",
      value: "Juvenile polyposis hemorrhagic telangiectasia",
   },
   {
      label: "KHE",
      value: "Kaposiform hemangioendothelioma",
   },
   {
      label: "KLA",
      value: "Kaposiform lymphangiomatosis",
   },
   {
      label: "KMP",
      value: "Kasabach-Merritt phenomenon",
   },
   {
      label: "LM",
      value: "Lymphatic malformation",
   },
   {
      label: "LVM",
      value: "Lymphatic venous malformation",
   },
   {
      label: "MCAP",
      value: "Megalencephaly-capillary malformation-polymicrogyria",
   },
   {
      label: "M-CM",
      value: "Macrocephay-capillary malformation",
   },
   {
      label: "MICCAP",
      value: "Microcephay-capillary malformation",
   },
   {
      label: "MLT",
      value: "Multifocal lymphangioendotheliomatosis with thrombocytopenia",
   },
   {
      label: "NICH",
      value: "Non-involuring congenital hemangioma",
   },
   {
      label: "PHACE",
      value: "Posterior fossa malformations, hemangioma, arterial anomalies, cardiovascular anomalies, eye anomalies",
   },
   {
      label: "PHOST",
      value: "PTEN hamartoma of soft tissue",
   },
   {
      label: "PILA",
      value: "Papillary intralymphatic angioendothelioma",
   },
   {
      label: "PICH",
      value: "Partially involuting congenital hemangioma",
   },
   {
      label: "PROS",
      value: "PIK3CA-related overgrowth spectrum",
   },
   {
      label: "RICH",
      value: "Rapidly involuting congenital hemangioma",
   },
   {
      label: "TA",
      value: "Tufted angioma",
   },
   {
      label: "VM",
      value: "Venous malformation",
   },
   {
      label: "VMCM",
      value: "Venous malformation cutaneo mucosal",
   },
];

export { AbbrevSearch, GeneSearch };
