import './App.css';
import NavTab from './Navtab.js';


export default function Nav() {
  const tabs = ['Home', 'Products', 'About', 'Contact Us'];

  const navItems = tabs.map((tabName, index) => {
    return <NavTab className='items' key={index} name={tabName} />;
  });


  return (
    <ul>
      {navItems}
    </ul>
  );
}