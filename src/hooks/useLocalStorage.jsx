import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, initialvalue) => {
    const [value, setValue] = useState(() => {
        try {
            const localValue = window.localStorage.getItem(key);
            return localValue ? JSON.parse(localValue) : initialvalue;
        } catch (err) {
            console.log(err)
            return initialvalue
        }
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

  return [value, setValue]
}

export default useLocalStorage