import styles from './main.page.module.scss';

export const MainPage: React.VFC = (): JSX.Element => {
    return (
        <div className={styles.page}>
            <h3>Hello World</h3>
        </div>
    );
};
