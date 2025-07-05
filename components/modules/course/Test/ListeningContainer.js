import React from 'react';
import styles from './AudioPlayer.module.css'; // فایل CSS برای استایل‌ها

const AudioPlayer = ({ listening }) => {
    return (
        <div className={styles.audioPlayer}>
            <audio controls src={listening} className={styles.audioElement}></audio>
        </div>
    );
};

export default AudioPlayer;
