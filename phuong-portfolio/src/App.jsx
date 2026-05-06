import { useState } from 'react';
import { ConfigProvider } from 'antd';
import DeskScene from './components/desk/DeskScene.jsx';
import SectionPanel from './components/panels/SectionPanel.jsx';
import { theme } from './theme.js';

export default function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <ConfigProvider theme={theme}>
      <div className="desk-app">
        <div aria-hidden={activeSection ? 'true' : undefined}>
          <DeskScene activeSection={activeSection} onOpen={setActiveSection} />
        </div>
        <SectionPanel
          activeSection={activeSection}
          onSwitch={setActiveSection}
          onClose={() => setActiveSection(null)}
        />
      </div>
    </ConfigProvider>
  );
}
