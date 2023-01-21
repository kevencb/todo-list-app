import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [item, setItem] = useState(initialValue)

    useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                }
                setItem(parsedItem)
                setLoading(false)
            } catch (error) {
                setError(error)
            }
        }, 1000)
    })

    const savedItem = (newItem) => {
        try {
            const stringifyItem = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifyItem)
            setItem(newItem)
        } catch (error) {
            setError(error)
        }
    }

    return { item, savedItem, loading }
}

export { useLocalStorage }