import { Profile, ValidateProfileErr } from "../../types/profile";

export const ValidateProfile = (profile?: Profile) => {
    if(!profile){
        return [ValidateProfileErr.NO_DATA]
    }
    const {first,lastname,age,country} = profile

    const errors: ValidateProfileErr[] = []

    if(!first || !lastname){
        errors.push(ValidateProfileErr.INCORRECT_USER_DATA)
    }

    if(!age){
        errors.push(ValidateProfileErr.INCORRECT_AGE)
    }

    if(!country){
        errors.push(ValidateProfileErr.INCORRECT_COUNTRY)
    }
    return errors
}