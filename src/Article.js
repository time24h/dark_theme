import React from 'react';
import moment from 'moment';
import 'moment/locale/id';
// moment.locale('id');

function Article({ img, id, title, category, berita, menit, date }) {
  return (
    <article className='news-card' key={id}>
      <img src={img} alt='' />
      <div className='news-info'>
        <h4 className='news_category'>{category}</h4>
        <p className='new_date'>{moment(date).format('DD MMMM YYYY')}</p>
        <h3 className='news_title'>{title}</h3>
        <p className='news_time'>
          <span>{berita}</span> - {menit} menit yang lalu
        </p>
      </div>
    </article>
  );
}

export default Article;
