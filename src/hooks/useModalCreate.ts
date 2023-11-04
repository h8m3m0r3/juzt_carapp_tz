import { useState } from "react";

import { useModalCreateType } from "/@/common";

const useModalCreate = (): useModalCreateType => {
  const [isColorModalOpen, setIsColorModalOpen] = useState(false);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);
  const [isTransmissionModalOpen, setIsTransmissionModalOpen] = useState(false);
  const [isEngineModalOpen, setIsEngineModalOpen] = useState(false);

  const handleColorModalOpen = () => {
    setIsColorModalOpen(true);
  };
  const handleColorModalClose = () => {
    setIsColorModalOpen(false);
  };
  const handleDriveModalOpen = () => {
    setIsDriveModalOpen(true);
  };
  const handleDriveModalClose = () => {
    setIsDriveModalOpen(false);
  };
  const handleEngineModalOpen = () => {
    setIsEngineModalOpen(true);
  };
  const handleEngineModalClose = () => {
    setIsEngineModalOpen(false);
  };
  const handleTransmissionModalOpen = () => {
    setIsTransmissionModalOpen(true);
  };
  const handleTransmissionModalClose = () => {
    setIsTransmissionModalOpen(false);
  };
  return {
    isColorModalOpen,
    isDriveModalOpen,
    isTransmissionModalOpen,
    isEngineModalOpen,
    handleColorModalOpen,
    handleColorModalClose,
    handleDriveModalOpen,
    handleDriveModalClose,
    handleEngineModalOpen,
    handleEngineModalClose,
    handleTransmissionModalOpen,
    handleTransmissionModalClose,
  };
};
export { useModalCreate };
