import './App.css';
import NavTab from './Navtab.js';
import Button from './Button.js'




export default function Nav() {
  const tabs = ['Home', 'Products', 'About', 'Contact Us'];

  const navItems = tabs.map((tabName, index) => {
    return <NavTab key={index} name={tabName} />;
  });


  return (
    <div className='navBox'>
      <Button />
    <ul>
      {navItems}
    </ul>
    </div>
  );
}