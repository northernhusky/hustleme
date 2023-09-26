import {useEffect, useState} from "react";
import * as Haptics from 'expo-haptics';

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [maxLengthError, setMaxLengthError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [inputValid, setInputValid] = useState(false)
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        for(const validation in validations) {
            switch (validation){
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
                    break;
                case 'isEmail':
                    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
                    reg.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                case 'isChecked':
                    value === true ? setIsChecked(false) : setIsChecked(true)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if(isEmpty || maxLengthError || minLengthError || emailError || isChecked) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    },[isEmpty, maxLengthError, minLengthError, emailError, isChecked])

    return {
        isEmpty, minLengthError, maxLengthError, emailError, inputValid, isChecked
    }
}

export const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)

    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e)
    }

    const onBlur = (e) => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
        setDirty(true)
    }

    return {
        value, onChange, onBlur, isDirty, ...valid
    }
}