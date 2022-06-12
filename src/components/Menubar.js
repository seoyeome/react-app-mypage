import MenubarCSS from './MenubarCSS.module.css';

function Menubar() {

  return(
    <div className={MenubarCSS.box}>
      <span className={MenubarCSS.menubar}>About</span>
      <span className={MenubarCSS.menubar}>Portfolio</span>
      <span className={MenubarCSS.menubar}>Study</span>
      <input type="date"/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Menubar;