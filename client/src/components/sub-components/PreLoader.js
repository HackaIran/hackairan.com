import React from 'react'

class PreLoader extends React.Component {
    render() {
        return (
            <div class="preloader">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="32" width="32" viewBox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"></circle></svg>
            </div>
        )
    }
}

export default PreLoader