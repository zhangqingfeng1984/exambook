import styles from './index.module.css'
export const Header = () => {
    return (
        <div className={styles.appHeader}>
            <div className={styles.brand}>Neetomi</div>
            <div className={styles.menus}>
                <ul>
                    <li>Practice test</li>
                    <li>Mock Test</li>
                    <li>Past papers Test</li>
                    <li>Merchandise</li>
                </ul>
            </div>
            <div className={styles.search}>
                <input placeholder='Search Anything' />
            </div>
            <div>Sign in</div>
        </div>
    )
}