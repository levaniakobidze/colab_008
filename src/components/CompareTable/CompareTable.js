import React from "react";
import "./CompareTable.css";
import icon from "./image/Path 5.svg";
const CompareTable = () => {
  return (
    <div className="compareTableContainer">
      <div className="compareTableHeader">COMPARE</div>
      <table className="desktop">
        <tr className="first">
          <td className=" firstRow tableText">THE FEATURES</td>
          <td className="firstRow">BASIC</td>
          <td className="firstRow">PRO</td>
          <td className="firstRow">BUSINESS</td>
        </tr>

        <tr className="line">
          <td className="tableText">UNLIMITED STORY POSTING</td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
          <td className="BUSINESS">
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
        <tr>
          <td className="tableText">UNLIMITED PHOTO UPLOAD</td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
        <tr>
          <td className="tableText">EMBEDDING CUSTOM CONTENT</td>
          <td></td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
        <tr>
          <td className="tableText">CUSTOMIZE METADATA</td>
          <td></td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
        <tr>
          <td className="tableText">ADVANCED METRICS</td>
          <td></td>
          <td></td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
        <tr>
          <td className="tableText">PHOTO DOWNLOADS</td>
          <td></td>
          <td></td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
        <tr>
          <td className="tableText">SEARCH ENGINE INDEXING</td>
          <td></td>
          <td></td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
        <tr>
          <td className="tableText">CUSTOM ANALYTICS</td>
          <td></td>
          <td></td>
          <td>
            <img className="compare" src={icon} alt="" />
          </td>
        </tr>
      </table>
      <table className="mobile">
        <th className="mobileHeader">THE FEATURES</th>
        <th className="tableHeaders">UNLIMITED STORY POSTING</th>
        <tr className="rows">
          <td>BASIC</td>
          <td>PRO</td>
          <td>BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
        <th className="tableHeaders">UNLIMITED PHOTO UPLOAD</th>
        <tr className="rows">
          <td>BASIC</td>
          <td>PRO</td>
          <td>BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
        <th className="tableHeaders">EMBEDDING CUSTOM CONTENT</th>
        <tr className="rows">
          <td className="modes">BASIC</td>
          <td className="modes">PRO</td>
          <td className="modes">BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
        <th className="tableHeaders">CUSTOMIZE METADATA</th>
        <tr className="rows">
          <td>BASIC</td>
          <td>PRO</td>
          <td>BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
        <th className="tableHeaders">ADVANCED METRICS</th>
        <tr className="rows">
          <td>BASIC</td>
          <td>PRO</td>
          <td>BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
        <th className="tableHeaders">PHOTO DOWNLOADS</th>
        <tr className="rows">
          <td>BASIC</td>
          <td>PRO</td>
          <td>BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
        <th className="tableHeaders">SEARCH ENGINE INDEXING</th>
        <tr className="rows">
          <td>BASIC</td>
          <td>PRO</td>
          <td>BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
        <th className="tableHeaders">CUSTOM ANALYTICS</th>
        <tr className="rows">
          <td>BASIC</td>
          <td>PRO</td>
          <td>BUSINESS</td>
        </tr>
        <tr className="line">
          {" "}
          <img className="compare" src={icon} alt="" />{" "}
          <img className="compare" src={icon} alt="" />
          <img className="compare" src={icon} alt="" />
        </tr>
      </table>
    </div>
  );
};

export default CompareTable;
