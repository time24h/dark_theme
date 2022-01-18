import React from 'react';
import moment from 'moment';

function Article({ img, id, title, category, berita, menit, date }) {
  console.log(date);
  return (
    <article className='news-card' key={id}>
      <img src={img} alt='' />
      <div className='news-info'>
        <h4 className='news_category'>{category}</h4>
        <p className='new_date'>{moment(date).format('Do MMMM YYYY')}</p>
        <h3 className='news_title'>{title}</h3>
        <p className='news_time'>
          <span>{berita}</span> - {menit} menit yang lalu
        </p>
      </div>
    </article>
  );
}

export default Article;
