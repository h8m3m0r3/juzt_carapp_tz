import React, { useEffect, useState } from "react";

import { Header, MainContent } from "/@/components";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <MainContent />
    </div>
  );
};

export { MainPage };
