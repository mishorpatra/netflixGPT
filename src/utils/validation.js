
export const validateForm = (email, password) => {
    let emailVerify = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    let passwordVerify = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!emailVerify) return "Email is not Valid"
    if(!passwordVerify) return "Password is not valid"

    return null
}