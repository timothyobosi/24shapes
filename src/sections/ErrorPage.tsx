import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>Error</h1>
        <p className={styles.errorSubtitle}>Kindly contact IT support</p>
      </div>
    </div>
  )
}

export default ErrorPage
