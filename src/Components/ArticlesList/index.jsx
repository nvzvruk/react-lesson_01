import React, { Component } from 'react';
import Article from './Components/Article';
import './index.scss';

class ArticleList extends Component {

   articleContents = [
    {
      title: 'Article1 Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dskjfhsdof sijdsfifjsdo spfsdjfi sdj sodifjdsofi sdf  sdopfjsdof Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dskjfhsdof sijdsfifjsdo spfsdjfi sdj sodifjd',
      date: new Date('1995-12-17T03:24:00'),
      comments: ['Article1 Comment1']
    },
    {
      title: 'Article2 Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sdfosfisdofisdo sdiofjs oifs sidfsofisdof sidfhsdofishdof i sdifdsofi Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dskjfhsdof sijdsfifjsdo spfsdjfi sdj sodifjd',
      date: new Date('1995-12-17T03:24:00'),
      comments: ['Article2 Comment1', 'Article2 Comment2', 'Article2 Comment3', 'Article2 Comment4']
    },
    {
      title: 'Article3 Title',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sfsdif hso sdifjsd fjdofs dfusdif dshfushdoifsjfophj sifhisdjgksld sdfopsdf Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do dskjfhsdof sijdsfifjsdo spfsdjfi sdj sodifjd',
      date: new Date('1995-12-17T03:24:00'),
      comments: ['Article3 Comment1', 'Article3 Comment2', 'Article3 Comment3']
    }
  ];

  render() {
    return (
      <div className="article-list">
        {
          this.articleContents.map((item, index) => <Article title={item.title}
                                                    text={item.text}
                                                    comments={item.comments}
                                                    key={index}/>)
        }
      </div>
    );
  }
}

export default ArticleList;
