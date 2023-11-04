import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form"
import { CarPostType } from "../CarPostType"

type InputRegisterType = {
    register: UseFormRegister<CarPostType>,
    watch?: UseFormWatch<CarPostType>,
    errors: FieldErrors<CarPostType>, 
}
export type {InputRegisterType}