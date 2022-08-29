const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = (()=>{
    const input = $('#input');
    const button = $('#button');
    const list = $('#list');

    const cars = ['BMW'];

    return{
        add(car){
            cars.push(car);
        },

        delete(index){
            cars.splice(index, 1);
        },

        render(){
            const html =  cars.map(function(car,index){
                return `
                <li>
                    ${car}
                    <span class="delete" data-index="${index}"> (X) </span>
                </li>`;
            }).join('');

            list.innerHTML = html;

        },

        handleDelete(e){
            const deleteBtn = e.target.closest('.delete');
            if(deleteBtn){
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render();
            }
        },

        init(){
            button.onclick = ()=>{
                const car = input.value;
                this.add(car);
                this.render();

                input.focus();
                input.value = null;
            }

            list.onclick = this.handleDelete.bind(this);

            this.render();
        }
    }
})()

app.init();