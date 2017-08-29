import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
  <ul className='sidebar-menu'>
    <MenuItem path='#' label='Dashboard' icon='dashboard' />
    <MenuTree label='Menu' icon='edit'>
      <MenuItem path='#billingCycles'
        label='Cidades' icon='search' />
    </MenuTree>
  </ul>
);
