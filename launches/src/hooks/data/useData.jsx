import { useGetData } from "./useDataGet"

export const useData = () => {

    const { data, loading, error } = useGetData()


    return { data, loading, error }
}