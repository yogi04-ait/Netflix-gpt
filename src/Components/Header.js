import React, { useState, useEffect } from 'react';
import Logo from '../Assest/img/Logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { PROFILE_IMG } from '../utils/Constants';

const Header = () => {
  const dispatch = useDispatch();
  const [isDropdown, setIsDropdown] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const toggleDropDown = () => {
    setIsDropdown(!isDropdown);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        dispatch(addUser(userName));
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid:uid, email : email, displayName:displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const userName = user?.displayName;

  return (
    <div className="flex justify-between">
      <div className="absolute z-10 px-8 py-2 bg-gradient-to-b w-full flex justify-between from-black">
        <img width="180px" src={Logo} alt="Logo" />

        {user && (
          
          <img
            className='w-10 h-10 mt-5 '
            onClick={toggleDropDown}
            src={PROFILE_IMG}
            alt="Profile"
          />
          )}

          {
            isDropdown && (
            <div className="absolute bg-[#333333] text-slate-400 mt-16 w-60 right-2 p-2 rounded-lg shadow-lg">
              <ul>
                <div className="">Hey {userName}👋 </div>
                <button onClick={handleSignOut}>Sign out</button>
              </ul>
            </div>
          )}

      </div>
    </div>
  );
};

export default Header;
