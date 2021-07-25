
const useRequestData = (form) => {
  const formString = JSON.stringify(form)

    localStorage.setItem("userData", formString )

}

export default useRequestData