import PIK3CAModal from "./PIK3CAModal";
import { v4 as uuidv4 } from "uuid";
import { combinedVascMalformationText, anomaliesOfMajorVessels, associatedWithOtherAnomalies } from "./Texts";

const HemeDisorders = (props) => {
   return (
      <div>
         <p>
            Some lesions may be associated with the following <strong>hematological disorders</strong>:
         </p>
         <div>{props.text}</div>
      </div>
   );
};
const infantileHemangiomaText = (
   <div className="three-col-grid">
      <div>
         <h3>Patterns</h3>
         <li>Focal</li>
         <li>Multifocal</li>
         <li>Segmented</li>
         <li>Indeterminate</li>
      </div>
      <div>
         <h3>Types</h3>
         <li>Superficial</li>
         <li>Deep</li>
         <li>Mixed</li>
         <li>Focal</li>
         <li>Reticular</li>
         <li>Other</li>
      </div>
      <div>
         <h3>Associations</h3>
         <li>PHACE</li>
         <li>LUMBAR</li>
      </div>
   </div>
);

const tree = [
   {
      id: uuidv4(),
      name: "Vascular Anomalies",
      children: [
         {
            id: uuidv4(),
            name: "Vascular Tumors",
            children: [
               {
                  id: uuidv4(),
                  name: "Benign",
                  children: [
                     {
                        id: uuidv4(),
                        name: "Infantile hemangioma",
                        children: [infantileHemangiomaText],
                        picture: ["InfantileHemangioma.jpg"],
                     },
                     {
                        id: uuidv4(),
                        name: "Congenital hemangioma",
                        children: [
                           {
                              id: uuidv4(),
                              name: "RICH",
                              picture: ["RICH.jpg"],
                              note: [
                                 <HemeDisorders text="Transient mild/moderate thrombocytompenia, with or without consumptive coagulopathy and elevated D-dimer" />,
                              ],
                           },
                           { id: uuidv4(), name: "NICH" },
                           { id: uuidv4(), name: "PICH" },
                        ],
                        gene: "GNAQ / GNA11",
                     },
                     {
                        id: uuidv4(),
                        name: "Tufted hemangioma",
                        gene: "GNA14",
                        note: [
                           <HemeDisorders text="Profound and sustained thrombocytopnia with profound hypofibrinogenemia, consumptive coagulopathy and elevated D-dimer (Kasabach-Merritt phenomenon)" />,
                           "Many experts believe that tufted angioma and kaposiform hemangioendothelioma are part of a spectrum rather than distinct entities",
                        ],
                     },
                     {
                        id: uuidv4(),
                        name: "Spindle-cell hemangioma",
                        gene: "IDH1 / IDH2",
                     },
                     { id: uuidv4(), name: "Epitheloid hemangioma", gene: "FOS" },
                     {
                        id: uuidv4(),
                        name: "Pyogenic hemangioma (lobular capillary hemangioma)",
                        gene: "BRAF / RAS / GNA14",
                     },
                     {
                        id: uuidv4(),
                        name: "Others",
                        note: ["The tumor nature of some of these lesions is not certain."],
                        children: [
                           { id: uuidv4(), name: "Hobnail hemangioma" },
                           { id: uuidv4(), name: "Microvenular hemangioma" },
                           { id: uuidv4(), name: "Anastomosing hemangioma" },
                           { id: uuidv4(), name: "Glomeruloid hemangioma" },
                           { id: uuidv4(), name: "Papillary hemangioma" },
                           {
                              id: uuidv4(),
                              name: "Intravascular papillary endothelial hyperplasia",
                           },
                           {
                              id: uuidv4(),
                              name: "Cutaneous epithelioid angiomatous nodule",
                           },
                           { id: uuidv4(), name: "Acquired elastotic hemangioma" },
                           {
                              id: uuidv4(),
                              name: "Littoral cell hemangioma of the spleen",
                           },
                        ],
                     },
                     {
                        id: uuidv4(),
                        name: "Related Lesions",
                        note: ["The tumor nature of some of these lesions is not certain."],
                        children: [
                           { id: uuidv4(), name: "Eccrine angiomatous hamartoma" },
                           { id: uuidv4(), name: "Reactive angioendotheliomatosis" },
                           { id: uuidv4(), name: "Bacillary angiomatosis" },
                        ],
                     },
                  ],
               },
               {
                  id: uuidv4(),
                  name: "Locally aggressive or borderline",
                  children: [
                     {
                        id: uuidv4(),
                        name: "Kaposiform hemangioendothelioma",
                        note: [
                           <HemeDisorders text="Profound and sustained thrombocytopnia with profound hypofibrinogenemia, consumptive coagulopathy and elevated D-dimer (Kasabach-Merritt phenomenon)" />,
                           "Many experts believe that tufted angioma and kaposiform hemangioendothelioma are part of a spectrum rather than distinct entities",
                        ],
                        gene: "GNA14",
                     },
                     {
                        id: uuidv4(),
                        name: "Retiform hemangioendothelioma",
                     },
                     {
                        id: uuidv4(),
                        name: "Papillary intralymphatic angioendothelioma (PILA), Dabska tumor",
                     },
                     {
                        id: uuidv4(),
                        name: "Composite hemangioendothelioma",
                     },
                     {
                        id: uuidv4(),
                        name: "Pseudomyogenic hemangioendothelioma",
                        gene: "FOSB",
                     },
                     { id: uuidv4(), name: "Polymorphous hemangioendothelioma" },
                     {
                        id: uuidv4(),
                        name: "Hemangioendothelioma not otherwise specified",
                     },
                     { id: uuidv4(), name: "Kaposi sarcoma" },
                     { id: uuidv4(), name: "Others" },
                  ],
               },
               {
                  id: uuidv4(),
                  name: "Malignant vascular tumors",
                  children: [
                     {
                        id: uuidv4(),
                        name: "Angiosarcoma",
                        gene: "(Post radiation) MYC / KDR / PTBRB / PLCG1",
                     },
                     {
                        id: uuidv4(),
                        name: "Epitheliod hemangioendothelioma",
                        gene: "CAMTA1 / TFE3",
                     },
                     { id: uuidv4(), name: "Others" },
                  ],
               },
            ],
         },
         {
            id: uuidv4(),
            name: "Vascular Malformations",
            children: [
               {
                  id: uuidv4(),
                  name: "Simple",
                  children: [
                     {
                        id: uuidv4(),
                        name: "Capillary malformations (CM)",
                        children: [
                           {
                              id: uuidv4(),
                              name: 'Nevus simplex / salmon patch, "angel kiss", "stork bite"',
                           },
                           {
                              id: uuidv4(),
                              name: 'Cutaneous and/or mucosal CM (also known as "port-wine" stain)',
                              children: [
                                 {
                                    id: uuidv4(),
                                    name: "Nonsyndromic CM",
                                    gene: "GNAQ",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "CM with CNS and/or ocular anomalies (Sturge-Weber syndrome)",
                                    gene: "GNAQ",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "CM with bone and/or soft tissue overgrowth",
                                    gene: "GNA11",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Diffuse CM with overgrowth (DCMO)",
                                    gene: "GNA11",
                                 },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "Reticular CM",
                              children: [
                                 {
                                    id: uuidv4(),
                                    name: "CM of MIC-CAP (microcephaly-capillary malformation)",
                                    gene: "STAMBP",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "CM of MCAP (megalencephay-capillary malformation-polymicrogyria)",
                                    gene: "PIK3CA",
                                 },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "CM of CM-AVM",
                              gene: "RASA1 / EPHB4",
                           },
                           {
                              id: uuidv4(),
                              name: "Cutis marmorata telangiectatica congenita (CMTC)",
                           },
                           {
                              id: uuidv4(),
                              name: "Telangiectasia",
                              note: [
                                 "The CM nature of some subtypes of telangiectasia is debated.  Some telangiectasia may be reclassified in other sections in the future.",
                              ],
                              children: [
                                 {
                                    id: uuidv4(),
                                    name: "Herditary hemorrhagic telangiectasia (HHT)",
                                    children: [
                                       {
                                          id: uuidv4(),
                                          name: "HHT1",
                                          gene: "ENG",
                                       },
                                       {
                                          id: uuidv4(),
                                          name: "HHT2",
                                          gene: "ACVRL1",
                                       },
                                       {
                                          id: uuidv4(),
                                          name: "HHT3 / JPHT",
                                          gene: "SMAD4",
                                       },
                                    ],
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Others",
                                 },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "Others",
                           },
                        ],
                     },
                     {
                        id: uuidv4(),
                        name: "Lymphatic malformations",
                        note: [
                           <HemeDisorders text="Chronic localized intravascular coagulopathy with elevated D-dimer and +/- mild to moderate throbmocytopenia (consider Kaposiform lymphangiomatosis) (may progresss to DIC after trauma or operation)" />,
                           <span>
                              When associated with overgrowth, some of these lesions belong to the PIK3CA-related overgrowth spectrum <PIK3CAModal />
                           </span>,
                        ],
                        children: [
                           {
                              id: uuidv4(),
                              name: "Common (cystic) LM",
                              gene: "PIK3CA",

                              children: [
                                 {
                                    id: uuidv4(),
                                    name: "Macrocystic LM",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Microcystic LM",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Mixed cystic LM",
                                 },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "Generalized lymphatic anomaly (GLA)",
                              gene: "PIK3CA",
                              children: [
                                 {
                                    id: uuidv4(),
                                    name: "Kaposiform lymphangiomatosis (KLA)",
                                    note: [<HemeDisorders text="Mild to moderate thrombocytopenia, +/- hypofibrinogenemia, and D-dimer elevation" />],
                                    gene: "NRAS",
                                 },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "LM in Gorham-Stout disease",
                              gene: "KRAS",
                           },
                           {
                              id: uuidv4(),
                              name: "Channel type LM",
                           },
                           {
                              id: uuidv4(),
                              name: '"Acquired" progressive lymphatic anomaly (so called acquired progressive "lymphangioma")',
                           },
                           {
                              id: uuidv4(),
                              name: "Primary lymphedema",
                              children: [
                                 {
                                    id: uuidv4(),
                                    name: "Nonne-Milroy syndrome",
                                    gene: "FLT4 / VEGFR3",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Primary hereditary lymphedema",
                                    gene: "VEGFC",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Primary hereditary lymphedema",
                                    gene: "GJC2 / Connexin 47",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Lymphedema-distichiasis",
                                    gene: "FOXC2",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Hypotrichosis-lymphedema-telangiectasia",
                                    gene: "SOX18",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Primary lymphedema with myelodysplasia",
                                    gene: "GATA2",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Primary generalized lymphatic anomaly",
                                    gene: "CCBE1",
                                    note: ["Hennekam lymphangiectasia-lymphedema syndrome"],
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Microcephay +/- chorioretinopathy, lymphedema, or mental retardation syndrome",
                                    gene: "KIF11",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "Lymphedema-choanal atresia",
                                    gene: "PTPN14",
                                 },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "Others",
                           },
                        ],
                     },
                     {
                        id: uuidv4(),
                        name: "Venous malformations (VM)",
                        note: [
                           <HemeDisorders text="Chronic localized intravascular coagulopathy with elevated D-dimer, +/- hypofibrinogenemia, and +/- moderate thrombocytopenia (may progress to DIC after trauma or operation)" />,
                        ],
                        children: [
                           {
                              id: uuidv4(),
                              name: "Common VM",
                              gene: "TEK (TIE2) / PIK3CA",
                           },
                           {
                              id: uuidv4(),
                              name: "Familial VM cutaneo-mucosal (VMCM)",
                              gene: "TEK (TIE2)",
                           },
                           {
                              id: uuidv4(),
                              name: "Blue rubber bleb nevus (Bean) syndrome VM",
                              gene: "TEK (TIE2)",
                              picture: ["BlueRubberBlebNevus.jpg"],
                           },
                           {
                              id: uuidv4(),
                              name: "Glomuvenous malformation GVM",
                              gene: "Glomulin",
                              picture: ["GlomuvenousMalformation.jpg"],
                           },
                           {
                              id: uuidv4(),
                              name: "Cerebral cavernous malformation (CCM)",
                              children: [
                                 {
                                    id: uuidv4(),
                                    name: "CCM1",
                                    gene: "KRIT1",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "CCM2",
                                    gene: "Malcavernin",
                                 },
                                 {
                                    id: uuidv4(),
                                    name: "CCM3",
                                    gene: "PDCD10",
                                 },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "Familial intraosseous vascular malformation (VMOS)",
                              gene: "ELMO2",
                           },
                           {
                              id: uuidv4(),
                              name: "Verrucous venous malformation (formerly verrucous hemangioma)",
                              gene: "MAP3K3",
                           },
                           {
                              id: uuidv4(),
                              name: "Others",
                           },
                        ],
                     },
                     {
                        id: uuidv4(),
                        name: "Arteriovenous malformations (AVM)",
                        note: ["High-flow lesion"],
                        children: [
                           {
                              id: uuidv4(),
                              name: "Sporadic",
                              gene: "MAP2K1",
                              picture: ["ArteriovenousMalformation_Sporadic.jpg"],
                           },
                           {
                              id: uuidv4(),
                              name: "In HHT",
                              children: [
                                 { id: uuidv4(), name: "HHT1", gene: "ENG" },
                                 { id: uuidv4(), name: "HHT2", gene: "ACVRL1" },
                                 { id: uuidv4(), name: "HHT3 / JPHT", gene: "SMAD4" },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "In CM-AVM",
                              gene: "RASA1 / EPHB4",
                           },
                           {
                              id: uuidv4(),
                              name: "Others",
                           },
                        ],
                     },
                     {
                        id: uuidv4(),
                        name: "Arteriovenous fistula (AVF) (congenital)",
                        note: ["High-flow lesion"],
                        children: [
                           {
                              id: uuidv4(),
                              name: "Sporadic",
                              gene: "MAP2K1",
                           },
                           {
                              id: uuidv4(),
                              name: "In HHT",
                              children: [
                                 { id: uuidv4(), name: "HHT1", gene: "ENG" },
                                 { id: uuidv4(), name: "HHT2", gene: "ACVRL1" },
                                 { id: uuidv4(), name: "HHT3 / JPHT", gene: "SMAD4" },
                              ],
                           },
                           {
                              id: uuidv4(),
                              name: "In CM-AVM",
                              gene: "RASA1 / EPHB4",
                           },
                           {
                              id: uuidv4(),
                              name: "Others",
                           },
                        ],
                     },
                  ],
               },
               {
                  id: uuidv4(),
                  name: "Combined",
                  note: ["Defined as two or more vascular malformations found in one lesion"],
                  children: [combinedVascMalformationText],
               },
               {
                  id: uuidv4(),
                  name: "Anomalies of major named vessels",
                  note: ['Also known as "channel type" or "truncal" vascular malformations'],
                  children: [anomaliesOfMajorVessels],
               },
               {
                  id: uuidv4(),
                  name: "Malformations associated with other anomalies",
                  children: [associatedWithOtherAnomalies],
               },
               {
                  id: uuidv4(),
                  name: "Provisionally unclassified vascular anomalies",
                  children: [
                     {
                        id: uuidv4(),
                        name: "Intramuscular hemangioma",
                        note: ["Distinct from infantile hemangioma, from intramuscular common VM, PHOST/AST, FAVA, and AVM"],
                        gene: "KRAS / MAP2K",
                     },
                     {
                        id: uuidv4(),
                        name: "Angiokeratoma",
                     },
                     {
                        id: uuidv4(),
                        name: "Sinusoidal hemangioma",
                     },
                     {
                        id: uuidv4(),
                        name: 'Acral arteriovenous "tumour"',
                     },
                     {
                        id: uuidv4(),
                        name: "MLT /CAT",
                        note: [
                           "Multifocal lymphangioendotheliomatosis with thrombocytopenia / cutaneovisceral angiomatosis with thrombocytopenia",
                           <HemeDisorders
                              text={
                                 "Sustained, fluctuating, moderate to profound thrombocytopenia with gastrointestinal tract bleeding or pulmonary hemorrhage"
                              }
                           />,
                        ],
                     },
                     {
                        id: uuidv4(),
                        name: "PHOST",
                        note: ['PTEN (type) hamartoma of soft tissue / "angiomatosis" of soft tissue'],
                        gene: "PTEN",
                     },
                     {
                        id: uuidv4(),
                        name: "Fibroadipose vascular anomaly (FAVA)",
                        gene: "PIK3CA",
                     },
                  ],
               },
            ],
         },
      ],
   },
];

export default tree;
