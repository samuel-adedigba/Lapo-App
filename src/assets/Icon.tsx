import React from 'react';

export type IconName =
  | 'notification-bell'
  | 'alert-warning'
  | 'arrow-up'
  | 'calendar'
  | 'card1'
  | 'card2'
  | 'card3'
  | 'cardinfra'
  | 'home'
  | 'hourglass'
  | 'icon1'
  | 'lapo-logo'
  | 'logout'
  | 'profile'
  | 'right-arrow'
  | 'search'
  | 'building'
  | 'roles'
  | 'users'
  | 'card-scheme'
  | 'card-profile'
  | 'card-request'
  | 'stocks'
  | 'credit-card'
  | 'auth-list'
  | 'auth'
  | 'trail'
  | 'user'
  |'loading'
  | 'ready'
  | 'download'
  | 'send'
  | 'mark'
  | 'success'
  | 'fail'
  | 'delete'
  | 'pen'
  | 'plus'
  | 'cancel'
  | 'box-plus'
  | 'arrow-left'
  |'card-crumb'
  | 'right-crumb'
  | 'credit-card-crumb'
  | 'menu';

interface IconProps {
  name: IconName; 
  className?: string; 
  size?: number; 
  onClick?: () => void;
}

const iconPaths: Record<IconName, string> = {
  'notification-bell': '/bell.png',
  'alert-warning': '/alert-circle.png',
  'arrow-up': '/arrow-narrow-up-right.png',
  calendar: '/calendar.png',
  card1: '/card1.png',
  card2: '/card2.png',
  card3: '/card3.png',
  cardinfra: '/cardinfra.png',
  home: '/home.png',
  hourglass: '/hourglass.png',
  icon1: '/Icon1.png',
  'lapo-logo': '/lapo_logo.png',
  logout: '/logout-02.png',
  profile: '/profile.png',
  'right-arrow': '/right_arrow.png',
  search: '/search.png',
  building: '/building.png',
  roles: '/roles.png',
  users: '/users.png',
  'card-scheme': '/card_scheme.png',
  'card-profile': '/card_profile.png',
  'card-request': '/card_request.png',
  stocks: '/stocks.png',
  'credit-card': '/credit-card.png',
  'auth-list': '/list.png',
  auth: '/auth-que.png',
  trail: '/trail.png',
  user: '/user.png',
  loading: '/loading.png',
  ready: '/ready.png',
  download : '/download.png',
  send : '/send.png',
  mark : '/mark.png',
  success: '/success.png',
  delete: '/delete.png',
  pen: '/pen.png',
  plus: '/plus.png',
  cancel: '/cancel.png',
  'box-plus': '/box-plus.png',
  'arrow-left' :'/arrow-left.png',
  'card-crumb' : 'card-crumb.png',
  'right-crumb' : 'right-crumb.png',
  'credit-card-crumb' : 'credit-card-crumb.png',
  fail: '',
  menu: '', // Empty for now
};

export const Icon: React.FC<IconProps> = ({ name, className = '', size = 6, onClick }) => {
  const iconPath = iconPaths[name];

  if (!iconPath) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <span className={`inline-block ${className}`} onClick={onClick}>
      <img src={iconPath} alt={name} className={`w-${size} h-${size}`} />
    </span>
  );
};