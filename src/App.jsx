import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import { useState } from "react";
import { TwitterContext } from "./utils/Context.js";
import Avatar from './components/Avatar';

function App() {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    });
    const [stats, setStats] = useState({
        followers: 10,
        following: 100
    });


    const updateAvatar = (newAvatarUrl) => {
        if (newAvatarUrl.trim()) {
            setUser((prevUser) => ({
                ...prevUser,
                avatar: newAvatarUrl
            }));
        }
    };

    return (
        <div className={`app`}>
            <TwitterContext.Provider value={{ user, stats }}>
                <Navigation />
                <Body />
                {}
                <Avatar
                    avatar={user.avatar}
                    updateAvatar={updateAvatar}
                />
            </TwitterContext.Provider>
        </div>
    );
}

export default App;
