import QuickActionBtn from "../components/utils/quickActionsBtn/QuickActionBtn";
import {
  FileArrowDownFill,
  FileCheckFill,
  FileEarmarkBarGraphFill,
  FileEarmarkBinaryFill,
  FileEarmarkDiffFill,
  FileEarmarkPdfFill,
  FileEarmarkPlusFill,
  FilePersonFill,
  FileSpreadsheetFill,
  FileTextFill,
  FileZipFill,
} from "react-bootstrap-icons";

const DashboardPages = () => {
  return (
    <>
      <div className="custom-container p-2 justify-content-around">
        <QuickActionBtn Icon={FileArrowDownFill} title={`Arrow Down`} />
        <QuickActionBtn Icon={FileCheckFill} title={`Check`} />
        <QuickActionBtn Icon={FileEarmarkBarGraphFill} title={`Signal`} />
        <QuickActionBtn Icon={FileEarmarkBinaryFill} title={`Binary`} />
        <QuickActionBtn Icon={FileEarmarkPdfFill} title={`PDF file`} />
        <QuickActionBtn Icon={FileEarmarkPlusFill} title={`Plus sign`} />
        <QuickActionBtn Icon={FileTextFill} title={`Paragraph`} />
        <QuickActionBtn Icon={FileSpreadsheetFill} title={`Spreadsheet`} />
        <QuickActionBtn Icon={FileZipFill} title={`ZIP`} />
        <QuickActionBtn Icon={FilePersonFill} title={`Person`} />
        <QuickActionBtn Icon={FileEarmarkDiffFill} title={`Diff`} />
      </div>

      <div className="custom-container p-2 d-block">
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. possimus optio minus eveniet dolor. Ut odio aliquam
          vitae beatae sunt labore dolor.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor.
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ullam pariatur sit voluptates doloribus eius quibusdam inventore
          recusandae, possimus optio minus eveniet dolor. Ut odio aliquam vitae
          beatae sunt labore dolor.
        </p>
        <p className="text-center text-danger">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. possimus optio minus eveniet dolor. Ut odio aliquam
          vitae beatae sunt labore dolor.
        </p>
        <p className="text-center">
          <b>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
            pariatur sit voluptates doloribus eius quibusdam inventore
            recusandae, possimus optio minus eveniet dolor.
          </b>
        </p>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          pariatur sit voluptates doloribus eius quibusdam inventore recusandae,
          possimus optio minus eveniet dolor. Ut odio aliquam vitae beatae sunt
          labore dolor. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Ullam pariatur sit voluptates doloribus eius quibusdam inventore
          recusandae, possimus optio minus eveniet dolor. Ut odio aliquam vitae
          beatae sunt labore dolor.
        </p>
      </div>
    </>
  );
};

export default DashboardPages;
