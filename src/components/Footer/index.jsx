import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import s from './s.module.scss';

const Friend = ({ name, link }) => (
  <a className={s.friendLink} href={link}>
    <svg
      className={s.friendIcon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 165 218"
      fill="none"
    >
      <path
        fill="#000"
        d="M82.771.638C37.248.837.483 37.85.588 83.37v128.805l8.52-9.132c6.835-7.214 18.172-7.678 25.569-1.042l17.669 15.999 18.18-16.436c6.943-6.336 17.57-6.336 24.514 0l18.172 16.436 17.669-15.991c7.396-6.632 18.729-6.172 25.568 1.034l8.508 9.066V83.363C165.059 37.843 128.29.833 82.771.638zM46.244 137.6c-15.367 0-27.39-16.042-27.39-36.523s12.023-36.523 27.39-36.523c15.37 0 27.394 16.042 27.394 36.523s-12.023 36.523-27.394 36.523zm36.527-100.44a45.014 45.014 0 0 0-25.05 7.595 9.135 9.135 0 1 1-10.135-15.203A63.317 63.317 0 0 1 82.771 18.9c5.04 0 9.129 4.089 9.129 9.13 0 5.043-4.089 9.132-9.129 9.132zm36.523 100.44c-15.367 0-27.394-16.042-27.394-36.523s12.027-36.523 27.394-36.523c15.367 0 27.394 16.042 27.394 36.523s-12.027 36.523-27.394 36.523z"
      />
      <path
        fill="#000"
        d="M128.423 101.078c0-10.088-4.085-18.261-9.129-18.261s-9.133 8.173-9.133 18.261c0 10.085 4.089 18.262 9.133 18.262 5.044 0 9.129-8.177 9.129-18.262zM55.377 101.078c0-10.088-4.089-18.261-9.133-18.261-5.04 0-9.129 8.173-9.129 18.261 0 10.085 4.089 18.262 9.129 18.262 5.044 0 9.133-8.177 9.133-18.262z"
      />
    </svg>
    <span className={s.friendName}>{name}</span>
  </a>
);

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            footerLinks {
              link
              name
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { footerLinks },
      },
    }) => {
      return (
        <footer className={s.footer}>
          <p>Built with love.</p>
          <div className={s.friends}>
            <span className={s.friendLabel}>Friends of RK:</span>
            {!!footerLinks &&
              footerLinks.map(link => (
                <Friend key={`friend-link-${link.name}`} {...link} />
              ))}
          </div>
        </footer>
      );
    }}
  />
);

export default Footer;
