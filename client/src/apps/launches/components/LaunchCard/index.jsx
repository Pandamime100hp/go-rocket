// REACT
import { useState } from 'react'

// PROPTYPES
import PropTypes from 'prop-types'

// COMPONENTS
import Overlay from '../../../../components/Overlay'
import LaunchOverlay from '../LaunchOverlay'

// CSS
import './index.css'

export default function LaunchCard({ item }) {
    // Handles overlay visibility
    const [isOverlayVisible, setIsOverlayVisible] = useState(false)

    const handleDisplayOverlay = () => {
        setIsOverlayVisible(true)
    }

    const handleHideOverlay = () => {
        setIsOverlayVisible(false)
    }

    return (
        <>
            <div className="card">
                <img src={item.links.patch.small} alt={item.name} />
                <h1>{item.name}</h1>
                <p>{item.date_utc}</p>
                <button onClick={handleDisplayOverlay}>View Details</button>
            </div>
            {/* Makes sure we are using the Overlay styling which is globally scoped */}
            {isOverlayVisible && <Overlay item={item} ItemComponent={LaunchOverlay} onClose={handleHideOverlay} />}
        </>
    )
}

LaunchCard.propTypes = {
    item: PropTypes.object
}