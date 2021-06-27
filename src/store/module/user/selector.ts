import { Selectors } from "../../types"
import { LoginResponse } from "./types"

export const loginSelector = (s: any): Selectors<LoginResponse> => s.users.login