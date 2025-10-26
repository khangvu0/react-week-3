import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Hard.css';

export default function TaskDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const task = location.state?.task;

    return (
        <div className="hard-container">
            <h1>Task Detail</h1>

            {task ? (
                <>
                    <p>
                        <strong>Task:</strong> {task}
                    </p>
                    <button
                        className="back-button"
                        onClick={() => navigate(-1)}>
                        Back
                    </button>
                </>
            ) : (
                <>
                    <p>No task found. Please go back.</p>
                    <button
                        className="back-button"
                        onClick={() => navigate(-1)}>
                        Back
                    </button>
                </>
            )}
        </div>
    );
}
