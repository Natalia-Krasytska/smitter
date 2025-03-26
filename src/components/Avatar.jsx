import React, { useState } from 'react';

const Avatar = ({ avatar, updateAvatar }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAvatarUrl, setNewAvatarUrl] = useState(avatar);


    const openModal = () => {
        setIsModalOpen(true);
    };


    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleInputChange = (e) => {
        setNewAvatarUrl(e.target.value);
    };


    const handleSubmit = () => {
        updateAvatar(newAvatarUrl);
        closeModal();
    };


    const handleCancel = () => {
        closeModal();
    };

    return (
        <div>
            <img
                className="user-avatar"
                src={avatar}
                alt="User Avatar"
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                onClick={openModal}
            />


            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h3>Enter the new Avatar URL</h3>
                        <input
                            type="text"
                            value={newAvatarUrl}
                            onChange={handleInputChange}
                            placeholder="Enter new Avatar URL"
                        />
                        <div>
                            <button onClick={handleSubmit}>OK</button>
                            <button onClick={handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Avatar;




