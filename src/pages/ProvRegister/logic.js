import { apiPostMail } from "./api"


export const postMail = async (email) => {
  try {
    await apiPostMail(email)
  } catch (err) {
    // TODO: エラー時のポップアップ表示
    console.log(err)
  }
}
