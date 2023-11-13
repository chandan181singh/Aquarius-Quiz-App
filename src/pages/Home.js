import classes from './Home.module.css'

const HomePage = () => {
  return (
    <>
    <div className={classes.body}>
    <header>
        <h1>Header</h1>
        <nav>
            <h2>Nav</h2>
        </nav>
    </header>

    <main>
        <h2>Main</h2>
    </main>

    <footer>
        <h2>Footer</h2>
    </footer>
    </div>
    
  </>
  );
}


export default HomePage;