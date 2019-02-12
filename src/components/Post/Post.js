import React from 'react';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';

import Author from '../Author';
import SubscribeForm from '../SubscribeForm';
import Share from '../Share';

const Post = ({ post }) => {
  const {
    tags,
    title,
    date,
    description,
    slug,
  } = post.frontmatter;

  const { html } = post;
  const { tagSlugs } = post.fields;

  return (
    <div className={styles['post']}>
      <div className={styles['post__content']}>
        <Content body={html} title={title} subtitle={description} />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date} />
        <Tags tags={tags} tagSlugs={tagSlugs} />
        <div className={styles['post__authorContainer']}>
          <Author showBio />
        </div>
      </div>

    </div>
  );
};

export default Post;
