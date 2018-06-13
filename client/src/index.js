import App from './components/App'

ReactDOM.render(<App />, document.querySelector('#app'));

window.onload = ()=>{
    document.querySelector(".progressBar").style.width = '100%';
    setTimeout(()=>{
        document.querySelector(".progressBar").style.display = 'none';
    },1000)
}