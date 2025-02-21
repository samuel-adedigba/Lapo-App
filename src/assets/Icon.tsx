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
  | 'menu';

interface IconProps {
  name: IconName; 
  className?: string; 
  size?: number; 
  onClick?: () => void;
}

const iconPaths: Record<IconName, string> = {
  'notification-bell': '../src/assets/bell.png',
  'alert-warning': '../src/assets/alert-circle.png',
  'arrow-up': '../src/assets/arrow-narrow-up.png',
  calendar: '../src/assets/calendar.png',
  card1: '../src/assets/card1.png',
  card2: '../src/assets/card2.png',
  card3: '../src/assets/card3.png',
  cardinfra: '../src/assets/cardinfra.png',
  home: '../src/assets/home.png',
  hourglass: '../src/assets/hourglass.png',
  icon1: '../src/assets/Icon1.png',
  'lapo-logo': '../src/assets/lapo_logo.png',
  logout: '../src/assets/logout-02.png',
  profile: '../src/assets/profile.png',
  'right-arrow': '../src/assets/right_arrow.png',
  search: '../src/assets/search.png',
  building: '../src/assets/building.png',
  roles: '../src/assets/roles.png',
  users: '../src/assets/users.png',
  'card-scheme': '../src/assets/card_scheme.png',
  'card-profile': '../src/assets/card_profile.png',
  'card-request': '../src/assets/card_request.png',
  stocks: '../src/assets/stocks.png',
  'credit-card': '../src/assets/credit-card.png',
  'auth-list': '../src/assets/list.png',
  auth: '../src/assets/auth-que.png',
  trail: '../src/assets/trail.png',
  user: '../src/assets/user.png',
  loading: '../src/assets/loading.png',
  ready: '../src/assets/ready.png',
  download : '../src/assets/download.png',
  send : '../src/assets/send.png',
  mark : '../src/assets/mark.png',
  success: '../src/assets/success.png',
  delete: '../src/assets/delete.png',
  pen: '../src/assets/pen.png',
  plus: '../src/assets/plus.png',
  cancel: '../src/assets/cancel.png',
  'box-plus': '../src/assets/box-plus.png',
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