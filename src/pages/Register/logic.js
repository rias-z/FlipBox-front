import { apiPostRegister } from "./api"


export const postRegister = async (params) => {
  try {
    await apiPostRegister(params)
  } catch (err) {
    // TODO: エラー時のポップアップ表示
    console.log(err)
  }
}
