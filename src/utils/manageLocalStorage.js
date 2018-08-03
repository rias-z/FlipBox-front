class ManageLocalStorage {
  get(key) {
    return localStorage.getItem(key)
  }

  set(dic) {
    Object.keys(dic).forEach(key => {
      localStorage.setItem(key, dic[key])
    })
  }

  clear() {
    localStorage.clear()
  }
}

export const manageLocalStorage = new ManageLocalStorage()
