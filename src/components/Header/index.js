import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import JueJin from '../JueJin';

import { parseImgur } from '../../api/images';

const Header = ({
  img,
  title,
  subTitle,
  authorImage,
  authorName,
  jueJinPostLink,
  jueJinLikeIconLink,
}) => (
  <div className="col-12 header" style={{ padding: 0 }} id="header">
    <div
      className="img-container"
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0), rgba(0, 51, 75) ), url(${img})`,
        marginTop: -58,
      }}
    >
      {title && <h1 className="u-title">{title}</h1>}
      {subTitle && (
      <div className="u-subtitle">
        <div className="m-left">
          {authorImage && (
          <img
            src="https://scontent-atl3-1.cdninstagram.com/vp/746ac7850dcad04b345fe4c13b612a6a/5D0C6D9D/t51.2885-19/s320x320/53435615_443981536142083_7429769272861130752_n.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com"
            className="author-image"
            alt={authorName}
          />
          )}
          <span className="author-name">{authorName}</span>
        </div>
        <span className="text">{subTitle}</span>
        {jueJinPostLink
              && jueJinLikeIconLink && (
                <JueJin
                  jueJinPostLink={jueJinPostLink}
                  jueJinLikeIconLink={jueJinLikeIconLink}
                />
        )}
      </div>
      )}
    </div>
  </div>
);

Header.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  authorName: PropTypes.string,
  authorImage: PropTypes.string,
  jueJinPostLink: PropTypes.string,
  jueJinLikeIconLink: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  subTitle: '',
  authorName: '',
  authorImage: '',
  jueJinPostLink: '',
  jueJinLikeIconLink: '',
};

export default Header;
