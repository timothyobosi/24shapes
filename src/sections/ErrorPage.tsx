import styles from './ErrorPage.module.css'

function ErrorPage() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <h1 className={styles.errorTitle}>404</h1>
        <h2 className={styles.errorTitle}>Error</h2>
        <p className={styles.errorSubtitle}>Kindly contact IT support</p>
      </div>
    </div>
  )
}

export default ErrorPage
