import React, { useState } from 'react';
import axios from 'axios';

const CreateRepositoryForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/repositories', { title, description });
            alert('リポジトリが正常に作成されました！');
            setTitle('');
            setDescription('');
        } catch (err) {
            console.error(err);
            alert('リポジトリの作成中にエラーが発生しました。');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Create Repository</button>
        </form>
    );
};

export default CreateRepositoryForm;
