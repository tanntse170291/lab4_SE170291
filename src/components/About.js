import M from "materialize-css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <>
      <div className="container">
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">filter_drama</i>First
            </div>
            <div className="collapsible-body">
              <span>Nguyễn Trọng Tân - SE171291</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">place</i>Second
            </div>
            <div className="collapsible-body">
              <span>Welcome to my web</span>
            </div>
          </li>
          <li>
            <div className="collapsible-header">
              <i className="material-icons">whatshot</i>Third
            </div>
            <div className="collapsible-body">
              <span>
                fun fun
              </span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
