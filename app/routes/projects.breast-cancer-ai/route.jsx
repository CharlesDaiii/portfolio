import { baseMeta } from '~/utils/meta';

export const meta = () => {
  return baseMeta({
    title: 'Breast Cancer Conversational AI Research | Ziying Qi',
    description: 'UX research focusing on conversational AI interfaces for breast cancer support.',
  });
};

export default function BreastCancerAI() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '80px 32px',
      color: 'var(--text-primary)'
    }}>
      <div style={{ marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '400',
          marginBottom: '20px'
        }}>
          Breast Cancer Conversational AI Research
        </h1>
        <div style={{
          width: '100%',
          height: 'auto',
          backgroundColor: 'var(--background-light)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '40px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          overflow: 'hidden'
        }}>
          <img 
            src="/assets/breast-cancer-conversationalAI/截屏2025-04-21 15.37.33.png" 
            alt="Breast Cancer Conversational AI Project" 
            style={{ width: '100%', height: 'auto', maxHeight: '600px', objectFit: 'contain' }}
          />
        </div>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '500',
            marginBottom: '16px'
          }}>
            My Role
          </h2>
          <p style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.6',
            color: 'var(--text-secondary)'
          }}>
            UX Researcher focusing on conversational AI interfaces
          </p>
        </div>
        
        <div>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: '500',
            marginBottom: '16px'
          }}>
            Team
          </h2>
          <ul style={{ 
            fontSize: '1.1rem', 
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            paddingLeft: '20px'
          }}>
            <li>Haiyi Zhu</li>
            <li>Seyun Kim</li>
            <li>Maggie Chen</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 