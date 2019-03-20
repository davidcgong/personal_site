import React from 'react';

import PropTypes from 'prop-types';

import Friend from '../Friend';
import LatestPost from '../LatestPost';
import './index.scss';

// eslint-disable-next-line react/prop-types
const Information = ({ totalCount, posts }) => (
  <div className="d-none d-lg-block information my-2">
    <hr />
    <p>
      {totalCount}
      {' '}
total posts
    </p>
    <hr />
    <LatestPost posts={posts} />
    {/* <Friend /> */}
  </div>
);

Information.propTypes = {
  totalCount: PropTypes.number.isRequired,
};

export default Information;
