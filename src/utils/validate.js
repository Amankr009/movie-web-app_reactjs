export const formFieldsValidate = (name, email, password) => {
    const isValidName = /(.|\s)*\S(.|\s)*/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isValidName)
        return "Please enter name."
    if(!isEmailValid)
        return "This is not a valid Email.";
    if(!isPasswordValid)
        return "This is not a valid Password."
    
    return null;
}