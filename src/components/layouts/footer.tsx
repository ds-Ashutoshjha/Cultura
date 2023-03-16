import * as React from "react";

type data = {
  _site: any;
  //   labels: any;
  //   c_footernavbaricons: any;
  //   socialiconheader: any;
  //   c_socialiconImages: any;
  //   socialiconphoto: any;
  //   footer:any,
  c_footercustomerservices: any;
  customservicephoto: any;
  bottomfooterrequest: any;
};

const Footer = (props: any) => {
  const {
    _site,
    // footer,
    // c_footernavbaricons,
    // socialiconheader,
    // c_socialiconImages,
    // socialiconphoto,
  } = props;
  //   console.log('c_socialiconImages', c_socialiconImages)
  console.log("c_footerbottomservice", _site);
  return (
    <>
      <div
        className="site-footer inline-block w-full pt-6 "
        style={{ paddingTop: "20px" }}
      >
        <div
          className="flex-justify-center pb-9 text-lg font-bold pt-6"
          //   style={{ color: "navy	" }}
        >
          <button className="flexx pt-6">---back to top</button>
        </div>

        <div className="footerBox">
          <div className="flex space-x-24 pt-6 boxLogo">
            <div className="thirdStepdiv">
              {props?._site?.c_footernavbaricons?.map((img: any) => {
                return (
                  <>
                    <div className="footerboxImg">
                      <img src={img?.footernavbaricon.url} />
                      <a href="#">{img.footerlabel.label}</a>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <div className="site-footer inline-block w-full pt-5 ">
          <div className="social_network flexFooterSec">
            <div className="flex space-x-24 pt-4 boxLogo">
              <div className="">
					<div className=""> {props._site?.c_socialiconImages?.socialiconheader}</div>
					<div className="fourthstepdiv">
					{_site?.c_socialiconImages?.socialiconphoto?.map(
                  (data: any) => {
                    return (
                      <>
                        <img src={data?.url} />
                      </>
                    );
                  }
                )}
					</div	>
              
              </div>
            </div>
          </div>
          <div className="newsleeter flexFooterSec">
            <div className="newsHeading">
              {props?._site?.c_footersearch?.searchbarheader}
            </div>
            <div className="searchbar">
              <input
                type="search"
                className="form-control rounded"
                placeholder="E-mail address"
                aria-label="Search"
                aria-describedby="search-addon"
              />

              <button type="button" className="btn btn-outline-primary">
                i valid
              </button>
            </div>
          </div>

          <div className="customer_services flexFooterSec">
            <div className="customerservice">
              {props?._site?.c_footercustomerservices?.custmerservice}
            </div>

			
            <div className="">
              <img
                src={
                  props?._site?.c_footercustomerservices?.customservicephoto
                    ?.url
                }
              />
            </div>
            <div className="customer_serviceline">
              <div className="">
                {props?._site?.c_footercustomerservices?.customserviceLine}
              </div>
            </div>

          </div>
        </div>
        <div className="flex-service">
			<div className="services1">
          {_site.c_footerbottomservice.map((data: any) => {
            return(
			data.bottomfooterrequest.map((item: any) => {
              console.log("item.label", item.label);
              return (
                <>
                  <div className="serveices2">{item.label}</div>
                </>
              );
            }))
          })}
        </div>
		</div>
      </div>
    </>
  );
};

export default Footer;
