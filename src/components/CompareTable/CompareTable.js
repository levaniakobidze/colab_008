import React from "react";
import "./CompareTable.css";
import icon from "./image/Path 5.svg";
const CompareTable = () => {
  return (
    <div className="compareTableContainer">
      <div className="compareTableHeader">COMPARE</div>
      <table>
        <tr className="first">
          <td className=" firstRow tableText">THE FEATURES</td>
          <td className="firstRow">BASIC</td>
          <td className="firstRow">PRO</td>
          <td className="firstRow">BUSINESS</td>
        </tr>

        <tr>
          <td className="tableText">UNLIMITED STORY POSTING</td>
          <td>
            <img src={icon} />
          </td>
          <td>
            <img src={icon} />
          </td>
          <td className="BUSINESS">
            <img src={icon} />
          </td>
        </tr>
        <tr>
          <td className="tableText">UNLIMITED PHOTO UPLOAD</td>
          <td>
            <img src={icon} />
          </td>
          <td>
            <img src={icon} />
          </td>
          <td>
            <img src={icon} />
          </td>
        </tr>
        <tr>
          <td className="tableText">EMBEDDING CUSTOM CONTENT</td>
          <td></td>
          <td>
            <img src={icon} />
          </td>
          <td>
            <img src={icon} />
          </td>
        </tr>
        <tr>
          <td className="tableText">CUSTOMIZE METADATA</td>
          <td></td>
          <td>
            <img src={icon} />
          </td>
          <td>
            <img src={icon} />
          </td>
        </tr>
        <tr>
          <td className="tableText">ADVANCED METRICS</td>
          <td></td>
          <td></td>
          <td>
            <img src={icon} />
          </td>
        </tr>
        <tr>
          <td className="tableText">PHOTO DOWNLOADS</td>
          <td></td>
          <td></td>
          <td>
            <img src={icon} />
          </td>
        </tr>
        <tr>
          <td className="tableText">SEARCH ENGINE INDEXING</td>
          <td></td>
          <td></td>
          <td>
            <img src={icon} />
          </td>
        </tr>
        <tr>
          <td className="tableText">CUSTOM ANALYTICS</td>
          <td></td>
          <td></td>
          <td>
            <img src={icon} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CompareTable;
