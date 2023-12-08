import React from 'react';
import styles from './ControlPanel.module.css';

type TControlPanelProps = {}

function ControlPanel(props: TControlPanelProps) {
  return (
    <div className={styles.root}>Панель управления</div>
  );
}

export default ControlPanel;
