import { useState } from 'react'

import { getData } from '../../util/data/getData'

export const useGetData = async () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    try {
        const launchData = await getData()
        setData(launchData)
    } catch (error) {
        setError(error)
    } finally {
        setLoading(false)
    }

    return { data, loading, error }
}
