import { useData } from "../../hooks/data/useData"

const Body = () => {
    const { data, loading, error } = useData()

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error.message}</p>
    }

    console.log(data)

    return (
        <>
            <h1>Body</h1>
        </>
    )
}

export default Body