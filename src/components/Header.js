import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGAUGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).then(() => {})
    .catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL}= user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse")
      } else {
       dispatch(removeUser());
       navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute py-2 px-5 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className='w-48 mx-20' src={LOGO_URL} alt="logo" />
      {user && <div className='flex items-center me-12 gap-2'>
        {showGptSearch  && <select className='p-2 bg-gray-700 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGAUGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
        </select>}
        <button className='py-2 px-4 bg-purple-700 text-white rounded-lg me-5 font-semibold' onClick={handleGptSearch}>{showGptSearch? "Home Page" : "GPT Search"}</button>
        <img className='w-10 h-10' src={user.photoURL} alt="usericon" />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header
