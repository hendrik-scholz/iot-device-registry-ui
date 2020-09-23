import React from 'react'

import styles from './error.module.css'

function error() {
    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorMessage}>Page not found!</h1>
        </div>
    )
}

export default error
