import React, { useState, useEffect } from 'react';
import { news_ } from './data';
import Article from './Article';
import { FaSun, FaMoon } from 'react-icons/fa';

const getThemeStorage = () => {
  let theme = 'dark-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};
function App() {
  const [Btn, setBtn] = useState(false);
  const [theme, setTheme] = useState(getThemeStorage());

  const changeTheme = () => {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
      setBtn(true);
    } else {
      setTheme('dark-theme');
      setBtn(false);
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <h3>berita terkini</h3>
        <button className='changeBtn' onClick={changeTheme}>
          {Btn ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
      <section className='news'>
        <div className='title'>
          <h2>terbaru</h2>
        </div>
        <div className='list_news'>
          {news_.map((item) => {
            return <Article {...item} key={item.id} />;
          })}
        </div>
        <footer>
          <p>
            - &copy; berita terkini 2022{' '}
            <span className='footer_'>all right reserverd</span>. -
          </p>
        </footer>
      </section>
    </main>
  );
}

export default App;
