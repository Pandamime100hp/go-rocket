import axios from 'axios'

export const getData = async () => {
    const launchData = await axios.get('https://api.spacexdata.com/v4/launches')
    return launchData
}