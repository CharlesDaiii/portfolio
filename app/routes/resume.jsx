import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    title: 'Resume',
    description: 'Ziying Qi\'s Resume',
  });
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    backgroundColor: 'var(--background)',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 999,
  },
  pdf: {
    width: '100%',
    height: '100%',
    border: 'none',
  }
};

export default function Resume() {
  return (
    <main style={styles.container}>
      <object
        data="/assets/resume/Resume-ZiyingQi.pdf"
        type="application/pdf"
        style={styles.pdf}
      >
        <p>
          Your browser does not support PDFs.
          You can <a href="/assets/resume/Resume-ZiyingQi.pdf" download>download the PDF</a> instead.
        </p>
      </object>
    </main>
  );
} 