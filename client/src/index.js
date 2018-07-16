import SubPageApp from './components/SubPageApp'
import MainPageApp from './components/MainPageApp'

let app = document.querySelector('#app');
console.log(app)
if(app.classList.contains("subPage")){
    ReactDOM.render(<SubPageApp />, app);
}else{
    ReactDOM.render(<MainPageApp />, app);
}

window.onload = ()=>{
    document.querySelector(".progressBar").style.width = '100%';
    setTimeout(()=>{
        document.querySelector(".progressBar").style.display = 'none';
    },1000)
}