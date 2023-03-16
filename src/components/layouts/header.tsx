import { Data } from "@react-google-maps/api";
import * as React from "react";
import searchIcon from "../../images/search.png";
type data = {
  labels: any;
  c_headerLogo: any;
  c_headernavbariteam: any;
  c_headerHeadline: any;
  c_bottromheader: any;
};

const Header = (props: data) => {
  const {
    labels,
    c_headerLogo,
    c_headernavbariteam,
    c_headerHeadline,
    c_bottromheader,
  } = props;
  // console.log('labels', labels)
  return (
    <>
      <>
        <div
          style={{ height: "25px", backgroundColor: "#252855" }}
          className="flex space-x-4"
        >
          <div
            style={{
              color: "whitesmoke",
              fontSize: "14px",
              marginLeft: "940px",
            }}
            className="flex space-x-8 text -2*1"
          >
            {labels.map((head: any) => {
              // console.log('head', head)
              return (
                <>
                  <div className="header_menu">
                    <ul>
                      <li>{head.label}</li>
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="flex" style={{ backgroundColor: "#5459bb" }}>
          <img
            style={{ width: "8%", height: "3%", marginTop: "20px" }}
            src={c_headerLogo.url}
          />
          <div id="search-autocomplete" className="input#form1">
            <input
              type="search"
              id="form1"
              placeholder="Search for a book, a game"
              className="form-control"
            />
          </div>

          <div>
            <button
              className="btn inline-block px-6 py-2.5 bg-blue-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center searchLogo"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="contentforNav">
            <a className="flex space-x-4 navbar-item">
              {c_headernavbariteam.map((image: any) => {
                // console.log('image',image)

                return (
                  <>
                    <div>
                      <a href="">{image.label.label}</a>
                    </div>

                    <div className="navbar">
                      <img
                        style={{ width: "30px", height: "30px" }}
                        src={image.icon.url}
                      />
                    </div>
                  </>
                );
              })}
            </a>
          </div>
        </div>
        {/* <img src={searchIcon}></img> */}

        <div className="flex">
          <div className="g-5px">
            <ul>
              {c_headerHeadline.map((head: any) => {
                <li> {head.label}</li>;
              })}
            </ul>
          </div>
          <div className="flex">
            {c_bottromheader.map((data: any) => {
              return (
                <>
                  <div className="flex">
                    <img
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "30px",
                      }}
                      src={data.icon.url}
                    />
                    <a href="">{data.label.label}/</a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default Header;
