// COMPONENTS
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import CardGallery from '../../components/CardGallery'
import LaunchCard from './components/LaunchCard'

// HOOKS
import useGetData from '../../../../shared/utility/hooks/useGetData'

import process from 'process'

export default function Launches() {
    const url = import.meta.env.VITE_GO_ROCKET_BASE_URL || process.env.GO_ROCKET_BASE_URL
    const endpoint = `${url}/launches`

    const { data: launches, loading, error } = useGetData(endpoint)

    if (loading) return <Loading />
    if (error) return <Error error={error} />

    return (
        <>
            <CardGallery data={launches} ItemComponent={LaunchCard} />
        </>
    )
}