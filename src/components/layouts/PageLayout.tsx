import * as React from "react";
import Footer from "./footer";
import Nav from "./Nav";
import Header from "./header";

type Props = {
  title?: string;
  _site?: any;
  // global:any;
  children?: React.ReactNode;

  
};

const PageLayout = ({
  title,
  _site,
  // global,
  children,
 
 
  

}: Props) => {

  return (
    <>
      {/* <Header c_headerLogo={global?.c_headerLogo}/> */}

      {children}
      <Footer _site={_site} />
    </>
  );
};

export default PageLayout;
