import React from "react";

import { PersonalInfo } from "./personalInfo";
import { AddingForm } from "./addingForm";

const CabinetPersonal = () => {
  return (
    <div className="cabinet__personal">
      <PersonalInfo />
      <AddingForm />
    </div>
  );
};

export {CabinetPersonal};
