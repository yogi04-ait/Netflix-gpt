export const checkValidData = (email, password, name="")=>{

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(name){
        const isNameValid = /\b([A-ZÀ-ÿ][-,a-z.' ]+)\b/.test(name);
        if(!isNameValid) return "Name is not valid";

    }

    if(!isEmailValid) return "Email is not Valid";
    if(!isPassValid) return "Password is not valid";


    return null;


}