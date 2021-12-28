import html2canvas, { Options } from 'html2canvas';
import styles from './app.layout.module.scss';

const renderOptions: Partial<Options> = {
    backgroundColor: null
};

function downloadCanvas(canvas: HTMLCanvasElement) {
    canvas.style.display = 'none';

    const image = canvas.toDataURL('png');

    const a = document.createElement('a');
    a.setAttribute('download', `${document.title}_${Date.now()}.png`);
    a.setAttribute('href', image);
    a.click();
}

export const AppLayout: React.FC = ({ children }): JSX.Element => {
    async function print() {
        const content = document.getElementById('content');

        if (content) {
            const canvas = await html2canvas(content, renderOptions);

            downloadCanvas(canvas);
        }
    }

    return (
        <main className={styles.layout}>
            <header className={styles.header}>
                <button onClick={print}>Print</button>
            </header>

            <article id='content'>{children}</article>
        </main>
    );
};
